export const highlight = (highlight_color = 'red') => (`
	<svg width="31px" height="30px" viewBox="0 0 31 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="z" transform="translate(-558.000000, -110.000000)">
              <g id="Group-2" transform="translate(558.000000, 110.000000)">
                  <path d="M30.4643208,29 C30.7656605,29 31.0000358,29.3437503 31.0000358,29.7857149 L31.0000358,31.3571448 C31.0000358,31.7991094 30.7656605,32.1428597 30.4643208,32.1428597 L1.53571492,32.1428597 C1.23437528,32.1428597 1,31.7991094 1,31.3571448 L1,29.7857149 C1,29.3437503 1.23437528,29 1.53571492,29 L30.4643208,29 Z" id="Path" fill="${highlight_color}"></path>
                  <path d="M26.3336785,1.39181287 C26.8794569,1.90123712 27.2887846,2.43339554 27.5616738,2.98830409 C27.8345631,3.54321265 27.9801018,4.10266125 27.9982944,4.66666667 C28.016487,5.26705953 27.8891406,5.8537983 27.6162514,6.42690058 C27.3433622,7.00000287 26.9431307,7.55945146 26.4155448,8.10526316 C26.1608482,8.37816901 25.1420771,9.39700222 23.3592008,11.1617934 C21.5763246,12.9265845 19.6524844,14.8323484 17.5876226,16.8791423 C15.5227608,18.9259362 13.6262092,20.8044099 11.8979108,22.5146199 C10.1696124,24.2248299 9.22361057,25.1617926 9.05987704,25.3255361 C9.00529919,25.3801172 8.94617408,25.4256009 8.88249993,25.4619883 C8.81882578,25.4983758 8.7506045,25.5256659 8.67783404,25.5438596 C8.42313743,25.6166345 7.88646334,25.784924 7.06779567,26.0487329 C6.249128,26.3125419 5.40773219,26.5808953 4.54358298,26.8538012 C3.67943377,27.126707 2.90171116,27.376867 2.21039179,27.6042885 C1.51907243,27.83171 1.16432176,27.9454191 1.14612914,27.9454191 C1.10974391,27.9636128 1.06881114,27.9772579 1.02332961,27.9863548 C0.977848069,27.9954516 0.927819128,28 0.873241284,28 C0.764085595,28 0.654931543,27.9772582 0.545775853,27.9317739 C0.436620164,27.8862896 0.345658454,27.8180641 0.272887995,27.7270955 C0.145539691,27.6179332 0.063674152,27.4814823 0.0272889223,27.3177388 C-0.00909630743,27.1539953 -0.00909630743,26.9902542 0.0272889223,26.8265107 C0.0454815372,26.808317 0.154635589,26.4671898 0.354754353,25.8031189 C0.554873116,25.139048 0.786825476,24.3703747 1.05061839,23.497076 C1.31441131,22.6237773 1.56910409,21.7732335 1.8147044,20.9454191 C2.0603047,20.1176047 2.22858386,19.5217692 2.31954693,19.1578947 C2.35593216,19.0851198 2.39231685,19.0168944 2.42870208,18.9532164 C2.46508731,18.8895383 2.51056816,18.8304096 2.56514601,18.7758285 L11.0246696,10.3157895 C13.1532056,8.18712386 15.1225266,6.2131345 16.9326918,4.39376218 C18.7428569,2.57438986 19.7115991,1.610137 19.8389475,1.50097466 C20.0208736,1.31903743 20.412009,1.02339386 21.0123652,0.614035088 C21.6127215,0.204676316 22.3495114,0 23.2227569,0 C23.786728,0 24.3279501,0.118257427 24.8464397,0.354775828 C25.3649292,0.59129423 25.8606705,0.936969786 26.3336785,1.39181287 Z M19.9085546,4 C19.0304774,4.86066408 17.9095447,5.97389765 16.5457227,7.33973412 C15.1819008,8.70557059 13.7760643,10.1181611 12.3281711,11.577548 C10.8802779,13.0369349 9.49312364,14.4308156 8.16666667,15.7592319 L5,18.9305761 C5.37364985,19.0802568 5.78932908,19.2954196 6.24705015,19.5760709 C6.70477122,19.8567222 7.16715597,20.2309184 7.63421829,20.6986706 C8.00786814,21.0915825 8.3207952,21.4891659 8.57300885,21.8914328 C8.8252225,22.2936997 9.02605628,22.6632184 9.17551622,23 C9.96018091,22.2141763 11.0110554,21.1711045 12.3281711,19.8707533 C13.6452868,18.5704022 15.0231,17.2045862 16.4616519,15.7732644 C17.9002038,14.3419426 19.2966992,12.9527394 20.6511799,11.605613 C22.0056607,10.2584866 23.1219228,9.15460795 24,8.29394387 C23.9813175,8.14426316 23.8738948,7.79345426 23.6777286,7.24150665 C23.4815624,6.68955903 23.1032476,6.13294225 22.5427729,5.57163959 C21.9822981,5.02904702 21.4591961,4.64549595 20.9734513,4.42097489 C20.4877065,4.19645383 20.1327445,4.05613027 19.9085546,4 Z M3.88235294,20 C3.66666559,20.7254938 3.36764897,21.6862685 2.98529412,22.8823529 C2.60293926,24.0784374 2.27451118,25.1176426 2,26 C2.92157324,25.7058809 3.99019,25.3529432 5.20588235,24.9411765 C6.42157471,24.5294097 7.35293794,24.2156874 8,24 C7.90196029,23.7058809 7.74509912,23.3431394 7.52941176,22.9117647 C7.31372441,22.48039 7.00000206,22.0588256 6.58823529,21.6470588 C6.03921294,21.0980365 5.51961029,20.7009816 5.02941176,20.4558824 C4.53921324,20.2107831 4.15686412,20.0588238 3.88235294,20 Z M24.9637306,6.81770833 C25.3091554,6.47048437 25.5682202,6.12326563 25.7409326,5.77604167 C25.9136451,5.42881771 26,5.0989599 26,4.78645833 C26,4.47395677 25.9093273,4.15277943 25.7279793,3.82291667 C25.5466312,3.49305391 25.2832487,3.16319609 24.9378238,2.83333333 C24.6614839,2.55555417 24.3721949,2.34722292 24.0699482,2.20833333 C23.7677014,2.06944375 23.4611415,2 23.1502591,2 C22.6148505,2 22.1528517,2.1388875 21.7642487,2.41666667 C21.3756457,2.69444583 21.1640762,2.85937474 21.1295337,2.91145833 L21,3.04166667 C21.3281536,3.18055625 21.6908443,3.3758668 22.0880829,3.62760417 C22.4853215,3.87934154 22.8911896,4.21353958 23.3056995,4.63020833 C23.7029381,5.02951589 24.0224513,5.43749792 24.2642487,5.85416667 C24.5060461,6.27083542 24.6873915,6.65277604 24.8082902,7 C24.8428326,6.9652776 24.8730569,6.93055573 24.8989637,6.89583333 C24.9248706,6.86111094 24.9464593,6.83506953 24.9637306,6.81770833 Z" id="" fill="currentColor"></path>
              </g>
          </g>
      </g>
  	</svg>
`)

export const strikethrough = () => (`
	<svg width="30px" height="26px" viewBox="0 0 30 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	      <g id="z" transform="translate(-573.000000, -141.000000)">
	          <g id="Group" transform="translate(573.000000, 141.000000)">
	              <path d="M29.4643208,12.8571582 C29.7656605,12.8571582 30.0000358,13.0915335 30.0000358,13.3928731 L30.0000358,14.464303 C30.0000358,14.7656426 29.7656605,15.0000179 29.4643208,15.0000179 L0.535714924,15.0000179 C0.234375279,15.0000179 -1.77635684e-15,14.7656426 -1.77635684e-15,14.464303 L-1.77635684e-15,13.3928731 C-1.77635684e-15,13.0915335 0.234375279,12.8571582 0.535714924,12.8571582 L29.4643208,12.8571582 Z" id="Path" fill="#F23B31"></path>
	              <path d="M8.08594714,11.7857283 C7.7678664,11.3839421 7.48326785,10.9319327 7.23215148,10.446441 C6.69643655,9.35827008 6.42857909,8.30358133 6.42857909,7.29911584 C6.42857909,5.2567027 7.1819282,3.54911137 8.67188534,2.12611861 C10.1618425,0.703125838 12.3549254,1.77635684e-15 15.2511343,1.77635684e-15 C15.8872957,1.77635684e-15 16.8080558,0.11718764 18.0468965,0.318080736 C18.7835045,0.452009467 19.7712289,0.71986693 21.0100697,1.12165312 C21.1272573,1.5569215 21.244445,2.22656515 21.3616326,3.09710191 C21.5123024,4.41964813 21.5960079,5.4408547 21.5960079,6.16072163 C21.5960079,6.39509691 21.5625257,6.64621328 21.5123024,6.91407074 L21.3114093,6.96429402 L19.9051577,6.86384747 L19.6707824,6.83036529 C19.1015853,5.13951506 18.5156471,4.00112084 17.94645,3.39844155 C16.9587256,2.37723498 15.7701081,1.87500224 14.4308208,1.87500224 C13.1584978,1.87500224 12.1372913,2.20982406 11.3839421,2.86272663 C10.630593,3.51562919 10.262289,4.33594267 10.262289,5.30692597 C10.262289,6.12723945 10.630593,6.89732965 11.3672011,7.65067876 C12.1038091,8.40402788 13.6607306,9.12389481 16.0379655,9.81027955 C16.8415379,10.0446548 17.7957801,10.4129588 18.9341744,10.9151916 C19.5368536,11.1997901 20.0725686,11.4843887 20.524578,11.7857283 L8.08594714,11.7857283 Z" id="Path" fill="currentColor"></path>
	              <path d="M16.5736805,16.0714477 L23.454269,16.0714477 C23.5379745,16.5401983 23.5714567,17.0591721 23.5714567,17.6116281 C23.5714567,18.8169867 23.3538225,20.0056042 22.8850719,21.1607395 C22.6339556,21.7801599 22.2489105,22.349357 21.6964544,22.901813 C21.2946682,23.2868581 20.691989,23.7388676 19.8716755,24.2578414 C19.0346209,24.7600742 18.1975663,25.1451193 17.3102885,25.3627534 C16.4230106,25.5971287 15.3013575,25.7143164 13.9118469,25.7143164 C12.9910869,25.7143164 11.8861749,25.6808342 10.6473341,25.3292713 L8.30358133,24.6596276 C7.65067876,24.4754756 7.26563366,24.3248058 7.09822275,24.1908771 C7.03125838,24.1239127 6.96429402,24.006725 6.96429402,23.822573 L6.96429402,23.6049389 C6.96429402,23.4710101 6.9977762,22.6004734 6.93081183,20.9933286 C6.89732965,20.156274 6.96429402,19.5703358 6.96429402,19.235514 L6.96429402,18.498906 L8.67188534,18.4654238 C9.29130572,19.8884166 9.57590427,20.7422122 9.76005628,21.0435519 C10.1618425,21.6964544 10.6138519,22.2154283 11.0993436,22.6172145 C11.5848352,23.0190007 12.1707734,23.3370814 12.8571582,23.5714567 C13.5268018,23.822573 14.280151,23.9397607 15.0669822,23.9397607 C15.7701081,23.9397607 16.5569394,23.7890909 17.3939939,23.4877512 C18.2477896,23.2031527 18.9341744,22.717661 19.4364071,22.0480174 C19.9553809,21.3783737 20.2232384,20.6585068 20.2232384,19.8884166 C20.2232384,18.9509154 19.7712289,18.0803787 18.86721,17.2600652 C18.498906,16.9419845 17.7288158,16.5401983 16.5736805,16.0714477 Z" id="Path" fill="currentColor"></path>
	          </g>
	      </g>
	  </g>
	</svg>
`)

export const bold = () => (`
	<svg width="30px" height="30px" viewBox="-1 -1 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	      <g id="Artboard" transform="translate(-805.000000, -28.000000)" fill="currentColor">
	          <path d="M809.835943,38.8828124 C810.179693,39.03125 810.554694,39.1328127 810.929694,39.1328127 C812.710946,39.1328127 813.867197,38.4218743 813.867197,36.515622 C813.867197,36.0312465 813.804697,35.5234334 813.546885,35.1093704 C812.820321,33.937494 811.773445,33.8749939 810.515631,33.8749939 C810.281256,33.8749939 809.945318,33.8749939 809.726568,33.953119 C809.726568,34.781245 809.718755,35.609371 809.718755,36.4296844 C809.718755,36.9687476 809.648442,38.4296868 809.835943,38.8828124 Z M809.726568,33.0546804 C810.007818,33.1015555 810.296881,33.109368 810.578131,33.109368 C812.187508,33.109368 813.335947,32.6562424 813.335947,30.8515528 C813.335947,29.3281135 811.984383,28.8046753 810.679694,28.8046753 C810.335943,28.8046753 810.000005,28.8515504 809.664067,28.906238 C809.664067,29.6953014 809.726568,30.4843648 809.726568,31.2734283 C809.726568,31.6874913 809.718755,32.1015543 809.718755,32.5156173 C809.718755,32.695305 809.718755,32.8749927 809.726568,33.0546804 Z M805.5,40.0000012 L805.515625,39.2656253 C806.015626,39.1406252 806.523439,39.1328127 807.007814,38.9296874 C807.281252,38.4687494 807.24219,37.6562484 807.24219,37.1328103 C807.24219,36.9609351 807.257815,29.4921762 807.070314,29.1249882 C806.953127,28.8984255 805.804688,28.8437379 805.546875,28.8124879 L805.515625,28.1640496 C807.375002,28.1327995 809.234379,27.9999869 811.085944,27.9999869 C811.437507,27.9999869 811.796883,28.0077994 812.148445,28.0077994 C813.914073,28.0077994 815.859387,28.8515504 815.859387,30.8828028 C815.859387,32.281242 814.796886,32.8046801 813.695322,33.3046807 C815.179699,33.6406186 816.500013,34.6484323 816.500013,36.2890593 C816.500013,38.9765625 814.054698,39.8671885 811.765632,39.8671885 C811.078132,39.8671885 810.390631,39.8203135 809.70313,39.8203135 C808.304691,39.8203135 806.890627,39.9453136 805.5,40.0000012 Z" id="bold---FontAwesome"></path>
	      </g>
	  </g>
	</svg>
`)