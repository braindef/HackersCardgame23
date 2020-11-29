if (self.CavalryLogger) { CavalryLogger.start_js(["ne+eC"]); }

__d("CometUFICommentImageAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d=[b],e={kind:"Variable",name:"scale",variableName:"scale"},f={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFICommentImageAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,b],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{alias:"blurred_image",args:[{kind:"Literal",name:"blur",value:30}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[c],storageKey:"image(blur:30)"},{kind:"InlineFragment",selections:d,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:d,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:d,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:d,type:"MontageVideo",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ObjectionableContentInfo",kind:"LinkedField",name:"objectionable_content_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"categories",storageKey:null},{alias:null,args:null,concreteType:"ObjectionableContentWarningScreenText",kind:"LinkedField",name:"strings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"blur_subtitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"blur_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cover_media_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"learn_more_desc",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"learn_more_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_media_desc",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uncover_media_link",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:"massive_image",args:[e],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[f,g],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:210},e,{kind:"Literal",name:"width",value:260}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[c,f,g],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentImageAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentImageAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentPhotoStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentImageAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"},b={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentImageAttachment_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ObjectionableContentInfo",kind:"LinkedField",name:"objectionable_content_info",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentAttachmentContentFilterContainer_objectionableContentInfo"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:"massive_image",args:[a],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[b,c],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:210},a,{kind:"Literal",name:"width",value:260}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},b,c],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFICommentAttachmentContentFilterContainer_storyAttachment"}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentAttachmentContainer.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={absoluteFill:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},aspectRatioMaintainer:{maxWidth:"d2edcug0"},border:{borderTopColor:"t51s4qs2",borderEndColor:"bv6zxntz",borderBottomColor:"qc3rp1z7",borderStartColor:"rj06g9kl",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"frvqaej8",borderEndWidth:"ed0hlay0",borderBottomWidth:"afxsp9o4",borderStartWidth:"jcgfde61",boxSizing:"rq0escxv",pointerEvents:"hzruof5a"},root:{borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",display:"q9uorilb",marginBottom:"tvmbv18p",maxWidth:"d2edcug0",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",verticalAlign:"sf5mxxl7"}};function a(a){var c=a.children,d=a.height,e=a.width;a=a.xstyle;return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root,a),children:[e!=null&&d!=null?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.absoluteFill),children:c}),h.jsx("div",{className:(g||(g=b("stylex")))(i.aspectRatioMaintainer),style:{paddingBottom:(e?d/e*100:0)+"%",width:e}})]}):c,h.jsx("div",{className:g(i.border,i.absoluteFill)})]})}}),null);
__d("CometUFICommentAttachmentContentFilterBootloadPlaceholder.react",["BaseGlimmer.react","CometUFICommentAttachmentContainer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.height,d=a.width;a=a.xstyle;return g.jsxs(g.Fragment,{children:[g.jsx(b("CometUFICommentAttachmentContainer.react"),{height:c,width:d,xstyle:a,children:g.jsx(b("BaseGlimmer.react"),{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",index:0})}),g.jsx(b("BaseGlimmer.react"),{className:"hcukyx3x tvmbv18p cxmmr5t8 kvgmc6g5 tv7at329 kzx2olss aot14ch1 p86d2i9g beltcj47",index:1})]})}}),null);
__d("CometUFICommentImageAttachment.react",["BaseLink.react","CometImage.react","CometPlaceholder.react","CometRelay","CometUFICommentAttachmentContainer.react","CometUFICommentAttachmentContentFilterBootloadPlaceholder.react","JSResource","React","UFI2ScaleRect","gkx","lazyLoadComponent","CometUFICommentImageAttachment_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("lazyLoadComponent")(b("JSResource")("CometUFICommentAttachmentContentFilterContainer.react").__setRef("CometUFICommentImageAttachment.react"));function a(a){var c,d,e,f,j,k=a.attachment$key,l=a.storyRenderLocation;a=a.xstyle;k=b("CometRelay").useFragment(g!==void 0?g:g=b("CometUFICommentImageAttachment_attachment.graphql"),k);c=(c=k.media)==null?void 0:(c=c.image)==null?void 0:c.uri;d=(d=k.media)==null?void 0:(d=d.image)==null?void 0:d.width;e=(e=k.media)==null?void 0:(e=e.image)==null?void 0:e.height;var m=k.url;f=(f=(f=k.media)==null?void 0:f.accessibility_caption)!=null?f:void 0;j=(j=k.media)==null?void 0:j.objectionable_content_info;if(k&&c!==""&&c!=null&&m!==""&&m!=null&&d!=null&&e!=null){var n,o,p;e=b("UFI2ScaleRect").scaleToContain({gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero:!0,maxHeight:210,maxWidth:260,srcHeight:e,srcWidth:d});d=e.height;e=e.width;n=(n=k.media)==null?void 0:(n=n.massive_image)==null?void 0:n.height;o=(o=k.media)==null?void 0:(o=o.image)==null?void 0:o.uri;p=(p=k.media)==null?void 0:(p=p.massive_image)==null?void 0:p.width;n=n!=null&&o!=null&&p!=null?{origHeight:n,origSrc:o,origWidth:p}:null;o=h.jsx(b("BaseLink.react"),{href:m,passthroughProps:n,rel:b("gkx")("708253")?void 0:"theater",children:h.jsx(b("CometImage.react"),{alt:f,height:d,src:c,width:e})});return j?h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("CometUFICommentAttachmentContentFilterBootloadPlaceholder.react"),{height:d,width:e,xstyle:a}),children:h.jsx(i,{height:d,objectionableContentInfo$key:j,responsibleContentLocation:l,storyAttachment$key:k,type:"photo",width:e,xstyle:a,children:o})}):h.jsx(b("CometUFICommentAttachmentContainer.react"),{height:d,width:e,xstyle:a,children:o})}return null}}),null);
__d("CometUFICommentImageAttachmentStyle.react",["CometRelay","CometUFICommentImageAttachment.react","React","recoverableViolation","stylex","CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={imageAttachmentRoot:{marginTop:"kvgmc6g5"}};function a(a){var c=a.commentId_FOR_DEBUGGING_ONLY,d=a.storyRenderLocation;a=a.styleTypeRenderer;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql"),a);var e=a.attachment;h.useEffect(function(){if(e==null){var a;b("recoverableViolation")("CometUFICommentImageAttachmentStyle: Tried to render an image, but attachment information is null for comment with ID "+((a=c)!=null?a:"UNKNOWN"),"ufi2")}},[e,c]);return e==null?null:h.jsx(b("CometUFICommentImageAttachment.react"),{attachment$key:e,storyRenderLocation:d,xstyle:i.imageAttachmentRoot})}}),null);