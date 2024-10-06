(self.webpackChunkpes_fe=self.webpackChunkpes_fe||[]).push([[102],{6102:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var o=n(1594),a=(n(8940),n(8994)),c=n.n(a),r=(n(8716),n(1751),n(4848));const i=e=>{let{code:t,onChange:n,readOnly:a}=e;const i=(0,o.useRef)(null);return(0,o.useEffect)((()=>{if(i.current){const e=c().edit(i.current);return e.session.setMode("ace/mode/c_cpp"),e.setTheme("ace/theme/monokai"),e.setValue(t),e.setReadOnly(a),e.setFontSize(16),e.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4,cursorWidth:2}),e.on("change",(()=>{const t=e.getValue();n(t)})),()=>{e.destroy()}}}),[t,n,a]),(0,r.jsx)("div",{ref:i,style:{width:"90%",height:"100%"}})}},1237:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n(1601),a=n.n(o),c=n(6314),r=n.n(c)()(a());r.push([e.id,'@charset "UTF-8";\n.App {\n  text-align: center;\n  background-color: #e9e9eb;\n}\n\n:root {\n  --Font1: "Pretendard-Regular";\n}\n\n@font-face {\n  font-family: "Pretendard-Regular";\n  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n/* -----공통요소----- */\n* {\n  list-style-type: none;\n  text-decoration: none !important;\n  margin: 0px;\n  padding: 0px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/* question페이지에서 fail/pass에 따른 배경화면 변화 */\n.failPage {\n  background-color: #f8e7e7;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.successPage {\n  background-color: #ebebfc;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}\n\n.nonePage {\n  background-color: #e9e9eb;\n  padding: 10px 0 140px;\n  margin-bottom: -300px;\n}',""]);const i=r},8940:(e,t,n)=>{"use strict";var o=n(5072),a=n.n(o),c=n(7825),r=n.n(c),i=n(7659),s=n.n(i),l=n(5056),f=n.n(l),g=n(540),m=n.n(g),u=n(1113),d=n.n(u),p=n(1237),h={};h.styleTagTransform=d(),h.setAttributes=f(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=m(),a()(p.A,h),p.A&&p.A.locals&&p.A.locals},8716:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},c.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};o.inherits(c,a),c.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},c.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},c.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=c})),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./doc_comment_highlight_rules").DocCommentHighlightRules,c=e("./text_highlight_rules").TextHighlightRules,r=t.cFunctions="hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",i=function(e){var t=this.$keywords=this.createKeywordMapper(Object.assign({"keyword.control":"break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using","storage.type":"asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t","storage.modifier":"const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local","keyword.operator":"and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace","variable.language":"this","constant.language":"NULL|true|false|TRUE|FALSE|nullptr","support.function.C99.c":r},e),"identifier"),n=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,o="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},a.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+n+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:n},{token:"constant.language.escape",regex:o},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:t,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(a,"doc-",[a.getEndRule("start")]),this.normalizeRules()};o.inherits(i,c),t.c_cppHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,a=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var a=n[1].length,c=e.findMatchingBracket({row:t,column:a});if(!c||c.row==t)return 0;var r=this.$getIndent(e.getLine(c.row));e.replace(new o(t,0,t,a-1),r)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(a.prototype),t.MatchingBraceOutdent=a})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),a=e("../../range").Range,c=e("./fold_mode").FoldMode,r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(r,c),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var a=this._getFoldWidgetBase(e,t,n);return!a&&this.startRegionRe.test(o)?"start":a},this.getFoldWidgetRange=function(e,t,n,o){var a,c=e.getLine(n);if(this.startRegionRe.test(c))return this.getCommentRegionBlock(e,c,n);if(a=c.match(this.foldingStartMarker)){var r=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,r);var i=e.getCommentFoldRange(n,r+a[0].length,1);return i&&!i.isMultiLine()&&(o?i=this.getSectionRange(e,n):"all"!=t&&(i=null)),i}return"markbegin"!==t&&(a=c.match(this.foldingStopMarker))?(r=a.index+a[0].length,a[1]?this.closingBracketBlock(e,a[1],n,r):e.getCommentFoldRange(n,r,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),c=t,r=n.length,i=t+=1,s=e.getLength();++t<s;){var l=(n=e.getLine(t)).search(/\S/);if(-1!==l){if(o>l)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=c)break;if(f.isMultiLine())t=f.end.row;else if(o==l)break}i=t}}return new a(c,r,i,e.getLine(i).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),c=e.getLength(),r=n,i=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<c;){t=e.getLine(n);var l=i.exec(t);if(l&&(l[1]?s--:s++,!s))break}if(n>r)return new a(r,o,n,t.length)}}.call(r.prototype)})),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text").Mode,c=e("./c_cpp_highlight_rules").c_cppHighlightRules,r=e("./matching_brace_outdent").MatchingBraceOutdent,i=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=c,this.$outdent=new r,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new i};o.inherits(s,a),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t),a=this.getTokenizer().getLineTokens(t,e),c=a.tokens,r=a.state;if(c.length&&"comment"==c[c.length-1].type)return o;if("start"==e)(i=t.match(/^.*[\{\(\[]\s*$/))&&(o+=n);else if("doc-start"==e){if("start"==r)return"";var i;(i=t.match(/^\s*(\/?)\*/))&&(i[1]&&(o+=" "),o+="* ")}return o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}.call(s.prototype),t.Mode=s})),ace.require(["ace/mode/c_cpp"],(function(t){e&&(e.exports=t)}))},1751:(e,t,n)=>{e=n.nmd(e),ace.define("ace/theme/monokai-css",["require","exports","module"],(function(e,t,n){n.exports=".ace-monokai .ace_gutter {\n  background: #2F3129;\n  color: #8F908A\n}\n\n.ace-monokai .ace_print-margin {\n  width: 1px;\n  background: #555651\n}\n\n.ace-monokai {\n  background-color: #272822;\n  color: #F8F8F2\n}\n\n.ace-monokai .ace_cursor {\n  color: #F8F8F0\n}\n\n.ace-monokai .ace_marker-layer .ace_selection {\n  background: #49483E\n}\n\n.ace-monokai.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #272822;\n}\n\n.ace-monokai .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-monokai .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_marker-layer .ace_active-line {\n  background: #202020\n}\n\n.ace-monokai .ace_gutter-active-line {\n  background-color: #272727\n}\n\n.ace-monokai .ace_marker-layer .ace_selected-word {\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_invisible {\n  color: #52524d\n}\n\n.ace-monokai .ace_entity.ace_name.ace_tag,\n.ace-monokai .ace_keyword,\n.ace-monokai .ace_meta.ace_tag,\n.ace-monokai .ace_storage {\n  color: #F92672\n}\n\n.ace-monokai .ace_punctuation,\n.ace-monokai .ace_punctuation.ace_tag {\n  color: #fff\n}\n\n.ace-monokai .ace_constant.ace_character,\n.ace-monokai .ace_constant.ace_language,\n.ace-monokai .ace_constant.ace_numeric,\n.ace-monokai .ace_constant.ace_other {\n  color: #AE81FF\n}\n\n.ace-monokai .ace_invalid {\n  color: #F8F8F0;\n  background-color: #F92672\n}\n\n.ace-monokai .ace_invalid.ace_deprecated {\n  color: #F8F8F0;\n  background-color: #AE81FF\n}\n\n.ace-monokai .ace_support.ace_constant,\n.ace-monokai .ace_support.ace_function {\n  color: #66D9EF\n}\n\n.ace-monokai .ace_fold {\n  background-color: #A6E22E;\n  border-color: #F8F8F2\n}\n\n.ace-monokai .ace_storage.ace_type,\n.ace-monokai .ace_support.ace_class,\n.ace-monokai .ace_support.ace_type {\n  font-style: italic;\n  color: #66D9EF\n}\n\n.ace-monokai .ace_entity.ace_name.ace_function,\n.ace-monokai .ace_entity.ace_other,\n.ace-monokai .ace_entity.ace_other.ace_attribute-name,\n.ace-monokai .ace_variable {\n  color: #A6E22E\n}\n\n.ace-monokai .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F\n}\n\n.ace-monokai .ace_string {\n  color: #E6DB74\n}\n\n.ace-monokai .ace_comment {\n  color: #75715E\n}\n\n.ace-monokai .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-monokai .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n"})),ace.define("ace/theme/monokai",["require","exports","module","ace/theme/monokai-css","ace/lib/dom"],(function(e,t,n){t.isDark=!0,t.cssClass="ace-monokai",t.cssText=e("./monokai-css"),e("../lib/dom").importCssString(t.cssText,t.cssClass,!1)})),ace.require(["ace/theme/monokai"],(function(t){e&&(e.exports=t)}))}}]);