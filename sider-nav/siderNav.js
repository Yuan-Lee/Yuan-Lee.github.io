(function($){
	function Siderbar(){
		this.navbarHeight=$('.navbar').height()
		this.navWrap=$('.js-nav-wrap')
		this.subNavModal=$('.subNav-modal')
		this.subNavModalContainer=$('.subNav-modal-container')
		this.subNav=$('.subNav')
		this.siderbar=$('.sidebar')
		this.winHeight=$(window).height()
		this.timerShow=null
		this.timerHide=null
	}

	// 左侧导航滚动
	Siderbar.prototype.scrollNav=function(){
		var _this=this;
		_this.winHeight=$(window).height();

		$(_this.navWrap).slimscroll({destroy:true})
		.css({
			'height':'auto'
		});

		$(_this.navWrap).slimscroll({
			height: _this.winHeight - _this.navbarHeight*2
		})
	}

	// 下拉展开导航
	Siderbar.prototype.toggleMenu=function(e){
		
		e.stopPropagation();
		var showSubmenu=function(submenu){
			$(submenu).stop().slideDown(150).closest('li').addClass('open');
			$(submenu).prev().find('.arrow').removeClass('fa-angle-right').addClass('fa-angle-down');
		}

		var hideSubmenu=function(submenu){
			$(submenu).stop().slideUp(150).closest('li').removeClass('open');
			$(submenu).prev().find('.arrow').removeClass('fa-angle-down').addClass('fa-angle-right');
		}
		
		var getNode=function(node){
			return node.nodeName==='A' ? node : getNode(node.parentNode);
		}
		var $self=$(getNode(e.target));
		var _this=this;

		if($(_this.siderbar).hasClass('collapsed')) return;

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
	}

	Siderbar.prototype.showModal=function(e){
		var _this=this,
			$self=$(e.target).closest('a'),
			$top=$self.offset().top - _this.navbarHeight,
			$t_h=_this.winHeight - _this.navbarHeight,
			$m_h=0;
		console.log(e.type)
		console.log($self.nodeName)
		var subNavScroll=function(){
			if($(_this.subNavModalContainer).height() >= _this.winHeight - _this.navbarHeight){
				var $subNav_height = _this.winHeight - _this.navbarHeight;
				
				$(_this.subNavModalContainer).slimscroll({
					height: $subNav_height
				})
			}
		};
		// 二级菜单导航弹框的显示位置
		var posModal=function(t, b, h){
			$(_this.subNavModal).css({
				'top': t,
				'bottom': b,
				'height': h
			});
			console.log('pos')
		};
		$self.closest('li').addClass('hover').siblings().removeClass('hover');

		//if(!$(_this.siderbar).hasClass('collapsed')) return;
		
		clearTimeout(_this.timerShow);
 		_this.timerShow=setTimeout(function(){

 			// 切换hover状态、显示对应的二级菜单导航
			$('[data-id='+$self.data("show")+']')
			.show().siblings().hide()
			.closest(_this.subNavModal).show();

			$m_h=$(_this.subNavModal).height();	//获取弹出框的高度

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
	}

	Siderbar.prototype.hideModal=function(e){
		var $in=false;
		var _this=this;
		var $self=$(e.target).closest('a');
		// 二级菜单导航弹框的显示位置
		var posModal=function(t, b, h){
			$(_this.subNavModal).css({
				'top': t,
				'bottom': b,
				'height': h
			});
		};

		var closeModal=function(element){
			// 移除滚动条
			$(_this.subNavModalContainer)
			.slimscroll({destroy:true})
			.css({
				'height':'auto'
			});

			posModal('auto','auto','auto');

			element.closest('li').removeClass('hover');
			$('[data-id='+element.data("show")+']').hide().closest(_this.subNavModal).hide();
		};

		clearTimeout(_this.timerShow);
		clearTimeout(_this.timerHide);

		$(_this.subNavModal).on('mouseenter',function(){
			$in=true;
		}).on('mouseleave',function(){
			closeModal($self);
		})
		
		// 避免鼠标未移到二级菜单就关闭
		_this.timerHide=setTimeout(function(){
			if($in===false){
				closeModal($self);
			}
		},150)
	}

	// 侧边栏展开折叠
	Siderbar.prototype.toggleSiderbar=(function(){
		var _this=this;
		function switchsider(){
			$('.nav-list > li').removeClass('open').find('.submenu').stop().slideUp(150)

			$(_this.sidebar).toggleClass('collapsed')
		}

		
		$('.js-siderbar-collapse').on('click',switchsider)
	})()
	
	var siderbar01 = new Siderbar();
	
	$('.nav-list').on('click',siderbar01.toggleMenu)
	$(window).on('resize',siderbar01.scrollNav).trigger('resize');
	$('.nav-list a[data-show]').on('mouseenter',siderbar01.showModal).on('mouseleave',siderbar01.hideModal)

})(jQuery)