var WF = {};
WF.exp = {
  variant: 'Control',

  showOriginalContent: function() {
    jQuery('.header-wrapper, .navigation-wrapper, .nav-search, .base-info-wrapper').show();
  },

  addTracking: function() {
    // Live chat window
    jQuery('.livechat_link_conversion').bind('click', function() {
      window['optimizely'] = window['optimizely'] || [];
      window.optimizely.push(["trackEvent", "Click on live chat box"]);
      //console.log('track open chat');
    });
    jQuery('#form_submit_button').bind('click', function() {
      window['optimizely'] = window['optimizely'] || [];
      window.optimizely.push(["trackEvent", "Click on submit request button"]);
      //console.log('track form submit');
    }); 
  },

  init: function() {
    this.showOriginalContent();
    this.addTracking();
  }
};

WF.exp.init();

/*
// Begin Crazy Egg //
var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/0654.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b);
// End Crazy Egg //
*/