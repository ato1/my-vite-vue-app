<template>
  <p>
    「Powered by
    <a href="https://webify.cloudbase.net/" target="_blank">CloudBase Webify</a
    >」
  </p>
  <div class="desc">
    <div class="text">请访问微信小程序，搜索“豆豆笑话”</div>
    <div class="ver">
      <a href="https://beian.miit.gov.cn">京ICP备19056872号-1</a> Copyright
      &copy2019 豆豆笑话 All Rights Reserved
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft Yahei",
    FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", sans-serif;
  color: #4a4a4a;
  word-wrap: break-word;
  -webkit-text-size-adjust: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template,
script {
  display: none;
}
a,
img,
* {
  -webkit-touch-callout: none;
}
a {
  display: inline-block;
  color: #161418;
  background-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
ol,
ul {
  list-style: none;
}
ins,
a {
  text-decoration: none;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
pre {
  white-space: pre-wrap;
}
q {
  quotes: "\201C""\201D""\2018""\2019";
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5rem;
}
sub {
  bottom: -0.25rem;
}
img {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: middle;
  border: 0;
  max-width: 100%;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 0;
}
code,
kbd,
pre,
samp {
  font-family: Monaco, Menlo, Consolas, "Courier New", "FontAwesome", monospace;
  font-size: 1rem;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35rem 0.625rem 0.75rem;
}
legend {
  border: 0;
  padding: 0;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
input {
  line-height: normal;
  outline: none;
  -webkit-appearance: none;
}
button,
select {
  text-transform: none;
}
a,
img,
button,
input,
textarea,
span {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
a {
  color: coral;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  /*-webkit-appearance: none;*/
}
textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
  padding: 0.5rem;
  -webkit-appearance: none;
}
.desc {
  text-align: center;
  font-size: 40px;
}
.desc .text {
  margin-top: 30px;
  height: 280px;
  line-height: 280px;
  color: #f00;
}
.desc .ver {
  font-size: 24px;
  margin-top: 30px;
  height: 80px;
  color: #ccc;
}
</style>
