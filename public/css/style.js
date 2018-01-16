import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "background": "#fff"
    },
    "body": {
        "fontFamily": "\"Roboto\", arial, sans-serif",
        "fontSize": 18,
        "fontWeight": "300",
        "lineHeight": 1.8,
        "color": "#222",
        "background": "#fff"
    },
    "bodyfh5co-overflow": {
        "overflowX": "auto"
    },
    "textquote": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "fontSize": 27,
        "fontStyle": "italic",
        "lineHeight": 1.5
    },
    "::-webkit-selection": {
        "color": "#fff",
        "background": "#f7c873"
    },
    "::-moz-selection": {
        "color": "#fff",
        "background": "#f7c873"
    },
    "::selection": {
        "color": "#fff",
        "background": "#f7c873"
    },
    "a": {
        "color": "#f7c873",
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s"
    },
    "a:hover": {
        "color": "#f3ac2b",
        "outline": "none",
        "textDecoration": "none"
    },
    "a:focus": {
        "color": "#f3ac2b",
        "outline": "none",
        "textDecoration": "none"
    },
    "a:active": {
        "color": "#f3ac2b",
        "outline": "none",
        "textDecoration": "none"
    },
    "h1": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "h2": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "h3": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "h4": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "h5": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "h6": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000"
    },
    "p": {
        "marginBottom": 30
    },
    "btn": {
        "marginRight": 4,
        "marginBottom": 4,
        "fontFamily": "\"Playfair Display\", times, serif",
        "fontSize": 12,
        "letterSpacing": 2,
        "textTransform": "uppercase",
        "fontWeight": "700",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "MsBorderRadius": 4,
        "borderRadius": 4,
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s"
    },
    "btnbtn-md": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": "!important",
        "paddingLeft": 20
    },
    "btnbtn-lg": {
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": "!important",
        "paddingLeft": 36
    },
    "btn:hover": {
        "boxShadow": "none !important",
        "outline": "none !important"
    },
    "btn:active": {
        "boxShadow": "none !important",
        "outline": "none !important"
    },
    "btn:focus": {
        "boxShadow": "none !important",
        "outline": "none !important"
    },
    "btn-primary": {
        "background": "#f7c873",
        "color": "#fff",
        "border": "2px solid #f7c873"
    },
    "btn-primary:hover": {
        "background": "#f6bf5b !important",
        "borderColor": "#f6bf5b !important"
    },
    "btn-primary:focus": {
        "background": "#f6bf5b !important",
        "borderColor": "#f6bf5b !important"
    },
    "btn-primary:active": {
        "background": "#f6bf5b !important",
        "borderColor": "#f6bf5b !important"
    },
    "btn-primarybtn-outline": {
        "background": "transparent",
        "color": "#f7c873",
        "border": "2px solid #f7c873"
    },
    "btn-primarybtn-outline:hover": {
        "background": "#f7c873",
        "color": "#fff"
    },
    "btn-primarybtn-outline:focus": {
        "background": "#f7c873",
        "color": "#fff"
    },
    "btn-primarybtn-outline:active": {
        "background": "#f7c873",
        "color": "#fff"
    },
    "btn-success": {
        "background": "#58ca7e",
        "color": "#fff",
        "border": "2px solid #58ca7e"
    },
    "btn-success:hover": {
        "background": "#45c46f !important",
        "borderColor": "#45c46f !important"
    },
    "btn-success:focus": {
        "background": "#45c46f !important",
        "borderColor": "#45c46f !important"
    },
    "btn-success:active": {
        "background": "#45c46f !important",
        "borderColor": "#45c46f !important"
    },
    "btn-successbtn-outline": {
        "background": "transparent",
        "color": "#58ca7e",
        "border": "2px solid #58ca7e"
    },
    "btn-successbtn-outline:hover": {
        "background": "#58ca7e",
        "color": "#fff"
    },
    "btn-successbtn-outline:focus": {
        "background": "#58ca7e",
        "color": "#fff"
    },
    "btn-successbtn-outline:active": {
        "background": "#58ca7e",
        "color": "#fff"
    },
    "btn-info": {
        "background": "#1784fb",
        "color": "#fff",
        "border": "2px solid #1784fb"
    },
    "btn-info:hover": {
        "background": "#0477f4 !important",
        "borderColor": "#0477f4 !important"
    },
    "btn-info:focus": {
        "background": "#0477f4 !important",
        "borderColor": "#0477f4 !important"
    },
    "btn-info:active": {
        "background": "#0477f4 !important",
        "borderColor": "#0477f4 !important"
    },
    "btn-infobtn-outline": {
        "background": "transparent",
        "color": "#1784fb",
        "border": "2px solid #1784fb"
    },
    "btn-infobtn-outline:hover": {
        "background": "#1784fb",
        "color": "#fff"
    },
    "btn-infobtn-outline:focus": {
        "background": "#1784fb",
        "color": "#fff"
    },
    "btn-infobtn-outline:active": {
        "background": "#1784fb",
        "color": "#fff"
    },
    "btn-warning": {
        "background": "#fed330",
        "color": "#fff",
        "border": "2px solid #fed330"
    },
    "btn-warning:hover": {
        "background": "#fece17 !important",
        "borderColor": "#fece17 !important"
    },
    "btn-warning:focus": {
        "background": "#fece17 !important",
        "borderColor": "#fece17 !important"
    },
    "btn-warning:active": {
        "background": "#fece17 !important",
        "borderColor": "#fece17 !important"
    },
    "btn-warningbtn-outline": {
        "background": "transparent",
        "color": "#fed330",
        "border": "2px solid #fed330"
    },
    "btn-warningbtn-outline:hover": {
        "background": "#fed330",
        "color": "#fff"
    },
    "btn-warningbtn-outline:focus": {
        "background": "#fed330",
        "color": "#fff"
    },
    "btn-warningbtn-outline:active": {
        "background": "#fed330",
        "color": "#fff"
    },
    "btn-danger": {
        "background": "#fb4f59",
        "color": "#fff",
        "border": "2px solid #fb4f59"
    },
    "btn-danger:hover": {
        "background": "#fa3641 !important",
        "borderColor": "#fa3641 !important"
    },
    "btn-danger:focus": {
        "background": "#fa3641 !important",
        "borderColor": "#fa3641 !important"
    },
    "btn-danger:active": {
        "background": "#fa3641 !important",
        "borderColor": "#fa3641 !important"
    },
    "btn-dangerbtn-outline": {
        "background": "transparent",
        "color": "#fb4f59",
        "border": "2px solid #fb4f59"
    },
    "btn-dangerbtn-outline:hover": {
        "background": "#fb4f59",
        "color": "#fff"
    },
    "btn-dangerbtn-outline:focus": {
        "background": "#fb4f59",
        "color": "#fff"
    },
    "btn-dangerbtn-outline:active": {
        "background": "#fb4f59",
        "color": "#fff"
    },
    "btn-outline": {
        "background": "none",
        "border": "2px solid gray",
        "fontSize": 12,
        "letterSpacing": 2,
        "textTransform": "uppercase",
        "WebkitTransition": "0.3s",
        "OTransition": "0.3s",
        "transition": "0.3s"
    },
    "btn-outline:hover": {
        "boxShadow": "none"
    },
    "btn-outline:focus": {
        "boxShadow": "none"
    },
    "btn-outline:active": {
        "boxShadow": "none"
    },
    "form-control": {
        "boxShadow": "none",
        "background": "transparent",
        "border": "2px solid rgba(0, 0, 0, 0.1)",
        "height": 54,
        "fontSize": 18,
        "fontWeight": "300"
    },
    "form-control:active": {
        "outline": "none",
        "boxShadow": "none",
        "borderColor": "#f7c873"
    },
    "form-control:focus": {
        "outline": "none",
        "boxShadow": "none",
        "borderColor": "#f7c873"
    },
    "fh5co-header": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "float": "left",
        "width": "100%"
    },
    "fh5co-header fh5co-nav-toggle": {
        "position": "absolute",
        "top": 4.2,
        "left": 3,
        "zIndex": 99
    },
    "fh5co-header fh5co-social": {
        "position": "absolute !important",
        "right": "3em !important",
        "top": 3.2,
        "zIndex": 99,
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s"
    },
    "fh5co-header fh5co-logo": {
        "textAlign": "center"
    },
    "fh5co-header fh5co-logo a": {
        "color": "#000"
    },
    "fh5co-header fh5co-logo a sup": {
        "fontSize": 20,
        "top": -20
    },
    "fh5co-post-prev": {
        "position": "fixed",
        "zIndex": 999,
        "top": "50%",
        "height": 50,
        "marginTop": -25,
        "color": "#000",
        "textTransform": "uppercase",
        "fontWeight": "bold",
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s",
        "left": 0,
        "marginLeft": -25
    },
    "fh5co-post-next": {
        "position": "fixed",
        "zIndex": 999,
        "top": "50%",
        "height": 50,
        "marginTop": -25,
        "color": "#000",
        "textTransform": "uppercase",
        "fontWeight": "bold",
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s",
        "right": 0,
        "marginRight": -25
    },
    "fh5co-post-prev span": {
        "verticalAlign": "base",
        "width": 100
    },
    "fh5co-post-next span": {
        "verticalAlign": "base",
        "width": 100
    },
    "fh5co-post-prev span i": {
        "top": 7,
        "position": "relative",
        "fontSize": 30,
        "color": "#000"
    },
    "fh5co-post-next span i": {
        "top": 7,
        "position": "relative",
        "fontSize": 30,
        "color": "#000"
    },
    "fh5co-post-prev:hover": {
        "marginLeft": 10,
        "color": "#000"
    },
    "fh5co-post-next:hover": {
        "marginRight": 10,
        "color": "#000"
    },
    "fh5co-post-entrysingle-entry fh5co-article-title": {
        "fontSize": 80
    },
    "fh5co-post-entry article": {
        "textAlign": "center",
        "float": "left",
        "marginBottom": 110,
        "paddingLeft": 3,
        "paddingRight": 3
    },
    "fh5co-post-entry article a img": {
        "opacity": 1,
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s"
    },
    "fh5co-post-entry article a:hover img": {
        "opacity": 0.4
    },
    "fh5co-post-entry article figure": {
        "marginBottom": 30
    },
    "fh5co-post-entry article h2": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "fontSize": 34,
        "color": "#000",
        "marginBottom": 30
    },
    "fh5co-post-entry article h2 a": {
        "color": "#000"
    },
    "fh5co-post-entry article fh5co-meta": {
        "fontSize": 16,
        "fontFamily": "\"Roboto\", arial, sans-serif",
        "color": "#999999",
        "marginBottom": 20,
        "display": "block"
    },
    "fh5co-post-entry article fh5co-metafh5co-date": {
        "textTransform": "uppercase",
        "letterSpacing": 2
    },
    "fh5co-post-entry article content-article": {
        "paddingTop": 4
    },
    "fh5co-post-entry article content-article a": {
        "textDecoration": "underline"
    },
    "fh5co-post-entry article content-article blockquote": {
        "borderLeft": "none",
        "paddingLeft": 0
    },
    "fh5co-post-entry article content-article blockquote p": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "fontSize": 27,
        "fontStyle": "italic",
        "lineHeight": 1.5
    },
    "fh5co-post-entry article content-article blockquote p cite": {
        "paddingTop": 20,
        "display": "block",
        "fontSize": 16,
        "fontStyle": "normal",
        "color": "gray"
    },
    "fh5co-post-entry article fh5co-highlight": {
        "border": "4px solid #f2f2f2",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "width": "100%",
        "marginBottom": 30
    },
    "fh5co-post-entry article fh5co-highlightright": {
        "float": "right",
        "marginLeft": 30
    },
    "fh5co-post-entry article fh5co-highlightleft": {
        "float": "left"
    },
    "fh5co-post-entry article fh5co-highlight h4": {
        "fontSize": 14,
        "letterSpacing": 2,
        "color": "#b3b3b3",
        "textTransform": "uppercase",
        "fontFamily": "\"Roboto\", arial, sans-serif"
    },
    "fh5co-post-entry article fh5co-highlight p": {
        "fontFamily": "\"Playfair Display\", times, serif",
        "color": "#000",
        "fontSize": 20
    },
    "fh5co-social": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative"
    },
    "fh5co-social li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "display": "inline"
    },
    "fh5co-social li a": {
        "fontSize": 20,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "color": "#000"
    },
    "figure figcaption": {
        "paddingTop": 15,
        "fontSize": 14,
        "color": "#999999"
    },
    "fh5co-offcanvas": {
        "background": "#fff",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": 700,
        "zIndex": 99999,
        "overflowY": "auto",
        "opacity": 0,
        "display": "none"
    },
    "fh5co-offcanvas fh5co-close-offcanvas": {
        "position": "absolute",
        "top": 20,
        "right": 20,
        "fontSize": 30,
        "width": 30,
        "overflow": "hidden",
        "color": "#cccccc",
        "WebkitTransition": "0.3s",
        "OTransition": "0.3s",
        "transition": "0.3s"
    },
    "fh5co-offcanvas fh5co-close-offcanvas:hover": {
        "width": 85,
        "color": "#000"
    },
    "fh5co-offcanvas fh5co-close-offcanvas > span": {
        "width": 100,
        "display": "inline-block",
        "zoom": 1,
        "Display": "inline"
    },
    "fh5co-offcanvas fh5co-close-offcanvas > span > span": {
        "top": 7,
        "position": "relative",
        "fontSize": 18,
        "verticalAlign": "top"
    },
    "fh5co-offcanvas fh5co-box": {
        "float": "left",
        "marginBottom": 30,
        "width": "100%"
    },
    "fh5co-offcanvas fh5co-menu": {
        "width": "50%",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "float": "right"
    },
    "fh5co-offcanvas fh5co-bio": {
        "width": "50%",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "textAlign": "center",
        "float": "left"
    },
    "fh5co-offcanvas fh5co-bio figure": {
        "textAlign": "center",
        "display": "block",
        "marginBottom": 30
    },
    "fh5co-offcanvas fh5co-bio img": {
        "width": 180,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "MsBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "fh5co-offcanvas fh5co-bio p": {
        "fontSize": 16
    },
    "fh5co-offcanvas heading": {
        "fontSize": 16,
        "letterSpacing": 2,
        "textTransform": "uppercase",
        "color": "#cccccc",
        "marginBottom": 30
    },
    "fh5co-offcanvas fh5co-menu ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "fh5co-offcanvas fh5co-menu ul li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "listStyle": "none",
        "display": "block"
    },
    "fh5co-offcanvas fh5co-menu ul li a": {
        "color": "#000"
    },
    "fh5co-footer": {
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "js to-animate": {
        "opacity": 0
    },
    "jsto-animate-2": {
        "opacity": 0
    },
    "jsanimate-box": {
        "opacity": 0
    },
    "fh5co-nav-toggle": {
        "width": 25,
        "height": 44,
        "cursor": "pointer",
        "textDecoration": "none",
        "position": "absolute",
        "top": 18,
        "left": 0,
        "zIndex": 21,
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggleactive i::before": {
        "background": "#f7c873",
        "top": 0,
        "WebkitTransform": "rotateZ(45deg)",
        "MozTransform": "rotateZ(45deg)",
        "MsTransform": "rotateZ(45deg)",
        "OTransform": "rotateZ(45deg)",
        "transform": "rotateZ(45deg)"
    },
    "fh5co-nav-toggleactive i::after": {
        "background": "#f7c873",
        "bottom": 0,
        "WebkitTransform": "rotateZ(-45deg)",
        "MozTransform": "rotateZ(-45deg)",
        "MsTransform": "rotateZ(-45deg)",
        "OTransform": "rotateZ(-45deg)",
        "transform": "rotateZ(-45deg)"
    },
    "fh5co-nav-toggle:hover": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle:focus": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle:active": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle i": {
        "position": "relative",
        "display": "inline-block",
        "zoom": 1,
        "Display": "inline",
        "width": 25,
        "height": 3,
        "color": "#535659",
        "font": "bold 14px/.4 Helvetica",
        "textTransform": "uppercase",
        "textIndent": -55,
        "background": "#535659",
        "transition": "all .2s ease-out"
    },
    "fh5co-nav-toggle i::before": {
        "content": "''",
        "width": 25,
        "height": 3,
        "background": "#535659",
        "position": "absolute",
        "left": 0,
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s",
        "top": -7
    },
    "fh5co-nav-toggle i::after": {
        "content": "''",
        "width": 25,
        "height": 3,
        "background": "#535659",
        "position": "absolute",
        "left": 0,
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s",
        "bottom": -7
    },
    "fh5co-nav-toggle:hover i::before": {
        "top": -10
    },
    "fh5co-nav-toggle:hover i::after": {
        "bottom": -10
    },
    "fh5co-nav-toggleactive i": {
        "background": "transparent"
    },
    "fh5co-animated": {
        "WebkitAnimationDuration": ".3s",
        "animationDuration": ".3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "rp-b": {
        "paddingBottom": 40
    },
    "cp-l": {
        "paddingLeft": 50
    },
    "cp-r": {
        "paddingRight": 50
    }
});