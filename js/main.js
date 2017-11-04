
$(document).ready(function(){
		$(".detail-wraper_buttons_btn").hover(function(){
			var col = ($(this).attr("id"));
			if(col=='button-heart'){
				$("#left-menu").html("<span>Creative Ideas</span> <p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>");
				$("#button-heart").css({
					"background-color":"#19B997"
				});
				$("#button-mouse").css({
					"background-color":"gray"
				});
				$("#button-lamp").css({
					"background-color":"gray"
				});
				$("#right-menu").html("At vero eos et accusmus et iusto odio dignissimos ducimus qui<br>blanditiis praesentium voluptatum deleniti atque corrupti quos<br>dolores et quas molestias excepturi sint occaecati cupiditate non<br>provident, similique sunt in cupla qui officia deserunt mollitia<br>animi,id est laborum et dolorum fuga. Et harum quidem r");
			}else if (col=="button-mouse"){
				$("#left-menu").html("<span>Fast computers</span><p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>")
				$("#button-heart").css({
					"background-color":"gray",
				});
				$("#button-mouse").css({
					"background-color":"#19B997",
				});
				$("#button-lamp").css({
					"background-color":"gray"
				});
				$("#right-menu").html("<br>It is a long established fact that a reader will be distracted by the <br>readable content of a page when looking at its layout. <br>The point of using <br>Lorem Ipsum is that it has a more-or-less <br>normal distribution of letters,");
			}else{
				$("#left-menu").html("<span>Genius Ideas</span><p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>")
				$("#button-heart").css({
					"background-color":"gray",
				});
				$("#button-mouse").css({
					"background-color":"gray",
				});
				$("#button-lamp").css({
					"background-color":"#19B997",
				});
				$("#right-menu").html("<br>It is a long established fact that a reader will be distracted by the <br>readable content of a page when looking at its layout. <br>The point of using <br>Lorem Ipsum is that it has a more-or-less <br>normal distribution of letters,");
			
			}
		},
		function(){
			var col = ($(this).attr("id"));
			if(col=='button-heart'){
				$("#left-menu").html("<span>Creative Ideas</span> <p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>");
				$("#button-heart").css({
					"background-color":"#19B997"
				});
				
				$("#right-menu").html("At vero eos et accusmus et iusto odio dignissimos ducimus qui<br>blanditiis praesentium voluptatum deleniti atque corrupti quos<br>dolores et quas molestias excepturi sint occaecati cupiditate non<br>provident, similique sunt in cupla qui officia deserunt mollitia<br>animi,id est laborum et dolorum fuga. Et harum quidem r");
			}else if (col=="button-mouse"){
				$("#left-menu").html("<span>Fast computers</span><p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>")
				$("#button-heart").css({
					"background-color":"gray",
				});
				$("#button-mouse").css({
					"background-color":"#19B997",
				});
				$("#right-menu").html("<br>It is a long established fact that a reader will be distracted by the <br>readable content of a page when looking at its layout. <br>The point of using <br>Lorem Ipsum is that it has a more-or-less <br>normal distribution of letters,");
			
			}else{
				
				$("#left-menu").html("<span>Genius Ideas</span><p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>")
				$("#button-heart").css({
					"background-color":"gray",
				});
				$("#button-mouse").css({
					"background-color":"#19B997",
				});
				$("#button-mouse").css({
					"background-color":"gray",
				});
				
				$("#right-menu").html("<br>It is a long established fact that a reader will be distracted by the <br>readable content of a page when looking at its layout. <br>The point of using <br>Lorem Ipsum is that it has a more-or-less <br>normal distribution of letters,");

			}
		}
			
		);
		$(".slider-images").hover(function(){
			var col = ($(this).attr("id"));
			if(col=='famous'){
				$(".featured-slider-img1").css({
					"width":"60%"
				});
				$(".featured-slider-img2").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img3").css({
					"width":"33.3333%"
				});
				$("#famous").css({
					"opacity":"0"
				});
				$("#vintage").css({
					"opacity":"0.5"
				});
				$("#brand").css({
					"opacity":"0.5"
				});
			}else if (col=="vintage"){
				$(".featured-slider-img1").css({
					"width":"33.3333%",
				});
				$(".featured-slider-img2").css({
					"width":"60%",
				});
				$(".featured-slider-img3").css({
					"width":"33.3333%"
				});
				$("#famous").css({
					"opacity":"0.5"
				});
				$("#vintage").css({
					"opacity":"0"
				});
				$("#brand").css({
					"opacity":"0.5"
				});
			}else{
				$(".featured-slider-img3").css({
					"width":"60%",
				});
				$(".featured-slider-img2").css({
					"width":"33.3333%",
				});
				$(".featured-slider-img1").css({
					"width":"33.3333%",
				});
				$("#famous").css({
					"opacity":"0.5"
				});
				$("#vintage").css({
					"opacity":"0.5"
				});
				$("#brand").css({
					"opacity":"0"
				});
			}
		},
		function(){
			var col = ($(this).attr("id"));
			if(col=='famous'){
				$(".featured-slider-img1").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img2").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img3").css({
					"width":"33.3333%"
				});
				$("#famous").css({
					"opacity":"0.5"
				});
				
			}else if (col=="vintage"){
				$(".featured-slider-img1").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img2").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img3").css({
					"width":"33.3333%"
				});
				$("#vintage").css({
					"opacity":"0.5"
				});
			}else{
				$(".featured-slider-img1").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img2").css({
					"width":"33.3333%"
				});
				$(".featured-slider-img3").css({
					"width":"33.3333%"
				});
				$("#brand").css({
					"opacity":"0.5"
				});
				
			}
		}
			
		);
		$(".service-icon_buttons-btn").hover(function(){
			var col = ($(this).attr("id"));
			
			if(col=='keys'){
				$("#keys").css({
					"background-color":"#19B997"
				});
				$("#paint").css({
					"background-color":"gray"
				});
				$("#game-pad").css({
					"background-color":"gray"
				});
				$("#electrical-plug").css({
					"background-color":"gray"
				});
				$(".service-default-text").html("<span>Technical Support </span><p>At vero eos et accusmus et iusto odio<br>dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque<br>corrupti quos dolores</p>");
				$(".circle-brand").html("<span>75%</span>");
				$(".circle-brand").append("<div class=circle-brand_left></div>");
				$(".circle-brand").append("<div class=circle-brand_right></div>");
				$(".circle-brand_right").css({
					"transform":"rotate(20deg)"
				});
				$(".circle-design").html("<span>85%</span>");
				$(".circle-design").append("<div class=circle-design_left></div>");
				$(".circle-design").append("<div class=circle-design_right></div>");
				$(".circle-design_right").css({
					"transform":"rotate(0deg)"
				});
				$(".circle-ux").html("<span>75%</span>");
				$(".circle-ux").append("<div class=circle-ux_left></div>");
				$(".circle-ux").append("<div class=circle-ux_right></div>");
				$(".circle-ux_right").css({
					"transform":"rotate(20deg)"
				});
			}else if (col=="paint"){
				$("#keys").css({
					"background-color":"gray"
				});
				$("#paint").css({
					"background-color":"#19B997"
				});
				$("#game-pad").css({
					"background-color":"gray"
				});
				$("#electrical-plug").css({
					"background-color":"gray"
				});
				$(".service-default-text").html("<span>Graphic Design </span><p>At vero eos et accusmus et iusto odio dignissi-<br>mos ducimus qui blanditiis praesentium volup-<br>tatum deleniti </p><p>At vero eos et accusmus et iusto odio dignissi-<br>mos ducimus qui blanditiis praesentium volup-<br>tatum deleniti </p>");
				$(".circle-brand").html("<span>80%</span>");
				$(".circle-brand").append("<div class=circle-brand_left></div>");
				$(".circle-brand").append("<div class=circle-brand_right></div>");
				$(".circle-brand_right").css({
					"transform":"rotate(0deg)"
				});
				$(".circle-design").html("<span>75%</span>");
				$(".circle-design").append("<div class=circle-design_left></div>");
				$(".circle-design").append("<div class=circle-design_right></div>");
				$(".circle-design_right").css({
					"transform":"rotate(20deg)"
				});
				$(".circle-ux").html("<span>60%</span>");
				$(".circle-ux").append("<div class=circle-ux_left></div>");
				$(".circle-ux").append("<div class=circle-ux_right></div>");
				$(".circle-ux_right").css({
					"transform":"rotate(45deg)"
				});
			}else if (col=="game-pad"){
				$("#keys").css({
					"background-color":"gray"
				});
				$("#paint").css({
					"background-color":"gray"
				});
				$("#game-pad").css({
					"background-color":"#19B997"
				});
				$("#electrical-plug").css({
					"background-color":"gray"
				});
				$(".service-default-text").html("<span>Fast Anything </span><p>At vero eos et accusmus et iusto odio dignissi-<br>mos ducimus qui blanditiis praesentium volup-<br>tatum deleniti </p><p>At vero eos et accusmus et iusto odio dignissi-<br>mos ducimus qui blanditiis praesentium volup-<br>tatum deleniti </p>");
				$(".circle-brand").html("<span>90%</span>");
				$(".circle-brand").append("<div class=circle-brand_left></div>");
				$(".circle-brand").append("<div class=circle-brand_right></div>");
				$(".circle-brand_right").css({
					"transform":"rotate(-20deg)"
				});
				$(".circle-design").html("<span>80%</span>");
				$(".circle-design").append("<div class=circle-design_left></div>");
				$(".circle-design").append("<div class=circle-design_right></div>");
				$(".circle-design_right").css({
					"transform":"rotate(0deg)"
				});
				$(".circle-ux").html("<span>65%</span>");
				$(".circle-ux").append("<div class=circle-ux_left></div>");
				$(".circle-ux").append("<div class=circle-ux_right></div>");
				$(".circle-ux_right").css({
					"transform":"rotate(35deg)"
				});
			}else{
				$("#keys").css({
					"background-color":"gray"
				});
				$("#paint").css({
					"background-color":"gray"
				});
				$("#game-pad").css({
					"background-color":"gray"
				});
				$("#electrical-plug").css({
					"background-color":"#19B997"
				});
				$(".service-default-text").html("<span>Electrical Plug</span><p>At vero eos et accusmus et iusto odio dignissi-<br>mos ducimus qui blanditiis praesentium volup-<br>tatum deleniti </p>");
				$(".circle-brand").html("<span>95%</span>");
				$(".circle-brand").append("<div class=circle-brand_left></div>");
				$(".circle-brand").append("<div class=circle-brand_right></div>");
				$(".circle-brand_right").css({
					"transform":"rotate(-30deg)"
				});
				$(".circle-design").html("<span>95%</span>");
				$(".circle-design").append("<div class=circle-design_left></div>");
				$(".circle-design").append("<div class=circle-design_right></div>");
				$(".circle-design_right").css({
					"transform":"rotate(-30deg)"
				});
				$(".circle-ux").html("<span>95%</span>");
				$(".circle-ux").append("<div class=circle-ux_left></div>");
				$(".circle-ux").append("<div class=circle-ux_right></div>");
				$(".circle-ux_right").css({
					"transform":"rotate(-30deg)"
				});
			}
		},
		function(){
			var col = ($(this).attr("id"));
			if(col=='keys'){
				
				
			}else if (col=="vintage"){
				
			}else{
				
				
			}
		}
			
		);
		$(".main-slider_links-hover").hover(function(){
			var col = ($(this).attr("id"));
			if(col=="print"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-3.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-3.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-3.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-3.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$("#print").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else if(col=="works"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-3.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-3.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-3.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-3.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else if (col=="identily"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-3.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-3.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-3.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-3.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else if(col=="branding"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else if(col=="web"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-3.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-3.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-3.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-3.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else if(col=="link-html"){
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-3.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-3.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-3.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-3.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
			}else{
				$(".main-slider_content-column-1_img-1").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-2").css({
					"background-image":"url(images/column-1-img-2.png)"
				});
				$(".main-slider_content-column-1_img-3").css({
					"background-image":"url(images/column-1-img-1.png)"
				});
				$(".main-slider_content-column-2_img-1").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-2").css({
					"background-image":"url(images/column-2-img-2.png)"
				});
				$(".main-slider_content-column-2_img-3").css({
					"background-image":"url(images/column-2-img-1.png)"
				});
				$(".main-slider_content-column-3_img-1").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-2").css({
					"background-image":"url(images/column-3-img-2.png)"
				});
				$(".main-slider_content-column-3_img-3").css({
					"background-image":"url(images/column-3-img-1.png)"
				});
				$(".main-slider_content-column-4_img-1").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-2").css({
					"background-image":"url(images/column-4-img-2.png)"
				});
				$(".main-slider_content-column-4_img-3").css({
					"background-image":"url(images/column-4-img-1.png)"
				});
				$("#print").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#works").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#identily").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#branding").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#web").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#link-html").css({
					"text-decoration":"none",
					"text-decoration-color":"#1DA98D"
				});
				$("#wordpress").css({
					"text-decoration":"underline",
					"text-decoration-color":"#1DA98D"
				});
			}
		});
			$(".team-button_btn").hover(function(){
			var col = ($(this).attr("id"));
			if(col=="team-btn_1"){
				$(".team-skills_text").html("<b>Abdullah Noman</b><br><i>CREATIVE DIRECTOR,CODE CAFE</i><p>At vero eos et accusmus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>");
				$("#team-btn_1").css({
					"background":"#1DA98D"
				});
				$("#team-btn_2").css({
					"background":"none"
				});
				$("#team-btn_3").css({
					"background":"none"
				});
				 var img1 = $(".team-photo_wrapper").css({
				"background-image":"url(images/photo-1.png)"
				});
				$("#branding-percent").html("<span>80%</span>");
				$("#design-percent").html("<span>65%</span>");
				$("#ui-percent").html("<span>75%</span>");
				var line1 =$(".team-skills_line-branding_hr-double");
				line1.animate({width:"220px"},"slow");
				var line2 =$(".team-skills_line-design_hr-double");
				line2.animate({width:"170px"},"slow");
				var line3 =$(".team-skills_line-ui_hr-double");
				line3.animate({width:"200px"},"slow");
			}else if(col=="team-btn_2"){
				$(".team-skills_text").html("<b>Susan Jhons</b><br><i>ART DIRECTOR,CODE CAFE</i><p>At vero eos et accusmus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>");
				
				$("#team-btn_1").css({
					"background":"none"
				});
				$("#team-btn_2").css({
					"background":"#1DA98D"
				});
				$("#team-btn_3").css({
					"background":"none"
				});
				var img2 = $(".team-photo_wrapper").css({
				"background-image":"url(images/photo-2.jpg)"
				});
				$("#branding-percent").html("<span>95%</span>");
				$("#design-percent").html("<span>75%</span>");
				$("#ui-percent").html("<span>65%</span>");
				var line1 = $(".team-skills_line-branding_hr-double");
				line1.animate({width:"270px"},"slow");
				var line2 = $(".team-skills_line-design_hr-double");
				line2.animate({width:"200px"},"slow");
				var line3 = $(".team-skills_line-ui_hr-double");
				line3.animate({width:"170px"},"slow");
				
			}else{
				$(".team-skills_text").html("<b>Kenny Morgan</b><br><i>FINANCIAL DIRECTOR,CODE CAFE</i><p>At vero eos et accusmus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>");
				$("#team-btn_1").css({
					"background":"none"
				});
				$("#team-btn_2").css({
					"background":"none"
				});
				$("#team-btn_3").css({
					"background":"#1DA98D"
				});
				var img3 = $(".team-photo_wrapper").css({
				"background-image":"url(images/photo-3.jpg)"
				});
				$("#branding-percent").html("<span>75%</span>");
				$("#design-percent").html("<span>85%</span>");
				$("#ui-percent").html("<span>95%</span>");
				var line1= $(".team-skills_line-branding_hr-double");
				line1.animate({width:"200px"},"slow");
				var line2 = $(".team-skills_line-design_hr-double");
				line2.animate({width:"240px"},"slow");
				var line3 = $(".team-skills_line-ui_hr-double");
				line3.animate({width:"270px"},"slow");
			}
			});
		$(".about-button_btn").hover(function(){
			var col = ($(this).attr("id"));
			if(col=="about-btn_1"){
				$("#about-btn_1").css({
					"background":"#1DA98D"
				});
				$("#about-btn_2").css({
					"background":"none"
				});
				$("#about-btn_3").css({
					"background":"none"
				});
				 $(".about-content_img").css({
				"background-image":"url(images/about-img-1.png)"
				});
				$(".about-content_text-wrapper_default").html("At vero eos et accusmus et iusto odio dignissimos ducimus quiblanditiis praesentium vo-<br>luptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu-<br>piditate non provident, similique sunt in cupla qui officia deserunt mollitia<p><b>PARTHO</b></p><p>FOUNDER, ARTWAYS BD</p>");
			}else if(col=="about-btn_2"){
				$("#about-btn_1").css({
					"background":"none"
				});
				$("#about-btn_2").css({
					"background":"#1DA98D"
				});
				$("#about-btn_3").css({
					"background":"none"
				});
				$(".about-content_img").css({
				"background-image":"url(images/about-img-2.jpg)"
				});
				$(".about-content_text-wrapper_default").html("At vero eos et accusmus et iusto odio dignissimos ducimus quiblanditiis praesentium vo-<br>luptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu-<br>piditate non provident, similique sunt in cupla qui officia deserunt mollitia<p><b>CLARK</b></p><p>SUPERMAN</p>");
			}else{
				$("#about-btn_1").css({
					"background":"none"
				});
				$("#about-btn_2").css({
					"background":"none"
				});
				$("#about-btn_3").css({
					"background":"#1DA98D"
				});
				$(".about-content_img").css({
				"background-image":"url(images/about-img-3.jpg)"
				});
				$(".about-content_text-wrapper_default").html("At vero eos et accusmus et iusto odio dignissimos ducimus quiblanditiis praesentium vo-<br>luptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu-<br>piditate non provident, similique sunt in cupla qui officia deserunt mollitia<p><b>NANO MOUSKOURI</b></p>");
			}
			});
			
			$(".hover_shadow").hover(function(){
			var col = ($(this).attr("id"));
				
				if(col=="col1_img-1"){
					$(".main-slider__shadow-col-1-1").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col1_img-2"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col1_img-3"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col2_img-1"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"opacity":"0.7",
						"visibility":"visible"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col2_img-2"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col2_img-3"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col3_img-1"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col3_img-2"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col3_img-3"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col4_img-1"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else if(col=="col4_img-2"){
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				}else{
					$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"opacity":"0.7",
						"visibility":"visible"
					});
				}
				
				
			
			},
			function(){
			$(".main-slider__shadow-col-1-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-1-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-1").css({
						"visibility":"hidden"
					});$(".main-slider__shadow-col-2-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-2-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-3-3").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-1").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-2").css({
						"visibility":"hidden"
					});
					$(".main-slider__shadow-col-4-3").css({
						"visibility":"hidden"
					});
				
			
		}
			);
			
			
			
			
		$(function () {
			$('.popup-modal').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#username',
				modal: true
			});
			$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		});
		$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
				
			
	
			
			
});