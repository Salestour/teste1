(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"backgroundColorDirection":"vertical","scrollBarMargin":2,"paddingTop":0,"downloadEnabled":false,"overflow":"hidden","borderRadius":0,"shadow":false,"paddingBottom":0,"propagateClick":false,"id":"rootPlayer","mouseWheelEnabled":true,"width":"100%","horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","scrollBarColor":"#000000","mobileMipmappingEnabled":false,"paddingLeft":0,"desktopMipmappingEnabled":false,"children":["this.MainViewer"],"scrollBarOpacity":0.5,"class":"Player","mediaActivationMode":"window","paddingRight":0,"definitions": [{"video":"this.videores_52490E65_43C1_FDAB_41D0_9F6080575776","thumbnailUrl":"media/video_520854B5_43C2_EEAB_41B4_4DF8B133433B_t.jpg","loop":false,"height":1920,"scaleMode":"fit_inside","width":3840,"id":"video_520854B5_43C2_EEAB_41B4_4DF8B133433B","label":trans('video_520854B5_43C2_EEAB_41B4_4DF8B133433B.label'),"class":"Video","data":{"label":"CLASP 360"}},{"toolTipFontSize":"1.11vmin","subtitlesPaddingRight":5,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","translationTransitionDuration":1000,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","id":"MainViewer","progressLeft":0,"toolTipShadowBlurRadius":3,"subtitlesFontFamily":"Arial","width":"100%","toolTipTextShadowOpacity":0,"subtitlesEnabled":true,"playbackBarProgressBorderRadius":0,"progressBorderColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"transitionDuration":500,"displayTooltipInSurfaceSelection":true,"toolTipBorderColor":"#767676","subtitlesPaddingTop":5,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"height":"100%","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"subtitlesTop":0,"progressBackgroundOpacity":1,"toolTipFontWeight":"normal","playbackBarHeadHeight":15,"toolTipTextShadowBlurRadius":3,"playbackBarLeft":0,"toolTipBorderRadius":3,"progressBarOpacity":1,"toolTipShadowSpread":0,"toolTipShadowOpacity":1,"borderSize":0,"toolTipHorizontalAlign":"center","playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesShadow":false,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":0,"progressHeight":10,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","progressBorderSize":0,"playbackBarBackgroundOpacity":1,"toolTipFontFamily":"Arial","borderRadius":0,"toolTipShadowColor":"#333138","paddingTop":0,"playbackBarOpacity":1,"playbackBarBorderRadius":0,"progressBarBorderSize":0,"shadow":false,"toolTipDisplayTime":600,"paddingBottom":0,"doubleClickAction":"toggle_fullscreen","subtitlesOpacity":1,"subtitlesGap":0,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","propagateClick":false,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesVerticalAlign":"bottom","toolTipPaddingRight":6,"playbackBarBottom":5,"progressRight":0,"surfaceReticleOpacity":0.6,"progressOpacity":1,"paddingLeft":0,"progressBackgroundColorRatios":[0],"subtitlesHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipOpacity":1,"toolTipShadowHorizontalLength":0,"class":"ViewerArea","toolTipPaddingTop":4,"subtitlesFontSize":"3vmin","subtitlesBorderSize":0,"playbackBarProgressOpacity":1,"paddingRight":0,"progressBarBackgroundColorDirection":"vertical","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","subtitlesFontColor":"#FFFFFF","transitionMode":"blending","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"subtitlesFontWeight":"normal","subtitlesTextShadowOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","minHeight":50,"playbackBarRight":0,"progressBorderRadius":0,"minWidth":100,"subtitlesBottom":50,"toolTipShadowVerticalLength":0,"data":{"name":"Main Viewer"},"subtitlesPaddingLeft":5},{"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","overlays":["this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0","this.overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6","this.overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E","this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4","this.overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30","this.overlay_513C249E_43C1_EE99_418D_09D947757AF4"],"adjacentPanoramas":[{"distance":6.12,"yaw":-104.43,"select":"this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},"panorama":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"colCount":24},{"width":6144,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6},{"width":9216,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6},{"width":12288,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6}]}}],"pitch":0,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","label":trans('panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94.label'),"hfovMin":"135%","class":"Panorama","hfov":360,"vfov":180,"partial":false,"hfovMax":130,"data":{"label":"CLASP F1 "}},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_8773C5E6_8B58_24DB_41BF_CB6A404834BE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_8773C5E6_8B58_24DB_41BF_CB6A404834BE, 0)"}],"id":"playList_8773C5E6_8B58_24DB_41BF_CB6A404834BE"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8","class":"PanoramaCamera","id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera"},{"video":"this.videores_531635CF_43CE_6EF7_41CD_260824DEF4CB","thumbnailUrl":"media/video_5242A95A_43C2_A799_41C2_73D20BB9E1BE_t.jpg","loop":false,"height":1920,"scaleMode":"fit_inside","width":3840,"id":"video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","label":trans('video_5242A95A_43C2_A799_41C2_73D20BB9E1BE.label'),"class":"Video","data":{"label":"CLASP 360"}},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_520854B5_43C2_EEAB_41B4_4DF8B133433B","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_8773B5E6_8B58_24DB_41E0_CC435A5DB9E4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_8773B5E6_8B58_24DB_41E0_CC435A5DB9E4, 0)"}],"id":"playList_8773B5E6_8B58_24DB_41E0_CC435A5DB9E4"},{"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","overlays":["this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0","this.overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802","this.overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492","this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"],"adjacentPanoramas":[{"distance":8.98,"yaw":-103.31,"select":"this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},"panorama":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"colCount":24},{"width":6144,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6},{"width":9216,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6},{"width":12288,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6}]}}],"pitch":0,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","label":trans('panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF.label'),"hfovMin":"135%","class":"Panorama","hfov":360,"vfov":180,"partial":false,"hfovMax":130,"data":{"label":"CLASPF2"}},{"class":"PlayList","items":["this.PanoramaPlayListItem_8763A648_8B58_27D7_41D0_415EAAE3AE8E",{"camera":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"minWidth":0,"overflow":"scroll","shadowOpacity":0.5,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","headerVerticalAlign":"middle","titlePaddingLeft":5,"footerBorderColor":"#000000","shadowColor":"#000000","closeButtonPressedIconLineWidth":3,"id":"window_52347E08_43CE_9D79_41A0_D0956BAE2C15","modal":true,"headerPaddingLeft":10,"headerBackgroundOpacity":0,"data":{"name":"Window15720"},"closeButtonRollOverBackgroundColor":[],"closeButtonPressedBackgroundColorRatios":[],"bodyPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"bodyPaddingTop":0,"headerBorderColor":"#000000","closeButtonBorderColor":"#000000","bodyBorderSize":0,"closeButtonPaddingLeft":0,"footerHeight":5,"titleTextDecoration":"none","veilColorRatios":[0,1],"shadowSpread":1,"bodyBorderColor":"#000000","height":"90%","closeButtonIconWidth":20,"backgroundOpacity":1,"backgroundColor":[],"closeButtonPaddingRight":0,"width":"90%","contentOpaque":false,"shadowHorizontalLength":3,"titleFontColor":"#000000","closeButtonBackgroundColor":[],"bodyPaddingLeft":0,"scrollBarVisible":"rollOver","closeButtonPaddingBottom":0,"borderSize":0,"titleFontStyle":"normal","toolTipHorizontalAlign":"center","gap":10,"closeButtonIconColor":"#B2B2B2","closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderRadius":11,"headerBorderSize":0,"titleFontWeight":"normal","headerBackgroundColorRatios":[0,0.1,1],"footerBackgroundOpacity":0,"shadowBlurRadius":6,"titlePaddingRight":5,"closeButtonPressedBorderSize":0,"veilColor":["#000000","#000000"],"borderRadius":5,"closeButtonRollOverBackgroundOpacity":0,"paddingTop":0,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"veilColorDirection":"horizontal","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingTop":0,"shadow":true,"paddingBottom":0,"headerBackgroundColorDirection":"vertical","hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"horizontalAlign":"center","bodyBackgroundColorDirection":"vertical","children":["this.WebFrame_87632647_8B58_27D9_417B_22F8CA1313E2"],"propagateClick":false,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBorderColor":"#000000","closeButtonRollOverIconLineWidth":2,"verticalAlign":"middle","showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"headerPaddingRight":0,"shadowVerticalLength":0,"paddingLeft":0,"closeButtonBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"scrollBarColor":"#000000","class":"Window","veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titleFontSize":"1.29vmin","paddingRight":0,"bodyPaddingRight":0,"backgroundColorRatios":[],"closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"veilOpacity":0.4,"closeButtonPressedIconColor":"#FFFFFF","footerBorderSize":0,"closeButtonIconHeight":20,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"titleHorizontalAlign":"left","closeButtonPressedBackgroundOpacity":0,"closeButtonRollOverBorderSize":0,"headerPaddingBottom":5,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonBackgroundOpacity":0,"scrollBarWidth":10,"titleFontFamily":"Arial","closeButtonPressedBorderColor":"#000000","bodyBackgroundOpacity":0,"headerPaddingTop":10,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titlePaddingTop":5,"minHeight":0},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD","class":"PanoramaCamera","id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera"},{"minWidth":0,"overflow":"scroll","shadowOpacity":0.5,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","headerVerticalAlign":"middle","titlePaddingLeft":5,"footerBorderColor":"#000000","shadowColor":"#000000","closeButtonPressedIconLineWidth":3,"id":"window_569DAA08_4442_6579_41C1_541231190E14","modal":true,"headerPaddingLeft":10,"headerBackgroundOpacity":0,"data":{"name":"Window17677"},"closeButtonRollOverBackgroundColor":[],"closeButtonPressedBackgroundColorRatios":[],"bodyPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"bodyPaddingTop":0,"headerBorderColor":"#000000","closeButtonBorderColor":"#000000","bodyBorderSize":0,"closeButtonPaddingLeft":0,"footerHeight":5,"titleTextDecoration":"none","veilColorRatios":[0,1],"shadowSpread":1,"bodyBorderColor":"#000000","height":"90%","closeButtonIconWidth":20,"backgroundOpacity":1,"backgroundColor":[],"closeButtonPaddingRight":0,"width":"90%","contentOpaque":false,"shadowHorizontalLength":3,"titleFontColor":"#000000","closeButtonBackgroundColor":[],"bodyPaddingLeft":0,"scrollBarVisible":"rollOver","closeButtonPaddingBottom":0,"borderSize":0,"titleFontStyle":"normal","toolTipHorizontalAlign":"center","gap":10,"closeButtonIconColor":"#B2B2B2","closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderRadius":11,"headerBorderSize":0,"titleFontWeight":"normal","headerBackgroundColorRatios":[0,0.1,1],"footerBackgroundOpacity":0,"shadowBlurRadius":6,"titlePaddingRight":5,"closeButtonPressedBorderSize":0,"veilColor":["#000000","#000000"],"borderRadius":5,"closeButtonRollOverBackgroundOpacity":0,"paddingTop":0,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"veilColorDirection":"horizontal","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingTop":0,"shadow":true,"paddingBottom":0,"headerBackgroundColorDirection":"vertical","hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"horizontalAlign":"center","bodyBackgroundColorDirection":"vertical","children":["this.WebFrame_8763D648_8B58_27D7_41C2_0E6E981F6C94"],"propagateClick":false,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBorderColor":"#000000","closeButtonRollOverIconLineWidth":2,"verticalAlign":"middle","showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"headerPaddingRight":0,"shadowVerticalLength":0,"paddingLeft":0,"closeButtonBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"scrollBarColor":"#000000","class":"Window","veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titleFontSize":"1.29vmin","paddingRight":0,"bodyPaddingRight":0,"backgroundColorRatios":[],"closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"veilOpacity":0.4,"closeButtonPressedIconColor":"#FFFFFF","footerBorderSize":0,"closeButtonIconHeight":20,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"titleHorizontalAlign":"left","closeButtonPressedBackgroundOpacity":0,"closeButtonRollOverBorderSize":0,"headerPaddingBottom":5,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonBackgroundOpacity":0,"scrollBarWidth":10,"titleFontFamily":"Arial","closeButtonPressedBorderColor":"#000000","bodyBackgroundOpacity":0,"headerPaddingTop":10,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titlePaddingTop":5,"minHeight":0},{"displayPlayOverlay":true,"viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer","displayPlaybackBar":true,"class":"VideoPlayer","clickAction":"play_pause"},{"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","zoomEnabled":true,"surfaceSelectionEnabled":false,"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"height":1920,"width":3840,"class":"VideoResource","levels":["this.videolevel_80AF44AB_8B58_24A9_41C5_5B40B2A0DAB6","this.videolevel_80AF34AC_8B58_24AF_41D6_AC753989A9C6"],"id":"videores_52490E65_43C1_FDAB_41D0_9F6080575776"},{"distance":50,"useHandCursor":false,"angle":0,"class":"TripodCapPanoramaOverlay","hfov":45,"inertia":false,"rotate":false,"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0"},{"enabledInCardboard":true,"data":{"label":"large-removebg-preview"},"areas":["this.HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"],"useHandCursor":true,"items":[{"distance":50,"yaw":124.28,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":12.6,"hfov":13.31,"image":"this.res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC","pitch":-22.16,"data":{"label":"large-removebg-preview"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6"},{"enabledInCardboard":true,"data":{"label":"CLIQUE"},"id":"overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E","useHandCursor":true,"items":[{"distance":50,"yaw":122.12,"rotationY":-8.15,"horizontalAlign":"center","rotationX":4.38,"class":"HotspotPanoramaOverlayImage","vfov":14.46,"hfov":11.68,"verticalAlign":"middle","roll":0.06,"image":"this.AnimatedImageResource_877D5562_8B58_25D8_417D_C19FF159D877","data":{"label":"CLIQUE"},"pitch":-17.23,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"]},{"enabledInCardboard":true,"data":{"label":"Arrow 04b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"],"useHandCursor":true,"items":[{"distance":100,"yaw":-104.43,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":25.16,"hfov":25.41,"image":"this.AnimatedImageResource_877D0564_8B58_25D8_41CB_493A1D823720","data":{"label":"Arrow 04b"},"pitch":-15.51,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},{"data":{"label":"Poligono"},"areas":["this.HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"],"useHandCursor":true,"items":[{"distance":50,"yaw":-70.71,"class":"HotspotPanoramaOverlayImage","hfov":19.64,"vfov":21.31,"image":{"class":"ImageResource","levels":[{"height":364,"width":334,"class":"ImageResourceLevel","url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_HS_jrpvywis.png"}]},"pitch":-48.8,"data":{"label":"Poligono"}}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30"},{"enabledInCardboard":true,"data":{"label":"CLIQUE"},"id":"overlay_513C249E_43C1_EE99_418D_09D947757AF4","useHandCursor":true,"items":[{"distance":50,"yaw":-82.41,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":15.61,"hfov":8.55,"image":"this.AnimatedImageResource_877DB565_8B58_25D8_41CC_2AEE6743A69C","data":{"label":"CLIQUE"},"pitch":-42.31,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"]},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8"},{"height":1920,"width":3840,"class":"VideoResource","levels":["this.videolevel_80A95429_8B58_3BA8_41D6_9250E209F78E","this.videolevel_80A95439_8B58_3BA9_41CF_2981A7C99365"],"id":"videores_531635CF_43CE_6EF7_41CD_260824DEF4CB"},{"distance":50,"useHandCursor":false,"angle":0,"class":"TripodCapPanoramaOverlay","hfov":45,"inertia":false,"rotate":false,"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0"},{"enabledInCardboard":true,"data":{"label":"Info Red 02"},"areas":["this.HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"],"useHandCursor":true,"items":[{"distance":100,"yaw":171.06,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":17.2,"hfov":16.74,"image":"this.AnimatedImageResource_877C6567_8B58_25D9_41DA_5E87CB15812E","data":{"label":"Info Red 02"},"pitch":-19.15,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802"},{"data":{"label":"Image"},"areas":["this.HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"],"useHandCursor":true,"items":[{"distance":50,"yaw":109.82,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":10.5,"hfov":10.5,"image":"this.res_574BFD98_4442_9E99_41C8_4DA5752EED88","pitch":8.49,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492"},{"enabledInCardboard":true,"data":{"label":"Arrow 04b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"],"useHandCursor":true,"items":[{"distance":100,"yaw":-103.31,"verticalAlign":"middle","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":21.9,"hfov":21.66,"image":"this.AnimatedImageResource_877C2569_8B58_25A9_41C4_F5F71FB8B119","data":{"label":"Arrow 04b"},"pitch":-10.71,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},{"camera":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_8763A648_8B58_27D7_41D0_415EAAE3AE8E"},{"backgroundColorDirection":"vertical","data":{"name":"WebFrame1848"},"paddingTop":0,"shadow":false,"paddingBottom":0,"url":trans('WebFrame_87632647_8B58_27D9_417B_22F8CA1313E2.url'),"propagateClick":false,"id":"WebFrame_87632647_8B58_27D9_417B_22F8CA1313E2","insetBorder":false,"paddingLeft":0,"class":"WebFrame","scrollEnabled":true,"width":"100%","paddingRight":0,"backgroundColorRatios":[],"backgroundOpacity":1,"backgroundColor":[],"height":"100%","borderSize":0,"toolTipHorizontalAlign":"center","minHeight":0,"minWidth":0,"borderRadius":0},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD"},{"backgroundColorDirection":"vertical","data":{"name":"WebFrame1849"},"paddingTop":0,"shadow":false,"paddingBottom":0,"url":trans('WebFrame_8763D648_8B58_27D7_41C2_0E6E981F6C94.url'),"propagateClick":false,"id":"WebFrame_8763D648_8B58_27D7_41C2_0E6E981F6C94","insetBorder":false,"paddingLeft":0,"class":"WebFrame","scrollEnabled":true,"width":"100%","paddingRight":0,"backgroundColorRatios":[],"backgroundOpacity":1,"backgroundColor":[],"height":"100%","borderSize":0,"toolTipHorizontalAlign":"center","minHeight":0,"minWidth":0,"borderRadius":0},{"width":3840,"framerate":29.97,"url":trans('videolevel_80AF44AB_8B58_24A9_41C5_5B40B2A0DAB6.url'),"height":1920,"posterURL":trans('videolevel_80AF44AB_8B58_24A9_41C5_5B40B2A0DAB6.posterURL'),"type":"application/x-mpegurl","class":"VideoResourceLevel","id":"videolevel_80AF44AB_8B58_24A9_41C5_5B40B2A0DAB6"},{"width":3840,"bitrate":16572,"url":trans('videolevel_80AF34AC_8B58_24AF_41D6_AC753989A9C6.url'),"framerate":29.97,"height":1920,"posterURL":trans('videolevel_80AF34AC_8B58_24AF_41D6_AC753989A9C6.posterURL'),"type":"video/mp4","class":"VideoResourceLevel","id":"videolevel_80AF34AC_8B58_24AF_41D6_AC753989A9C6"},{"class":"ImageResource","levels":[{"height":1024,"width":1024,"class":"ImageResourceLevel","url":"media/res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE_0.png"}],"id":"res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE"},{"click":"this.openLink(this.translate('LinkBehaviour_525B0825_43C3_A5AA_41BE_CE2E7D6B79C7.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"},{"class":"ImageResource","levels":[{"height":179,"width":318,"class":"ImageResourceLevel","url":"media/res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC_0.png"}],"id":"res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC"},{"id":"AnimatedImageResource_877D5562_8B58_25D8_417D_C19FF159D877","levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameCount":2,"colCount":1,"class":"AnimatedImageResource","rowCount":2,"frameDuration":300},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"},{"id":"AnimatedImageResource_877D0564_8B58_25D8_41CB_493A1D823720","levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameCount":21,"colCount":4,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41},{"click":"this.WebFrame_87632647_8B58_27D9_417B_22F8CA1313E2.set('url', this.translate('PopupWebFrameBehaviour_52353E09_43CE_9D7B_41B7_7A5EB719B40E.url')); this.showWindow(this.window_52347E08_43CE_9D79_41A0_D0956BAE2C15, null, false)","class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"},{"id":"AnimatedImageResource_877DB565_8B58_25D8_41CC_2AEE6743A69C","levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameCount":2,"colCount":1,"class":"AnimatedImageResource","rowCount":2,"frameDuration":300},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"},{"width":3840,"framerate":29.97,"url":trans('videolevel_80A95429_8B58_3BA8_41D6_9250E209F78E.url'),"height":1920,"posterURL":trans('videolevel_80A95429_8B58_3BA8_41D6_9250E209F78E.posterURL'),"type":"application/x-mpegurl","class":"VideoResourceLevel","id":"videolevel_80A95429_8B58_3BA8_41D6_9250E209F78E"},{"width":3840,"bitrate":16572,"url":trans('videolevel_80A95439_8B58_3BA9_41CF_2981A7C99365.url'),"framerate":29.97,"height":1920,"posterURL":trans('videolevel_80A95439_8B58_3BA9_41CF_2981A7C99365.posterURL'),"type":"video/mp4","class":"VideoResourceLevel","id":"videolevel_80A95439_8B58_3BA9_41CF_2981A7C99365"},{"click":"this.openLink(this.translate('LinkBehaviour_5339FA5C_43C2_A599_41D0_A9D6E8603133.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"},{"id":"AnimatedImageResource_877C6567_8B58_25D9_41DA_5E87CB15812E","levels":[{"height":1020,"width":680,"class":"ImageResourceLevel","url":"media/res_52E001A5_43C1_A6AB_419F_09F478331FF8_0.png"}],"frameCount":24,"colCount":4,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41},{"click":"this.WebFrame_8763D648_8B58_27D7_41C2_0E6E981F6C94.set('url', this.translate('PopupWebFrameBehaviour_569ADA0E_4442_6579_41C5_8BAA09BD669F.url')); this.showWindow(this.window_569DAA08_4442_6579_41C1_541231190E14, null, false)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"},{"class":"ImageResource","levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_574BFD98_4442_9E99_41C8_4DA5752EED88_0.png"}],"id":"res_574BFD98_4442_9E99_41C8_4DA5752EED88"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8763A648_8B58_27D7_41D0_415EAAE3AE8E, 115.75384615384615, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"},{"id":"AnimatedImageResource_877C2569_8B58_25A9_41C4_F5F71FB8B119","levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameCount":21,"colCount":4,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41}],"backgroundColorRatios":[0],"backgroundOpacity":1,"backgroundColor":["#663300"],"layout":"absolute","height":"100%","contentOpaque":false,"defaultVRPointer":"laser","backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","scrollBarWidth":10,"borderSize":0,"toolTipHorizontalAlign":"center","scripts":{"translate":TDV.Tour.Script.translate,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getKey":TDV.Tour.Script.getKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeJS":TDV.Tour.Script.executeJS,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"existsKey":TDV.Tour.Script.existsKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"init":TDV.Tour.Script.init,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"clone":TDV.Tour.Script.clone,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlays":TDV.Tour.Script.getOverlays,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizStart":TDV.Tour.Script.quizStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"registerKey":TDV.Tour.Script.registerKey,"showWindow":TDV.Tour.Script.showWindow,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initAnalytics":TDV.Tour.Script.initAnalytics,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPixels":TDV.Tour.Script.getPixels,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initQuiz":TDV.Tour.Script.initQuiz,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot},"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"data":{"name":"Player760","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"pt"},"start":"this.init()","minWidth":0,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Fri Nov 18 2022