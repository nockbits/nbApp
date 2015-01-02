/*
 .................................................
 About: App Config
 .................................................
 @ Version: 0.1
 @ Date: 1st Jan, 2015
 @ Owner By-Date: -
 @ Last Modified By-Date: -
 @ Online Url: -
 */

//-----------------------------------------------------------------------------------------

/**
 NbApp - Application JS File

 @class nbApp
 @version 0.1
 @date 1st Jan, 2015
 @constructor
 */

var nbApp = nbApp || {};

//-----------------------------------------------------------------------------------------

/**
 List of configurable parameters

 @namespace nbApp
 @module Configuration Set
 @class Config
 @constructor
 */

nbApp.config = {
    /**
     Config enable app logger variable

     @property ENABLE_APP_LOG
     @type { (Boolean) }
     @default true
     @static
     **/
    ENABLE_APP_LOG : true,

    /**
     Config Max characters for upload file module

     @property MAX_CHARS_UPLOAD_FILE_MODULE
     @type { (Number) }
     @default (40) Characters
     @final
     **/
    MAX_CHARS_UPLOAD_FILE_MODULE : 40,

    /**
     Config Max Upload Size for File Module

     @property MAX_SIZE_UPLOAD_FILE_MODULE
     @type { (Number) }
     @default (1048576*5) 5Mb
     @final
     **/
    MAX_SIZE_UPLOAD_FILE_MODULE: (1048576*5),

    /**
     Client Config ID

     @property CLIENT_CONFIG_SETTINGS
     @type { (String) }
     @default nbClientConfig
     @final
     **/
    CLIENT_CONFIG_SETTINGS : "nbClientConfig"
};


/**
 Global Variables used in App

 <p>
 glbWinFocus: Indicates whether this Window is Focused (setOnFocus)- {Boolean} <br>
 glbErrorMsg: Sets the Global Error Message for XHR (readOnly) - {String} Failure Message for AJAX<br>
 </p>

 @attribute globalVars
 @writeOnce
 @type { (Object) }
 @static
 **/
nbApp.config.globalVars = {
    glbWinFocus : false,
    glbErrorMsg : "Ooops!! your request could not be processed now, please try later.",
    glbProcessMsg : "Please wait while your request is being processed...."
};

/**
 App General Settings used in App

 <p>
 appProtocol: Sets the Application Protocol (readOnly) - {String} standard `http://` <br>
 appDomainName: Sets the Domain Name (Domain should not have front slash in the end) (readOnly) - {String} `localhost`<br>
 appBaseUrl: Sets the Application app base url (Domain should not have front slash in the end) (readOnly) - {String} app base url `"/"`<br>
 appViewsBasePath: Sets the Application Views Base Path (readOnly) - {String}
 </p>

 @attribute appSettings
 @writeOnce
 @type { (Object) }
 @final
 @static
 **/
nbApp.config.appSettings = {
    appProtocol : window.location.protocol + "//",
    appDomainName : location.hostname,
    appBaseUrl : location.hostname + location.pathname,
    appViewsBasePath : ""
};

/**
 App Ajax URLs used in App

 <p>Its an `object` that has the list of the app ajax url used in XHR</p>

 <p>
 appHome : home path of the app (readOnly) - {String}
 </p>

 @attribute appUrls
 @type { (Object) } relative urls list
 @readOnly
 @final
 **/
nbApp.config.appUrls = {
    appHome : "/?mod=home",
    appShowHome : "/?mod=showhome",
    appDashboard : "/?mod=dashboard",
    appProfile : "/?mod=profile",
    appUsers : "/?mod=users",
    appArticles : "/?mod=articles",
    appEnquiries : "/?mod=enquiry",
    appTestimonial : "/?mod=testimonial",
    appGalleryAlbum: "/?mod=galleryalbum",
    appGallery: "/?mod=gallery",
    appPageSettings: "/?mod=settings",
    appComments: "/?mod=comments",
    appSignIn : "/?mod=signin",
    appSignInCheck : "/?mod=signincheck",
    appUploadMedia : "/?mod=uploadmedia",
    appSessionFailure : "/?mod=sessionerror",
    appDwlMedia : "/?mod=downloadmedia"
};


/**
 App container/link ids for App views

 <p>Its an `object` that has the list of the app ajax container ids</p>

 @attribute appViewIds
 @type { (Object) } relative urls list
 @readOnly
 @final
 **/
nbApp.config.appViewIds = {
    mainId : "#nb-dash-container",
    loaderMsgContainer : "#nb-loader-msg",
    signInForm : "#frmSignIn",
    alertMsgBox : ".nb-alert-msg",
    appModalBox : "#appModalBox",
    appModal : "#appModal"
};
//EOF
