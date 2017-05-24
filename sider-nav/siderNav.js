(function($){
	var Siderbar=function(option){
		this.navbarHeight=option.navbarHeight
		this.navWrap=option.navWrap
		this.navList=option.navList
		this.subNavModal=option.subNavModal
		this.subNavModalContainer=option.subNavModalContainer
		this.subNav=option.subNav
		this.siderbar=option.siderbar
		this.winHeight=$(window).height()
		this.timerShow=null
		this.timerHide=null
		this.siderbarToggle=option.siderbarToggle
	}

	Siderbar.prototype.scrollNav=function(){
		var _=this;
		_.winHeight=$(window).height();

		$(_.navWrap).slimscroll({destroy:true})
		.css({
			'height':'auto'
		});

		$(_.navWrap).slimscroll({
			height: _.winHeight - _.navbarHeight*2
		})
	}

	Siderbar.prototype.toggleMenu=function(e){
		e.stopPropagation();
		var _=this;
		var showSubmenu=function(submenu){
			$(submenu).stop().slideDown(150).closest('li').addClass('open');
			$(submenu).prev().find('.arrow').removeClass('fa-angle-right').addClass('fa-angle-down');
		}

		var hideSubmenu=function(submenu){
			$(submenu).stop().slideUp(150).closest('li').removeClass('open');
			$(submenu).prev().find('.arrow').removeClass('fa-angle-down').addClass('fa-angle-right');
		}
		var $self=$(e.target).closest('a');
		

		if($(_.siderbar).hasClass('collapsed')) return;

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

	Siderbar.prototype.showModal=function(el){

		var _=this,
			el=$(el),
			$top=el.offset().top - _.navbarHeight,
			$t_h=_.winHeight - _.navbarHeight,
			$m_h=0;
		
		var subNavScroll=function(){
			if(_.subNavModalContainer.height() >= _.winHeight - _.navbarHeight){
				var $subNav_height = _.winHeight - _.navbarHeight;
				
				_.subNavModalContainer.slimscroll({
					height: $subNav_height
				})
			}
		};
		// 二级菜单导航弹框的显示位置
		var posModal=function(t, b, h){
			_.subNavModal.css({
				'top': t,
				'bottom': b,
				'height': h
			});
		};

		if(!$(_.siderbar).hasClass('collapsed')) return;
		el.closest('li').addClass('hover').siblings().removeClass('hover');
		
		clearTimeout(_.timerShow);
 		_.timerShow=setTimeout(function(){

 			// 切换hover状态、显示对应的二级菜单导航
			$('[data-id='+el.data("show")+']')
			.show().siblings().hide()
			.closest(_.subNavModal).show();
			
			$m_h=_.subNavModal.height();	//获取弹出框的高度

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
		},100);
	}

	Siderbar.prototype.hideModal=function(el){
		
		var $in=false,
			_=this,
			el=$(el);

		// 二级菜单导航弹框的显示位置
		var posModal=function(t, b, h){
			_.subNavModal.css({
				'top': t,
				'bottom': b,
				'height': h
			});
		};

		var closeModal=function(element){
			// 移除滚动条
			_.subNavModalContainer
			.slimscroll({destroy:true})
			.css({
				'height':'auto'
			});

			posModal('auto','auto','auto');

			element.closest('li').removeClass('hover');
			$('[data-id='+element.data("show")+']').hide().closest(_.subNavModal).hide();
		};

		clearTimeout(_.timerShow);
		clearTimeout(_.timerHide);

		_.subNavModal.on('mouseenter',function(){
			$in=true;
		}).on('mouseleave',function(){
			closeModal(el);
		})
		
		// 避免鼠标未移到二级菜单就关闭
		_.timerHide=setTimeout(function(){
			if($in===false){
				closeModal(el);
			}
		},100)
	}

	Siderbar.prototype.toggleSiderbar=function(){
		
		this.navList.find('li').removeClass('open').find('.submenu').stop().slideUp(150)

		this.siderbar.toggleClass('collapsed')
	}

	Siderbar.prototype.init=function(){
		var _=this;
		
		$(window).on('resize',_.scrollNav).trigger('resize');

		_.navList.find('a').on('click',function(e){
			_.toggleMenu(e);
		}).hover(function(e){
			_.showModal(this);
		},function(e){
			_.hideModal(this);
		});

		_.siderbarToggle.on('click',function(e){
			_.toggleSiderbar()
		});
	}
	
	var siderbar01 = new Siderbar({
		navbarHeight: $('.navbar').height(),
		navWrap: $('.js-nav-wrap'),
		navList: $('.nav-list'),
		subNavModal: $('.subNav-modal'),
		subNavModalContainer: $('.subNav-modal-container'),
		subNav: $('.subNav'),
		siderbar: $('#sidebar'),
		siderbarToggle: $('.js-siderbar-collapse')
	});
	siderbar01.init();

})(jQuery)