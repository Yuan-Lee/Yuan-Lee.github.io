(function($){
	var $navbar_height=$('.navbar').height(),
		$nav_wrap=$('.js-nav-wrap'),
		$subNav_modal=$('.subNav-modal'),
		$subNav_modal_container=$('.subNav-modal-container'),
		$subNav=$('.subNav'),
		$sidebar=$('.sidebar'),
		$sidebar_toggle=$('.js-siderbar-collapse'),
		$win_height=$(window).height(),
		timerShow,
		timerHide;
	

	function wpScroll(container, height){
		container.slimscroll({
			height: height
		})
	}

	// 左侧导航滚动
	$(window).resize(function(){

		$win_height=$(window).height();
		$nav_height=$win_height-$navbar_height*2;

		$nav_wrap.slimscroll({destroy:true})
		.css({
			'height':'auto'
		});

		wpScroll($nav_wrap, $nav_height);

	}).trigger('resize');

	function subNavScroll(){
		if($subNav_modal_container.height()>=$win_height-$navbar_height){
			var $subNav_height=$win_height-$navbar_height;
			wpScroll($subNav_modal_container, $subNav_height)
		}
	}

	function showSubmenu(submenu){
		$(submenu).stop().slideDown(150).closest('li').addClass('open');
		$(submenu).prev().find('.arrow').removeClass('fa-angle-right').addClass('fa-angle-down');
	}

	function hideSubmenu(submenu){
		$(submenu).stop().slideUp(150).closest('li').removeClass('open');
		$(submenu).prev().find('.arrow').removeClass('fa-angle-down').addClass('fa-angle-right');
	}

	// 下拉展开导航
	$('.nav-list').on('click',function(e){
		e.stopPropagation();
		function getNode(node){
			return node.nodeName==='A' ? node : getNode(node.parentNode);
		}
		var $self=$(getNode(e.target));

		if($sidebar.hasClass('collapsed') || !$self.is('A')) return;

		if($self.hasClass('dropdown-toggle')){

			if($self.closest('li').hasClass('open')){
				hideSubmenu( $self.next() );
			}else{

				$self.closest('li').siblings().removeClass('open active')
				.find('li').removeClass('active');

				showSubmenu( $self.next() );
				hideSubmenu( $self.closest('li').siblings().find('.submenu') );
			}
		}else{
			$self.closest('li').addClass('active')
			.siblings().removeClass('open active')
			.find('li').removeClass('active');

			hideSubmenu( $self.closest('li').siblings().find('.submenu') );
		}
	})

	// 二级菜单导航弹框的显示位置
	function posModal(t, b, h){
		$subNav_modal.css({
			'top': t,
			'bottom': b,
			'height': h
		});
	}

	// 关闭二级菜单导航弹框
	function closeModal(element){
		// 移除滚动条
		$subNav_modal_container
		.slimscroll({destroy:true})
		.css({
			'height':'auto'
		});

		posModal('auto','auto','auto');

		element.closest('li').removeClass('hover');
		$('[data-id='+element.data("show")+']').hide().closest($subNav_modal).hide();
	}

	$('.nav-list a[data-show]').on('mouseenter',function(){

		var $this=$(this),
			$top=$this.offset().top-$navbar_height,
			$t_h=$win_height-$navbar_height,
			$m_h=0;

		clearTimeout(timerShow);
 		timerShow=setTimeout(function(){

 			// 切换hover状态、显示对应的二级菜单导航
 			$this.closest('li').addClass('hover').siblings().removeClass('hover');

			if(!$sidebar.hasClass('collapsed')) return;

			$('[data-id='+$this.data("show")+']')
			.show().siblings().hide()
			.closest($subNav_modal).show();

			$m_h=$subNav_modal.height();	//获取弹出框的高度

			if( $t_h <= $m_h ){

				//当二级弹出框的高度大于左侧的高度时
				posModal(0, 'auto', $t_h);
				subNavScroll();

			}else if($top < $t_h-$m_h){

				//当前导航项距顶部条的距离小于左侧高度减去二级弹出框的高度时
				posModal($top, 'auto', 'auto');

			}else if($top >= $t_h-$m_h && $t_h > $m_h){

				//当前导航项距顶部条的距离大于等于左侧高度减去二级弹出框的高度，
				//并且左侧高度大于二级弹出框的高度
				posModal('auto', 0, 'auto');
			}
		},150);
	}).on('mouseleave',function(){
		var $in=false,
			$this=$(this);

		clearTimeout(timerShow);
		clearTimeout(timerHide);

		$subNav_modal.on('mouseenter',function(){
			$in=true;
		}).on('mouseleave',function(){
			closeModal($this);
		})
		
		// 避免鼠标未移到二级菜单就关闭
		timerHide=setTimeout(function(){
			if($in===false){
				closeModal($this);
			}
		},150)
	})

	// 侧边栏展开折叠
	$sidebar_toggle.on('click',function(){

		$('.nav-list > li').removeClass('open').find('.submenu').stop().slideUp(150)
		
		if($sidebar.hasClass('collapsed')){
			$(this).find('i').removeClass('icon-indent').addClass('icon-dedent');
		}else{
			$(this).find('i').removeClass('icon-dedent').addClass('icon-indent');
			
		}
		$sidebar.toggleClass('collapsed')
		
	})
})(jQuery)