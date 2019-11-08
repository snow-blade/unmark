<template>
	<div class="c-note" id="c-note">
		<svg style="display: none;" class="lines" xmlns='http://www.w3.org/2000/svg' width='90' height='32'>
			<rect width='90' height='1' fill='#f1f1f1'/>
		</svg>

		<div class="c-header">
			<input
				class="c-header__title"
				id="title"
				autocomplete="off"
				maxlength="25"
				placeholder="It begins with a word"

				v-model="title"
				@blur="hide_title_placeholder()"
				@keydown.enter.prevent="focus_on_text"
				ref="title"></input>
		</div>
		
		<div class="c-page"
			:style="{
				'text-align': options.text_align || DEFAULT_OPTIONS.text_align,
				'direction': options.text_align == 'right' ? 'rtl' :'ltr',
				'font-family': options.font || DEFAULT_OPTIONS.font
			}"
    >
			
			<span class="c-page__date select-none">
				Oct 26, 2019 at 11:02  PM</span>
									
			<div 
				tabindex="0" 
				class="c-page__text" 
				contenteditable="true"
				ref="text"
				@mouseup.stop="mouseup_callback"
				@keydown="$emit('hide_edit_menu')"
				v-html="text"
        style="transition: 1s all;" 
			>
			</div>
		</div>
	</div>
</template>

<script>


import {
	get_month_name,
	generate_strikethrough_element,
	generate_bold_element,
	generate_highlighted_element,
	svgToBase64Image,
} from '../utils'

import {
	HIGHLIGHT_COLORS, 
	FONTS,
	ALIGNS,
	DEFAULT_OPTIONS
} from '../constants'

import Highlighter from '../highlighter'

export default {
  name: 'Note',

	data () {
		return {
			title: "",
			selected_text_rect: null,
			text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut <span data-class="highlighted--red" class="is-highlighted highlighted--red">labore dolore magna aliqua</span>. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. <span data-highlighted="true" data-class="highlighted--blue" class="is-highlighted highlighted--yellow">Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            text: ''
		}
	},

	props: {
		options: {
	    	type: Object,
	    	required: true,
	    	default: {}
	  	}
	},

  computed: {
    date() {
    	let date = new Date()
    	let [month, day, year, time] = [
    		get_month_name(date.getMonth()), 
    		date.getDate(), 
    		date.getFullYear(), 
    		new Date().toLocaleTimeString()
    	]

    	time = time.slice(0, time.length - 6) + ' ' + time.slice(8) // Remove the seconds

    	return `${month} ${day}, ${year} at ${time}`
    },
    
    DEFAULT_OPTIONS() { return DEFAULT_OPTIONS },
  },

  mounted() {
  	this.highlighter = new Highlighter(this.$refs.text)
  	
    // Generate page lines..
  	document.getElementById('title').focus()

  	// var svgs = document.getElementsByClassName('lines')
  	// var urls = []
  	// for (var i = 0; i < svgs.length; i++)
  	// 	urls.push('url("' + svgToBase64Image(svgs[i]) + '")')
  	// var url = urls.join(',')
  	// let node = document.getElementsByClassName('c-page')[0]
  	// node.style.backgroundImage = url
  },

  methods: {
    focus_on_text() { this.$refs.text.focus() },

    mouseup_callback(e) { this.$emit('mouseup_callback') },

    hide_title_placeholder() { this.$refs.title.placeholder = "" },

		bold() { document.execCommand('bold') },

    strikethrough() { this.highlighter.mark('strikethrough') },

		highlight(class_name) { 
      class_name = class_name || HIGHLIGHT_COLORS[this.options.highlight_color_index].class
      this.highlighter.mark(class_name) 
    }
  }
}
</script>