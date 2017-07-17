!function (e) {
    "use strict";
    function t() {
        var e = ['<div class="player-controls">', '<div class="player-progress">', '<label for="seek{id}" class="sr-only">Seek</label>', '<input id="seek{id}" class="player-progress-seek" type="range" min="0" max="100" step="0.5" value="0" data-player="seek">', '<progress class="player-progress-played" max="100" value="0">', "<span>0</span>% " + C.i18n.played, "</progress>", '<progress class="player-progress-buffer" max="100" value="0">', "<span>0</span>% " + C.i18n.buffered, "</progress>", "</div>", '<span class="player-controls-left">'];
        return o(C.controls, "restart") && e.push('<button type="button" data-player="restart">', '<svg><use xlink:href="#' + C.iconPrefix + '-restart" /></svg>', '<span class="sr-only">' + C.i18n.restart + "</span>", "</button>"), o(C.controls, "rewind") && e.push('<button type="button" data-player="rewind">', '<svg><use xlink:href="#' + C.iconPrefix + '-rewind" /></svg>', '<span class="sr-only">' + C.i18n.rewind + "</span>", "</button>"), o(C.controls, "play") && e.push('<button type="button" data-player="play">', '<svg><use xlink:href="#' + C.iconPrefix + '-play" /></svg>', '<span class="sr-only">' + C.i18n.play + "</span>", "</button>", '<button type="button" data-player="pause">', '<svg><use xlink:href="#' + C.iconPrefix + '-pause" /></svg>', '<span class="sr-only">' + C.i18n.pause + "</span>", "</button>"), o(C.controls, "fast-forward") && e.push('<button type="button" data-player="fast-forward">', '<svg><use xlink:href="#' + C.iconPrefix + '-fast-forward" /></svg>', '<span class="sr-only">' + C.i18n.forward + "</span>", "</button>"), o(C.controls, "current-time") && e.push('<span class="player-time">', '<span class="sr-only">' + C.i18n.currentTime + "</span>", '<span class="player-current-time">00:00</span>', "</span>"), o(C.controls, "duration") && e.push('<span class="player-time">', '<span class="sr-only">' + C.i18n.duration + "</span>", '<span class="player-duration">00:00</span>', "</span>"), e.push("</span>", '<span class="player-controls-right">'), o(C.controls, "mute") && e.push('<button type="button" data-player="mute">', '<svg class="icon-muted"><use xlink:href="#' + C.iconPrefix + '-muted" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-volume" /></svg>', '<span class="sr-only">' + C.i18n.toggleMute + "</span>", "</button>"), o(C.controls, "volume") && e.push('<label for="volume{id}" class="sr-only">' + C.i18n.volume + "</label>", '<input id="volume{id}" class="player-volume" type="range" min="0" max="10" value="5" data-player="volume">'), o(C.controls, "captions") && e.push('<button type="button" data-player="captions">', '<svg class="icon-captions-on"><use xlink:href="#' + C.iconPrefix + '-captions-on" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-captions-off" /></svg>', '<span class="sr-only">' + C.i18n.toggleCaptions + "</span>", "</button>"), o(C.controls, "fullscreen") && e.push('<button type="button" data-player="fullscreen">', '<svg class="icon-exit-fullscreen"><use xlink:href="#' + C.iconPrefix + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-enter-fullscreen" /></svg>', '<span class="sr-only">' + C.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</span>", "</div>"), e.join("")
    }

    function n(e, t) {
        C.debug && window.console && console[t ? "error" : "log"](e)
    }

    function r() {
        var e, t, n, r = navigator.userAgent, a = navigator.appName, s = "" + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10);
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (a = "IE", s = "11;") : -1 !== (t = r.indexOf("MSIE")) ? (a = "IE", s = r.substring(t + 5)) : -1 !== (t = r.indexOf("Chrome")) ? (a = "Chrome", s = r.substring(t + 7)) : -1 !== (t = r.indexOf("Safari")) ? (a = "Safari", s = r.substring(t + 7), -1 !== (t = r.indexOf("Version")) && (s = r.substring(t + 8))) : -1 !== (t = r.indexOf("Firefox")) ? (a = "Firefox", s = r.substring(t + 8)) : (e = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) && (a = r.substring(e, t), s = r.substring(t + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 !== (n = s.indexOf(";")) && (s = s.substring(0, n)), -1 !== (n = s.indexOf(" ")) && (s = s.substring(0, n)), o = parseInt("" + s, 10), isNaN(o) && (s = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), {
            name: a,
            version: o,
            ios: /(iPad|iPhone|iPod)/g.test(navigator.platform)
        }
    }

    function a(e, t) {
        var n = e.media;
        if ("video" == e.type)switch (t) {
            case"video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case"video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case"video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" == e.type)switch (t) {
            case"audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case"audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case"audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return !1
    }

    function s(e) {
        if (!document.querySelectorAll('script[src="' + e + '"]').length) {
            var t = document.createElement("script");
            t.src = e;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n)
        }
    }

    function o(e, t) {
        return Array.prototype.indexOf && -1 != e.indexOf(t)
    }

    function i(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
    }

    function u(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t, a = e[n], s = a.parentNode, o = a.nextSibling;
            r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r)
        }
    }

    function l(e) {
        for (var t = e.parentNode; e.firstChild;)t.insertBefore(e.firstChild, e);
        t.removeChild(e)
    }

    function c(e) {
        e.parentNode.removeChild(e)
    }

    function p(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function d(e, t) {
        for (var n in t)e.setAttribute(n, t[n])
    }

    function f(e, t, n) {
        if (e)if (e.classList) e.classList[n ? "add" : "remove"](t); else {
            var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
            e.className = r + (n ? " " + t : "")
        }
    }

    function m(e, t, n, r) {
        var a = t.split(" ");
        if (e instanceof NodeList)for (var s = 0; s < e.length; s++)e[s] instanceof Node && m(e[s], arguments[1], arguments[2], arguments[3]); else for (var o = 0; o < a.length; o++)e[r ? "addEventListener" : "removeEventListener"](a[o], n, !1)
    }

    function y(e, t, n) {
        e && m(e, t, n, !0)
    }

    function b(e, t, n) {
        e && m(e, t, n, !1)
    }

    function v(e, t) {
        var n = document.createEvent("MouseEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function g(e, t) {
        return t = "boolean" == typeof t ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
    }

    function h(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }

    function w(e, t) {
        for (var n in t)t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, w(e[n], t[n])) : e[n] = t[n];
        return e
    }

    function k() {
        var e = {
            supportsFullScreen: !1, isFullScreen: function () {
                return !1
            }, requestFullScreen: function () {
            }, cancelFullScreen: function () {
            }, fullScreenEventName: "", element: null, prefix: ""
        }, t = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof document.cancelFullScreen) e.supportsFullScreen = !0; else for (var n = 0, r = t.length; r > n; n++) {
            if (e.prefix = t[n], "undefined" != typeof document[e.prefix + "CancelFullScreen"]) {
                e.supportsFullScreen = !0;
                break
            }
            if ("undefined" != typeof document.msExitFullscreen && document.msFullscreenEnabled) {
                e.prefix = "ms", e.supportsFullScreen = !0;
                break
            }
        }
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function (e) {
            switch ("undefined" == typeof e && (e = document.body), this.prefix) {
                case"":
                    return document.fullscreenElement == e;
                case"moz":
                    return document.mozFullScreenElement == e;
                default:
                    return document[this.prefix + "FullscreenElement"] == e
            }
        }, e.requestFullScreen = function (e) {
            return "undefined" == typeof e && (e = document.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" == this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }, e.cancelFullScreen = function () {
            return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + ("ms" == this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }, e.element = function () {
            return "" === this.prefix ? document.fullscreenElement : document[this.prefix + "FullscreenElement"]
        }), e
    }

    function x() {
        var e = {
            supported: function () {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            }()
        };
        return e
    }

    function T(o) {
        function w(e) {
            if (!ft.usingTextTracks && "video" === ft.type && ft.supported.full) {
                for (ft.subcount = 0, e = "number" == typeof e ? e : ft.media.currentTime; A(ft.captions[ft.subcount][0]) < e.toFixed(1);)if (ft.subcount++, ft.subcount > ft.captions.length - 1) {
                    ft.subcount = ft.captions.length - 1;
                    break
                }
                if (ft.media.currentTime.toFixed(1) >= E(ft.captions[ft.subcount][0]) && ft.media.currentTime.toFixed(1) <= A(ft.captions[ft.subcount][0])) {
                    ft.currentCaption = ft.captions[ft.subcount][1];
                    var t = ft.currentCaption.trim();
                    ft.captionsContainer.innerHTML != t && (ft.captionsContainer.innerHTML = "", ft.captionsContainer.innerHTML = t)
                } else ft.captionsContainer.innerHTML = ""
            }
        }

        function T() {
            ft.buttons.captions && (f(ft.container, C.classes.captions.enabled, !0), C.captions.defaultActive && (f(ft.container, C.classes.captions.active, !0), g(ft.buttons.captions, !0)))
        }

        function E(e) {
            var t = [];
            return t = e.split(" --> "), P(t[0])
        }

        function A(e) {
            var t = [];
            return t = e.split(" --> "), P(t[1])
        }

        function P(e) {
            if (null === e || void 0 === e)return 0;
            var t, n = [], r = [];
            return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2])
        }

        function N(e) {
            return ft.container.querySelectorAll(e)
        }

        function M(e) {
            return N(e)[0]
        }

        function I() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }

        function L() {
            var e = C.html;
            if (n("Injecting custom controls."), e || (e = t()), e = i(e, "{seektime}", C.seekTime), e = i(e, "{id}", Math.floor(1e4 * Math.random())), ft.container.insertAdjacentHTML("beforeend", e), C.tooltips)for (var r = N(C.selectors.labels), a = r.length - 1; a >= 0; a--) {
                var s = r[a];
                f(s, C.classes.hidden, !1), f(s, C.classes.tooltip, !0)
            }
        }

        function O() {
            try {
                return ft.controls = M(C.selectors.controls), ft.buttons = {}, ft.buttons.seek = M(C.selectors.buttons.seek), ft.buttons.play = M(C.selectors.buttons.play), ft.buttons.pause = M(C.selectors.buttons.pause), ft.buttons.restart = M(C.selectors.buttons.restart), ft.buttons.rewind = M(C.selectors.buttons.rewind), ft.buttons.forward = M(C.selectors.buttons.forward), ft.buttons.fullscreen = M(C.selectors.buttons.fullscreen), ft.buttons.mute = M(C.selectors.buttons.mute), ft.buttons.captions = M(C.selectors.buttons.captions), ft.checkboxes = N('[type="checkbox"]'), ft.progress = {}, ft.progress.container = M(C.selectors.progress.container), ft.progress.buffer = {}, ft.progress.buffer.bar = M(C.selectors.progress.buffer), ft.progress.buffer.text = ft.progress.buffer.bar && ft.progress.buffer.bar.getElementsByTagName("span")[0], ft.progress.played = {}, ft.progress.played.bar = M(C.selectors.progress.played), ft.progress.played.text = ft.progress.played.bar && ft.progress.played.bar.getElementsByTagName("span")[0], ft.volume = M(C.selectors.buttons.volume), ft.duration = M(C.selectors.duration), ft.currentTime = M(C.selectors.currentTime), ft.seekTime = N(C.selectors.seekTime), !0
            } catch (e) {
                return n("It looks like there's a problem with your controls html. Bailing.", !0), ft.media.setAttribute("controls", ""), !1
            }
        }

        function q() {
            if (ft.buttons.play) {
                var e = ft.buttons.play.innerText || C.i18n.play;
                "undefined" != typeof C.title && C.title.length && (e += ", " + C.title), ft.buttons.play.setAttribute("aria-label", e)
            }
        }

        function V() {
            if (!ft.media)return n("No audio or video element found!", !0), !1;
            if (ft.supported.full && (ft.media.removeAttribute("controls"), f(ft.container, C.classes.type.replace("{0}", ft.type), !0), f(ft.container, C.classes.stopped, null === ft.media.getAttribute("autoplay")), ft.browser.ios && f(ft.container, "ios", !0), "video" === ft.type)) {
                var e = document.createElement("div");
                e.setAttribute("class", C.classes.videoWrapper), u(ft.media, e), ft.videoContainer = e
            }
            "youtube" == ft.type && H(ft.media.getAttribute("data-video-id")), null !== ft.media.getAttribute("autoplay") && D()
        }

        function H(e) {
            for (var t = N('[id^="youtube"]'), n = t.length - 1; n >= 0; n--)c(t[n]);
            var r = document.createElement("div");
            r.setAttribute("id", "youtube-" + Math.floor(1e4 * Math.random())), ft.media.appendChild(r), f(ft.media, C.classes.videoWrapper, !0), f(ft.media, C.classes.embedWrapper, !0), "object" == typeof YT ? R(e, r) : (s("https://www.youtube.com/iframe_api"), S.youtube.push(function () {
                R(e, r)
            }), window.onYouTubeIframeAPIReady = function () {
                for (var e = S.youtube.length - 1; e >= 0; e--)S.youtube[e](), S.youtube.splice(e, 1)
            })
        }

        function R(e, t) {
            n("YouTube API Ready"), "timer" in ft || (ft.timer = {}), ft.embed = new YT.Player(t.id, {
                videoId: e,
                playerVars: {
                    autoplay: 0,
                    controls: ft.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: C.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1
                },
                events: {
                    onReady: function (e) {
                        var t = e.target;
                        ft.media.play = function () {
                            t.playVideo()
                        }, ft.media.pause = function () {
                            t.pauseVideo()
                        }, ft.media.stop = function () {
                            t.stopVideo()
                        }, ft.media.duration = t.getDuration(), ft.media.paused = !0, ft.media.currentTime = t.getCurrentTime(), ft.media.muted = t.isMuted(), v(ft.media, "timeupdate"), window.clearInterval(ft.timer.buffering), ft.timer.buffering = window.setInterval(function () {
                            ft.media.buffered = t.getVideoLoadedFraction(), v(ft.media, "progress"), 1 === ft.media.buffered && window.clearInterval(ft.timer.buffering)
                        }, 200), ft.supported.full && (ft.container.querySelectorAll(C.selectors.controls).length || dt(), C.displayDuration && rt())
                    }, onStateChange: function (e) {
                        var t = e.target;
                        switch (window.clearInterval(ft.timer.playing), e.data) {
                            case 0:
                                ft.media.paused = !0, v(ft.media, "ended");
                                break;
                            case 1:
                                ft.media.paused = !1, v(ft.media, "play"), ft.timer.playing = window.setInterval(function () {
                                    ft.media.currentTime = t.getCurrentTime(), v(ft.media, "timeupdate")
                                }, 200);
                                break;
                            case 2:
                                ft.media.paused = !0, v(ft.media, "pause")
                        }
                    }
                }
            })
        }

        function B() {
            if ("video" === ft.type) {
                ft.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + C.selectors.captions.replace(".", "") + '"><span></span></div>'), ft.captionsContainer = M(C.selectors.captions).querySelector("span"), ft.usingTextTracks = !1, ft.media.textTracks && (ft.usingTextTracks = !0);
                for (var e, t = "", r = ft.media.childNodes, a = 0; a < r.length; a++)"track" === r[a].nodeName.toLowerCase() && (e = r[a].kind, ("captions" === e || "subtitles" === e) && (t = r[a].getAttribute("src")));
                if (ft.captionExists = !0, "" === t ? (ft.captionExists = !1, n("No caption track found.")) : n("Caption track found; URI: " + t), ft.captionExists) {
                    for (var s = ft.media.textTracks, o = 0; o < s.length; o++)s[o].mode = "hidden";
                    if (T(ft), ("IE" === ft.browser.name && ft.browser.version >= 10 || "Firefox" === ft.browser.name && ft.browser.version >= 31 || "Chrome" === ft.browser.name && ft.browser.version >= 43 || "Safari" === ft.browser.name && ft.browser.version >= 7) && (n("Detected unsupported browser for HTML5 captions. Using fallback."), ft.usingTextTracks = !1), ft.usingTextTracks) {
                        n("TextTracks supported.");
                        for (var i = 0; i < s.length; i++) {
                            var u = s[i];
                            ("captions" === u.kind || "subtitles" === u.kind) && y(u, "cuechange", function () {
                                ft.captionsContainer.innerHTML = "", this.activeCues[0] && this.activeCues[0].hasOwnProperty("text") && ft.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim())
                            })
                        }
                    } else if (n("TextTracks not supported so rendering captions manually."), ft.currentCaption = "", ft.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function () {
                            if (4 === l.readyState)if (200 === l.status) {
                                var e, t = [], r = l.responseText;
                                t = r.split("\n\n");
                                for (var a = 0; a < t.length; a++)e = t[a], ft.captions[a] = [], ft.captions[a] = e.split("\n");
                                ft.captions.shift(), n("Successfully loaded the caption file via AJAX.")
                            } else n("There was a problem loading the caption file via AJAX.", !0)
                        }, l.open("get", t, !0), l.send()
                    }
                    if ("Safari" === ft.browser.name && ft.browser.version >= 7) {
                        n("Safari 7+ detected; removing track from DOM."), s = ft.media.getElementsByTagName("track");
                        for (var c = 0; c < s.length; c++)ft.media.removeChild(s[c])
                    }
                } else f(ft.container, C.classes.captions.enabled)
            }
        }

        function j() {
            if ("audio" != ft.type && C.fullscreen.enabled) {
                var e = F.supportsFullScreen;
                e || C.fullscreen.fallback && !I() ? (n((e ? "Native" : "Fallback") + " fullscreen enabled."), f(ft.container, C.classes.fullscreen.enabled, !0)) : n("Fullscreen not supported and fallback disabled."), g(ft.buttons.fullscreen, !1), C.fullscreen.hideControls && f(ft.container, C.classes.fullscreen.hideControls, !0)
            }
        }

        function D() {
            ft.media.play()
        }

        function _() {
            ft.media.pause()
        }

        function W(e) {
            e === !0 ? D() : e === !1 ? _() : ft.media[ft.media.paused ? "play" : "pause"]()
        }

        function Y(e) {
            "number" != typeof e && (e = C.seekTime), U(ft.media.currentTime - e)
        }

        function z(e) {
            "number" != typeof e && (e = C.seekTime), U(ft.media.currentTime + e)
        }

        function U(e) {
            var t = 0, r = ft.media.paused;
            "number" == typeof e ? t = e : "object" != typeof e || "input" !== e.type && "change" !== e.type || (t = e.target.value / e.target.max * ft.media.duration), 0 > t ? t = 0 : t > ft.media.duration && (t = ft.media.duration);
            try {
                ft.media.currentTime = t.toFixed(1)
            } catch (a) {
            }
            "youtube" == ft.type && (ft.embed.seekTo(t), r && _(), v(ft.media, "timeupdate")), n("Seeking to " + ft.media.currentTime + " seconds"), w(t)
        }

        function X() {
            f(ft.container, C.classes.playing, !ft.media.paused), f(ft.container, C.classes.stopped, ft.media.paused)
        }

        function J(e) {
            function t() {
                f(ft.container, C.classes.hover, !0), window.clearTimeout(a), s || (a = window.setTimeout(function () {
                    f(ft.container, C.classes.hover, !1)
                }, 2e3))
            }

            function n(e) {
                s = "mouseenter" === e.type
            }

            var r = F.supportsFullScreen;
            e && e.type === F.fullScreenEventName ? ft.isFullscreen = F.isFullScreen(ft.container) : r ? (F.isFullScreen(ft.container) ? F.cancelFullScreen() : F.requestFullScreen(ft.container), ft.isFullscreen = F.isFullScreen(ft.container)) : (ft.isFullscreen = !ft.isFullscreen, ft.isFullscreen ? (y(document, "keyup", $), document.body.style.overflow = "hidden") : (b(document, "keyup", $), document.body.style.overflow = "")), f(ft.container, C.classes.fullscreen.active, ft.isFullscreen), g(ft.buttons.fullscreen, ft.isFullscreen);
            var a, s = !1;
            C.fullscreen.hideControls && (f(ft.controls, C.classes.hover, !1), m(ft.controls, "mouseenter mouseleave", n, ft.isFullscreen), m(ft.container, "mousemove", t, ft.isFullscreen))
        }

        function $(e) {
            27 === (e.which || e.charCode || e.keyCode) && ft.isFullscreen && J()
        }

        function G(e) {
            "undefined" == typeof e && (e = C.storage.enabled && x().supported ? window.localStorage[C.storage.key] || C.volume : C.volume), e > 10 && (e = 10), 0 > e && (e = 0), ft.media.volume = parseFloat(e / 10), "youtube" == ft.type && (ft.embed.setVolume(100 * ft.media.volume), v(ft.media, "volumechange")), ft.media.muted && e > 0 && K()
        }

        function K(e) {
            "boolean" != typeof e && (e = !ft.media.muted), g(ft.buttons.mute, e), ft.media.muted = e, "youtube" === ft.type && (ft.embed[ft.media.muted ? "mute" : "unMute"](), v(ft.media, "volumechange"))
        }

        function Q() {
            var e = ft.media.muted ? 0 : 10 * ft.media.volume;
            ft.supported.full && ft.volume && (ft.volume.value = e), C.storage.enabled && x().supported && window.localStorage.setItem(C.storage.key, e), f(ft.container, C.classes.muted, 0 === e), ft.supported.full && ft.buttons.mute && g(ft.buttons.mute, 0 === e)
        }

        function Z(e) {
            ft.supported.full && ft.buttons.captions && ("boolean" != typeof e && (e = -1 === ft.container.className.indexOf(C.classes.captions.active)), g(ft.buttons.captions, e), f(ft.container, C.classes.captions.active, e))
        }

        function et(e) {
            var t = "waiting" === e.type;
            clearTimeout(ft.loadingTimer), ft.loadingTimer = setTimeout(function () {
                f(ft.container, C.classes.loading, t)
            }, t ? 250 : 0)
        }

        function tt(e) {
            var t = ft.progress.played.bar, n = ft.progress.played.text, r = 0;
            if (e)switch (e.type) {
                case"timeupdate":
                case"seeking":
                    r = h(ft.media.currentTime, ft.media.duration), "timeupdate" == e.type && ft.buttons.seek && (ft.buttons.seek.value = r);
                    break;
                case"change":
                case"input":
                    r = e.target.value;
                    break;
                case"playing":
                case"progress":
                    t = ft.progress.buffer.bar, n = ft.progress.buffer.text, r = function () {
                        var e = ft.media.buffered;
                        return e && e.length ? h(e.end(0), ft.media.duration) : "number" == typeof e ? 100 * e : 0
                    }()
            }
            t && (t.value = r), n && (n.innerHTML = r)
        }

        function nt(e, t) {
            if (t) {
                ft.secs = parseInt(e % 60), ft.mins = parseInt(e / 60 % 60), ft.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(ft.media.duration / 60 / 60 % 60) > 0;
                ft.secs = ("0" + ft.secs).slice(-2), ft.mins = ("0" + ft.mins).slice(-2), t.innerHTML = (n ? ft.hours + ":" : "") + ft.mins + ":" + ft.secs
            }
        }

        function rt() {
            var e = ft.media.duration || 0;
            !ft.duration && C.displayDuration && ft.media.paused && nt(e, ft.currentTime), ft.duration && nt(e, ft.duration)
        }

        function at(e) {
            nt(ft.media.currentTime, ft.currentTime), tt(e)
        }

        function st() {
            for (var e = ft.media.querySelectorAll("source"), t = e.length - 1; t >= 0; t--)c(e[t]);
            ft.media.removeAttribute("src")
        }

        function ot(e) {
            if (e.src) {
                var t = document.createElement("source");
                d(t, e), p(ft.media, t)
            }
        }

        function it(e) {
            if ("youtube" === ft.type && "string" == typeof e)return ft.embed.destroy(), H(e), at(), void 0;
            if (_(), U(), st(), "string" == typeof e) ot({src: e}); else if (e.constructor === Array)for (var t in e)ot(e[t]);
            ft.supported.full && (at(), X()), ft.media.load(), null !== ft.media.getAttribute("autoplay") && D()
        }

        function ut(e) {
            "video" === ft.type && ft.media.setAttribute("poster", e)
        }

        function lt() {
            function e() {
                var e = document.activeElement;
                e && e != document.body ? document.querySelector && (e = document.querySelector(":focus")) : e = null;
                for (var t in ft.buttons) {
                    var n = ft.buttons[t];
                    f(n, "tab-focus", n === e)
                }
            }

            var t = "IE" == ft.browser.name ? "change" : "input";
            y(window, "keyup", function (t) {
                var n = t.keyCode ? t.keyCode : t.which;
                9 == n && e()
            });
            for (var n in ft.buttons) {
                var r = ft.buttons[n];
                y(r, "blur", function () {
                    f(r, "tab-focus", !1)
                })
            }
            y(ft.buttons.play, "click", function () {
                D(), setTimeout(function () {
                    ft.buttons.pause.focus()
                }, 100)
            }), y(ft.buttons.pause, "click", function () {
                _(), setTimeout(function () {
                    ft.buttons.play.focus()
                }, 100)
            }), y(ft.buttons.restart, "click", U), y(ft.buttons.rewind, "click", Y), y(ft.buttons.forward, "click", z), y(ft.buttons.seek, t, U), y(ft.volume, t, function () {
                G(this.value)
            }), y(ft.buttons.mute, "click", K), y(ft.buttons.fullscreen, "click", J), F.supportsFullScreen && y(document, F.fullScreenEventName, J), y(ft.media, "timeupdate seeking", at), y(ft.media, "timeupdate", w), y(ft.media, "loadedmetadata", rt), y(ft.buttons.captions, "click", Z), y(ft.media, "ended", function () {
                "video" === ft.type && (ft.captionsContainer.innerHTML = ""), X()
            }), y(ft.media, "progress playing", tt), y(ft.media, "volumechange", Q), y(ft.media, "play pause", X), y(ft.media, "waiting canplay seeked", et), "video" === ft.type && C.click && y(ft.videoContainer, "click", function () {
                ft.media.paused ? v(ft.buttons.play, "click") : ft.media.ended ? (U(), v(ft.buttons.play, "click")) : v(ft.buttons.pause, "click")
            })
        }

        function ct() {
            if (!ft.init)return null;
            if (ft.container.setAttribute("class", C.selectors.container.replace(".", "")), ft.init = !1, c(M(C.selectors.controls)), "youtube" === ft.type)return ft.embed.destroy(), void 0;
            "video" === ft.type && (c(M(C.selectors.captions)), l(ft.videoContainer)), ft.media.setAttribute("controls", "");
            var e = ft.media.cloneNode(!0);
            ft.media.parentNode.replaceChild(e, ft.media)
        }

        function pt() {
            if (ft.init)return null;
            F = k(), ft.browser = r(), ft.media = ft.container.querySelectorAll("audio, video, div")[0];
            var t = ft.media.tagName.toLowerCase();
            if (ft.type = "div" === t ? ft.media.getAttribute("data-type") : t, ft.supported = e.supported(ft.type), !ft.supported.basic)return !1;
            if (n(ft.browser.name + " " + ft.browser.version), V(), "video" == ft.type || "audio" == ft.type) {
                if (!ft.supported.full)return ft.init = !0, void 0;
                dt(), C.displayDuration && rt(), q()
            }
            ft.init = !0
        }

        function dt() {
            return L(), O() ? (B(), G(), Q(), j(), lt(), void 0) : !1
        }

        var ft = this;
        return ft.container = o, pt(), ft.init ? {
            media: ft.media,
            play: D,
            pause: _,
            restart: U,
            rewind: Y,
            forward: z,
            seek: U,
            source: it,
            poster: ut,
            setVolume: G,
            togglePlay: W,
            toggleMute: K,
            toggleCaptions: Z,
            toggleFullscreen: J,
            isFullscreen: function () {
                return ft.isFullscreen || !1
            },
            support: function (e) {
                return a(ft, e)
            },
            destroy: ct,
            restore: pt
        } : {}
    }

    var F, C, S = {youtube: []}, E = {
        enabled: !0,
        debug: !1,
        seekTime: 10,
        volume: 5,
        click: !0,
        tooltips: !1,
        displayDuration: !0,
        iconPrefix: "icon",
        selectors: {
            container: ".player",
            controls: ".player-controls",
            labels: "[data-player] .sr-only, label .sr-only",
            buttons: {
                seek: '[data-player="seek"]',
                play: '[data-player="play"]',
                pause: '[data-player="pause"]',
                restart: '[data-player="restart"]',
                rewind: '[data-player="rewind"]',
                forward: '[data-player="fast-forward"]',
                mute: '[data-player="mute"]',
                volume: '[data-player="volume"]',
                captions: '[data-player="captions"]',
                fullscreen: '[data-player="fullscreen"]'
            },
            progress: {
                container: ".player-progress",
                buffer: ".player-progress-buffer",
                played: ".player-progress-played"
            },
            captions: ".player-captions",
            currentTime: ".player-current-time",
            duration: ".player-duration"
        },
        classes: {
            videoWrapper: "player-video-wrapper",
            embedWrapper: "player-video-embed",
            type: "player-{0}",
            stopped: "stopped",
            playing: "playing",
            muted: "muted",
            loading: "loading",
            tooltip: "player-tooltip",
            hidden: "sr-only",
            hover: "player-hover",
            captions: {enabled: "captions-enabled", active: "captions-active"},
            fullscreen: {
                enabled: "fullscreen-enabled",
                active: "fullscreen-active",
                hideControls: "fullscreen-hide-controls"
            }
        },
        captions: {defaultActive: !1},
        fullscreen: {enabled: !0, fallback: !0, hideControls: !0},
        storage: {enabled: !0, key: "plyr_volume"},
        controls: ["restart", "rewind", "play", "fast-forward", "current-time", "duration", "mute", "volume", "captions", "fullscreen"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime} secs",
            play: "Play",
            pause: "Pause",
            forward: "Forward {seektime} secs",
            played: "played",
            buffered: "buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            toggleMute: "Toggle Mute",
            toggleCaptions: "Toggle Captions",
            toggleFullscreen: "Toggle Fullscreen"
        }
    };
    e.supported = function (e) {
        var t, n, a = r(), s = "IE" === a.name && a.version <= 9, o = /iPhone|iPod/i.test(navigator.userAgent),
            i = !!document.createElement("audio").canPlayType, u = !!document.createElement("video").canPlayType;
        switch (e) {
            case"video":
                t = u, n = t && !s && !o;
                break;
            case"audio":
                t = i, n = t && !s;
                break;
            case"youtube":
                t = !0, n = !s && !o;
                break;
            default:
                t = i && u, n = t && !s
        }
        return {basic: t, full: n}
    }, e.setup = function (t) {
        if (C = w(E, t), !C.enabled || !e.supported().basic)return !1;
        for (var n = document.querySelectorAll(C.selectors.container), r = [], a = n.length - 1; a >= 0; a--) {
            var s = n[a];
            if ("undefined" == typeof s.plyr) {
                var o = new T(s);
                s.plyr = Object.keys(o).length ? o : !1, "function" == typeof C.onSetup && C.onSetup.apply(s.plyr)
            }
            r.push(s.plyr)
        }
        return r
    }
}(this.plyr = this.plyr || {});