!function(e){function n(n){for(var t,r,a=n[0],o=n[1],s=0,l=[];s<a.length;s++)r=a[s],i[r]&&l.push(i[r][0]),i[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(h&&h(n);l.length;)l.shift()()}var t={},i={0:0};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,r){t=i[e]=[n,r]});n.push(t[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"files_sharing."+e+".js"}(e),o=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,t[1](o)}i[e]=void 0}};var h=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/js/",r.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var h=o;r(r.s=2)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(a).concat([r]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(r=0;r<e.length;r++){var o=e[r];null!=o[0]&&i[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){"use strict";function i(e,n){for(var t=[],i={},r=0;r<n.length;r++){var a=n[r],o=a[0],s={id:e+":"+r,css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):t.push(i[o]={id:o,parts:[s]})}return t}t.r(n),t.d(n,"default",function(){return f});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,h=0,l=!1,p=function(){},d=null,u="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,n,t,r){l=t,d=r||{};var o=i(e,n);return m(o),function(n){for(var t=[],r=0;r<o.length;r++){var s=o[r];(h=a[s.id]).refs--,t.push(h)}n?m(o=i(e,n)):o=[];for(r=0;r<t.length;r++){var h;if(0===(h=t[r]).refs){for(var l=0;l<h.parts.length;l++)h.parts[l]();delete a[h.id]}}}}function m(e){for(var n=0;n<e.length;n++){var t=e[n],i=a[t.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](t.parts[r]);for(;r<t.parts.length;r++)i.parts.push(v(t.parts[r]));i.parts.length>t.parts.length&&(i.parts.length=t.parts.length)}else{var o=[];for(r=0;r<t.parts.length;r++)o.push(v(t.parts[r]));a[t.id]={id:t.id,refs:1,parts:o}}}}function g(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var n,t,i=document.querySelector("style["+u+'~="'+e.id+'"]');if(i){if(l)return p;i.parentNode.removeChild(i)}if(c){var r=h++;i=s||(s=g()),n=O.bind(null,i,r,!1),t=O.bind(null,i,r,!0)}else i=g(),n=function(e,n){var t=n.css,i=n.media,r=n.sourceMap;i&&e.setAttribute("media",i);d.ssrId&&e.setAttribute(u,n.id);r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,i),t=function(){i.parentNode.removeChild(i)};return n(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;n(e=i)}else t()}}var b,w=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function O(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},function(e,n,i){"use strict";i.r(n);i(3),i(4),i(5),i(6),i(8);i.p=OC.linkTo("files_sharing","js/dist/"),i.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("files",{action:function(){return new Promise(function(e,n){OC.dialogs.filepicker("Link to a file",function(t){OC.Files.getClient().getFileInfo(t).then(function(n,t){e(t.id)},function(){n()})},!1)})},typeString:t("files_sharing","file"),typeIconClass:"icon-files-dark"}),window.OCA.Sharing=OCA.Sharing},function(e,n){_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={attach:function(e){if(OC.Share&&"trashbin"!==e.id&&"files.public"!==e.id){var n=e.fileActions,i=e._createRow;e._createRow=function(e){var t=i.apply(this,arguments),r=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete n.actions.all.Comment,delete n.actions.all.Details,delete n.actions.all.Goto),t.attr("data-share-permissions",r),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var r=e.elementToFile;e.elementToFile=function(e){var n=r.apply(this,arguments);if(n.sharePermissions=e.attr("data-share-permissions")||void 0,n.shareOwner=e.attr("data-share-owner")||void 0,n.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(n.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var t=parseInt(e.attr("data-expiration"));n.shares=[],n.shares.push({expiration:t})}return n};var a=e._getWebdavProperties;e._getWebdavProperties=function(){var e=a.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser(function(e){var n={},t=e.propStat[0].properties,i=t[OC.Files.Client.PROPERTY_PERMISSIONS];i&&i.indexOf("S")>=0&&(n.shareOwner=t[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],n.shareOwnerId=t[OC.Files.Client.PROPERTY_OWNER_ID]);var r=t[OC.Files.Client.PROPERTY_SHARE_TYPES];return r&&(n.shareTypes=_.chain(r).filter(function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]}).map(function(e){return parseInt(e.textContent||e.text,10)}).value()),n}),e.$el.on("fileActionsReady",function(e){var n=e.$files;_.each(n,function(e){var n=$(e),t=n.attr("data-share-types")||"",i=n.attr("data-share-owner");if(t||i){var r=!1,a=!1;_.each(t.split(",")||[],function(e){(e=parseInt(e,10))===OC.Share.SHARE_TYPE_LINK?r=!0:e===OC.Share.SHARE_TYPE_EMAIL?r=!0:e===OC.Share.SHARE_TYPE_USER?a=!0:e===OC.Share.SHARE_TYPE_GROUP?a=!0:e===OC.Share.SHARE_TYPE_REMOTE?a=!0:e===OC.Share.SHARE_TYPE_CIRCLE?a=!0:e===OC.Share.SHARE_TYPE_ROOM&&(a=!0)}),OCA.Sharing.Util._updateFileActionIcon(n,a,r)}})}),e.$el.on("changeDirectory",function(){OCA.Sharing.sharesLoaded=!1}),n.registerAction({name:"Share",displayName:"",altText:t("core","Share"),mime:"all",permissions:OC.PERMISSION_ALL,iconClass:"icon-shared",type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(n,t){var i=parseInt(t.$file.data("share-permissions"),10);(isNaN(i)||i>0)&&e.showDetailsView(n,"shareTabView")},render:function(e,t,i){return 0!=(parseInt(i.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||i.$file.attr("data-share-owner")?n._defaultRenderAction.call(n,e,t,i):null}});var o=new OCA.Sharing.ShareTabView("shareTabView",{order:-20});o.on("sharesChanged",function(n){var t=n.fileInfoModel,i=e.findFileEl(t.get("name")),r=n.hasLinkShares();n.get("shares").forEach(function(e){e.share_type===OC.Share.SHARE_TYPE_EMAIL&&(r=!0)}),OCA.Sharing.Util._updateFileListDataAttributes(e,i,n),OCA.Sharing.Util._updateFileActionIcon(i,n.hasUserShares(),r)||OC.Share.markFileAsShared(i,!1,!1),t.set({shareTypes:n.getShareTypes(),icon:i.attr("data-icon")})}),e.registerTabView(o);var s=new OCA.Sharing.ShareBreadCrumbView({shareTab:o});e.registerBreadCrumbDetailView(s)}},_updateFileListDataAttributes:function(e,n,t){if("files"!==e.id)if(_.pluck(t.get("shares"),"share_with_displayname").length){var i=_.mapObject(t.get("shares"),function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}});n.attr("data-share-recipient-data",JSON.stringify(i))}else n.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,n,t){return!!(n||t||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OC.Share.markFileAsShared(e,!0,t),!0)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util)},function(e,n,i){var r;r=OCA.Files.DetailTabView.extend({id:"shareTabView",className:"tab shareTabView",initialize:function(e,n){OCA.Files.DetailTabView.prototype.initialize.call(this,e,n),OC.Plugins.attach("OCA.Sharing.ShareTabView",this)},template:function(e){return'<div><div class="dialogContainer"></div><div id="collaborationResources"></div></div>'},getLabel:function(){return t("files_sharing","Sharing")},getIcon:function(){return"icon-shared"},render:function(){var e=this,n=this;if(this._dialog&&(this._dialog.model.off(),this._dialog.remove(),this._dialog=null),this.model){this.$el.html(this.template()),_.isUndefined(this.model.get("sharePermissions"))&&this.model.set("sharePermissions",OCA.Sharing.Util.getSharePermissions(this.model.attributes));var t={itemType:this.model.isDirectory()?"folder":"file",itemSource:this.model.get("id"),possiblePermissions:this.model.get("sharePermissions")},r=new OC.Share.ShareConfigModel,a=new OC.Share.ShareItemModel(t,{configModel:r,fileInfoModel:this.model});this._dialog=new OC.Share.ShareDialogView({configModel:r,model:a}),this.$el.find(".dialogContainer").append(this._dialog.$el),this._dialog.render(),this._dialog.model.fetch(),this._dialog.model.on("change",function(){n.trigger("sharesChanged",a)}),Promise.all([i.e(2),i.e(3)]).then(i.bind(null,13)).then(function(n){var t=new n.Vue({el:"#collaborationResources",render:function(e){return e(n.View)},data:{model:e.model.toJSON()}});e.model.on("change",function(){t.data=e.model.toJSON()})})}else this.$el.empty();this.trigger("rendered")}}),OCA.Sharing.ShareTabView=r},function(e,n){
/**
 * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
!function(){"use strict";var e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,_shareTab:void 0,initialize:function(e){this._shareTab=e.shareTab},render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var n=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),n?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(OC.Share.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault();var n=new OCA.Files.FileInfoModel(this._dirInfo),t=this;n.on("change",function(){t.render({dirInfo:t._dirInfo})}),this._shareTab.on("sharesChanged",function(e){for(var n=[],i=e.getSharesWithCurrentItem(),r=0;r<i.length;r++)-1===n.indexOf(i[r].share_type)&&n.push(i[r].share_type);e.hasLinkShares()&&n.push(OC.Share.SHARE_TYPE_LINK),t._dirInfo.shareTypes=n,t.render({dirInfo:t._dirInfo})}),OCA.Files.App.fileList.showDetailsView(n,"shareTabView")}});OCA.Sharing.ShareBreadCrumbView=e}()},function(e,n,t){var i=t(7);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(1).default)("03f26936",i,!0,{})},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,".app-files .shareTabView {\n  min-height: 100px; }\n\n.share-autocomplete-item {\n  display: flex; }\n  .share-autocomplete-item.merged {\n    margin-left: 32px; }\n  .share-autocomplete-item .autocomplete-item-text {\n    margin-left: 10px;\n    margin-right: 10px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 32px;\n    vertical-align: middle;\n    flex-grow: 1; }\n    .share-autocomplete-item .autocomplete-item-text .ui-state-highlight {\n      border: none;\n      margin: 0; }\n  .share-autocomplete-item.with-description .autocomplete-item-text {\n    line-height: 100%; }\n  .share-autocomplete-item .autocomplete-item-details {\n    display: block;\n    line-height: 130%;\n    font-size: 90%;\n    opacity: 0.7; }\n  .share-autocomplete-item .icon {\n    opacity: .7;\n    margin-right: 7px; }\n\n.shareTabView .oneline {\n  white-space: nowrap;\n  position: relative; }\n\n.shareTabView .shareWithLoading {\n  padding-left: 10px;\n  right: 35px;\n  top: 3px; }\n\n.shareTabView .shareWithConfirm {\n  position: absolute;\n  right: 2px;\n  top: 6px;\n  padding: 14px;\n  opacity: 0.5; }\n\n.shareTabView .shareWithField:focus ~ .shareWithConfirm {\n  opacity: 1; }\n\n.shareTabView .linkMore {\n  position: absolute;\n  right: -7px;\n  top: -4px;\n  padding: 14px; }\n\n.shareTabView .popovermenu {\n  /* Border above last entry '+ Add another share' to separate it from current link settings */ }\n  .shareTabView .popovermenu .linkPassMenu .share-pass-submit {\n    width: auto !important; }\n  .shareTabView .popovermenu .linkPassMenu .icon-loading-small {\n    background-color: var(--color-main-background);\n    position: absolute;\n    right: 8px;\n    margin: 3px;\n    padding: 10px;\n    width: 32px;\n    height: 32px;\n    z-index: 10; }\n  .shareTabView .popovermenu .datepicker {\n    margin-left: 35px; }\n  .shareTabView .popovermenu .share-add input.share-note-delete {\n    border: none;\n    background-color: transparent;\n    width: 44px !important;\n    padding: 0;\n    flex: 0 0 44px;\n    margin-left: auto; }\n    .shareTabView .popovermenu .share-add input.share-note-delete.hidden {\n      display: none; }\n  .shareTabView .popovermenu .share-note-form span.icon-note {\n    position: relative; }\n  .shareTabView .popovermenu .share-note-form textarea.share-note {\n    margin: 0;\n    width: 200px;\n    min-height: 70px;\n    resize: none; }\n    .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit {\n      position: absolute;\n      width: 44px !important;\n      height: 44px;\n      bottom: 0px;\n      right: 10px;\n      margin: 0;\n      background-color: transparent;\n      border: none;\n      opacity: .7; }\n      .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:hover, .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:focus, .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:active {\n        opacity: 1; }\n  .shareTabView .popovermenu .share-note-form.share-note-link {\n    margin-bottom: 10px; }\n  .shareTabView .popovermenu .new-share {\n    border-top: 1px solid var(--color-border); }\n\n.shareTabView .linkPass .icon-loading-small {\n  margin-right: 0px; }\n\n.shareTabView .icon {\n  background-size: 16px 16px; }\n\n.shareTabView .shareWithList .icon-loading-small:not(.hidden) + span,\n.shareTabView .linkShareView .icon-loading-small:not(.hidden) + input + label:before {\n  /* Hide if loader is visible */\n  display: none !important; }\n\n.shareTabView input[type='checkbox'] {\n  margin: 0 3px 0 8px;\n  vertical-align: middle; }\n\n.shareTabView input[type='text'].shareWithField, .shareTabView input[type='text'].emailField {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 32px;\n  text-overflow: ellipsis; }\n\n.shareTabView input[type='text'].linkText .shareTabView input[type='password'].linkPassText, .shareTabView input[type='password'].passwordField {\n  width: 180px !important; }\n\n.shareTabView form {\n  font-size: 100%;\n  margin-left: 0;\n  margin-right: 0; }\n\n.shareTabView .share-note {\n  border-radius: var(--border-radius);\n  margin-bottom: 10px;\n  margin-left: 37px; }\n\n.shareWithList {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column; }\n  .shareWithList > li {\n    height: 44px;\n    white-space: normal;\n    display: inline-flex;\n    align-items: center;\n    position: relative; }\n    .shareWithList > li .avatar {\n      width: 32px;\n      height: 32px;\n      background-color: var(--color-primary); }\n  .shareWithList .unshare img {\n    vertical-align: text-bottom;\n    /* properly align icons */ }\n  .shareWithList .sharingOptionsGroup {\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    white-space: nowrap; }\n    .shareWithList .sharingOptionsGroup > .icon:not(.hidden),\n    .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden) {\n      padding: 14px;\n      height: 44px;\n      width: 44px;\n      opacity: .5;\n      display: block;\n      cursor: pointer; }\n      .shareWithList .sharingOptionsGroup > .icon:not(.hidden):hover, .shareWithList .sharingOptionsGroup > .icon:not(.hidden):focus, .shareWithList .sharingOptionsGroup > .icon:not(.hidden):active,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):hover,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):focus,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):active {\n        opacity: .7; }\n    .shareWithList .sharingOptionsGroup > .share-menu {\n      position: relative;\n      display: block; }\n  .shareWithList .username {\n    padding: 0 8px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n.ui-autocomplete {\n  /* limit dropdown height to 6 1/2 entries */\n  max-height: calc(36px * 6.5);\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1550 !important; }\n\n.notCreatable {\n  padding-left: 12px;\n  padding-top: 12px;\n  color: var(--color-text-lighter); }\n\n.contactsmenu-popover {\n  left: -6px;\n  right: auto;\n  padding: 3px 6px;\n  top: 100%;\n  margin-top: 0; }\n  .contactsmenu-popover li.hidden {\n    display: none !important; }\n  .contactsmenu-popover:after {\n    left: 8px;\n    right: auto; }\n\n.reshare,\n#link label,\n#expiration label {\n  display: inline-flex;\n  align-items: center; }\n  .reshare .avatar,\n  #link label .avatar,\n  #expiration label .avatar {\n    margin-right: 5px; }\n\n.resharerInfoView.subView {\n  position: relative; }\n",""])},function(e,n,t){var i=t(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(1).default)("27ced9ca",i,!0,{})},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/**\n * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n *\n */\ndiv.crumb span.icon-shared,\ndiv.crumb span.icon-public {\n  display: inline-block;\n  cursor: pointer;\n  opacity: 0.2;\n  margin-right: 6px; }\n\ndiv.crumb span.icon-shared.shared,\ndiv.crumb span.icon-public.shared {\n  opacity: 0.7; }\n",""])}]);
//# sourceMappingURL=additionalScripts.js.map