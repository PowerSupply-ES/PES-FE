(self["webpackChunkpes_fe"] = self["webpackChunkpes_fe"] || []).push([["src_components_problem_CodeEditor_tsx"],{

/***/ "./src/components/problem/CodeEditor.tsx":
/*!***********************************************!*\
  !*** ./src/components/problem/CodeEditor.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/css/App.css */ "./src/styles/css/App.css");
/* harmony import */ var libs_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/ace */ "./src/libs/ace.js");
/* harmony import */ var libs_ace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libs_ace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var libs_mode_c_cpp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/mode-c_cpp */ "./src/libs/mode-c_cpp.js");
/* harmony import */ var libs_mode_c_cpp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(libs_mode_c_cpp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var libs_theme_monokai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/theme-monokai */ "./src/libs/theme-monokai.js");
/* harmony import */ var libs_theme_monokai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(libs_theme_monokai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 // 커스텀 빌드된 ace.js 사용
 // C/C++ 언어 모드 import
 // 다크 모드 테마 import
// import { ace as ace, mode_c_cpp, theme_monokai } from "libs"

const CodeEditor = _ref => {
  let {
    code,
    onChange,
    readOnly
  } = _ref;
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // 커스텀빌드 라이브러리 사용위한 HOOK

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (editorRef.current) {
      const editor = libs_ace__WEBPACK_IMPORTED_MODULE_2___default().edit(editorRef.current); // 'ace' 글로벌 객체로 에디터 초기화
      editor.session.setMode("ace/mode/c_cpp"); // C/C++ 모드 설정
      editor.setTheme("ace/theme/monokai"); // 모노카이 테마 설정
      editor.setValue(code); // 초기 코드 설정
      editor.setReadOnly(readOnly); // 읽기 전용 설정
      editor.setFontSize(16); // 폰트 크기 설정

      // 에디터 옵션 설정
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
        cursorWidth: 2
      });

      // 코드 변경 이벤트 처리
      editor.on("change", () => {
        const currentCode = editor.getValue();
        onChange(currentCode);
      });

      // 컴포넌트가 언마운트될 때 에디터를 파괴
      return () => {
        editor.destroy();
      };
    }
  }, [code, onChange, readOnly]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ref: editorRef,
    style: {
      width: "90%",
      height: "100%"
    } // 에디터 크기
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeEditor);

/***/ }),

/***/ "./src/libs/mode-c_cpp.js":
/*!********************************!*\
  !*** ./src/libs/mode-c_cpp.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (e, t, n) {
  "use strict";

  var r = e("../lib/oop"),
    i = e("./text_highlight_rules").TextHighlightRules,
    s = function () {
      this.$rules = {
        start: [{
          token: "comment.doc.tag",
          regex: "@\\w+(?=\\s|$)"
        }, s.getTagRule(), {
          defaultToken: "comment.doc.body",
          caseInsensitive: !0
        }]
      };
    };
  r.inherits(s, i), s.getTagRule = function (e) {
    return {
      token: "comment.doc.tag.storage.type",
      regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
  }, s.getStartRule = function (e) {
    return {
      token: "comment.doc",
      regex: /\/\*\*(?!\/)/,
      next: e
    };
  }, s.getEndRule = function (e) {
    return {
      token: "comment.doc",
      regex: "\\*\\/",
      next: e
    };
  }, t.DocCommentHighlightRules = s;
}), ace.define("ace/mode/c_cpp_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function (e, t, n) {
  "use strict";

  var r = e("../lib/oop"),
    i = e("./doc_comment_highlight_rules").DocCommentHighlightRules,
    s = e("./text_highlight_rules").TextHighlightRules,
    o = t.cFunctions = "hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",
    u = function (e) {
      var t = "break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",
        n = "asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",
        r = "const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",
        s = "and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",
        u = "NULL|true|false|TRUE|FALSE|nullptr",
        a = this.$keywords = this.createKeywordMapper(Object.assign({
          "keyword.control": t,
          "storage.type": n,
          "storage.modifier": r,
          "keyword.operator": s,
          "variable.language": "this",
          "constant.language": u,
          "support.function.C99.c": o
        }, e), "identifier"),
        f = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b",
        l = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,
        c = "%" + /(\d+\$)?/.source + /[#0\- +']*/.source + /[,;:_]?/.source + /((-?\d+)|\*(-?\d+\$)?)?/.source + /(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source + /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source + /(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;
      this.$rules = {
        start: [{
          token: "comment",
          regex: "//$",
          next: "start"
        }, {
          token: "comment",
          regex: "//",
          next: "singleLineComment"
        }, i.getStartRule("doc-start"), {
          token: "comment",
          regex: "\\/\\*",
          next: "comment"
        }, {
          token: "string",
          regex: "'(?:" + l + "|.)?'"
        }, {
          token: "string.start",
          regex: '"',
          stateName: "qqstring",
          next: [{
            token: "string",
            regex: /\\\s*$/,
            next: "qqstring"
          }, {
            token: "constant.language.escape",
            regex: l
          }, {
            token: "constant.language.escape",
            regex: c
          }, {
            token: "string.end",
            regex: '"|$',
            next: "start"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string.start",
          regex: 'R"\\(',
          stateName: "rawString",
          next: [{
            token: "string.end",
            regex: '\\)"',
            next: "start"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "constant.numeric",
          regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
        }, {
          token: "constant.numeric",
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
        }, {
          token: "keyword",
          regex: "#\\s*(?:include|import|pragma|line|define|undef)\\b",
          next: "directive"
        }, {
          token: "keyword",
          regex: "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"
        }, {
          token: a,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }, {
          token: "keyword.operator",
          regex: /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
        }, {
          token: "punctuation.operator",
          regex: "\\?|\\:|\\,|\\;|\\."
        }, {
          token: "paren.lparen",
          regex: "[[({]"
        }, {
          token: "paren.rparen",
          regex: "[\\])}]"
        }, {
          token: "text",
          regex: "\\s+"
        }],
        comment: [{
          token: "comment",
          regex: "\\*\\/",
          next: "start"
        }, {
          defaultToken: "comment"
        }],
        singleLineComment: [{
          token: "comment",
          regex: /\\$/,
          next: "singleLineComment"
        }, {
          token: "comment",
          regex: /$/,
          next: "start"
        }, {
          defaultToken: "comment"
        }],
        directive: [{
          token: "constant.other.multiline",
          regex: /\\/
        }, {
          token: "constant.other.multiline",
          regex: /.*\\/
        }, {
          token: "constant.other",
          regex: "\\s*<.+?>",
          next: "start"
        }, {
          token: "constant.other",
          regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
          next: "start"
        }, {
          token: "constant.other",
          regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
          next: "start"
        }, {
          token: "constant.other",
          regex: /[^\\\/]+/,
          next: "start"
        }]
      }, this.embedRules(i, "doc-", [i.getEndRule("start")]), this.normalizeRules();
    };
  r.inherits(u, s), t.c_cppHighlightRules = u;
}), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  var r = e("../range").Range,
    i = function () {};
  (function () {
    this.checkOutdent = function (e, t) {
      return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1;
    }, this.autoOutdent = function (e, t) {
      var n = e.getLine(t),
        i = n.match(/^(\s*\})/);
      if (!i) return 0;
      var s = i[1].length,
        o = e.findMatchingBracket({
          row: t,
          column: s
        });
      if (!o || o.row == t) return 0;
      var u = this.$getIndent(e.getLine(o.row));
      e.replace(new r(t, 0, t, s - 1), u);
    }, this.$getIndent = function (e) {
      return e.match(/^\s*/)[0];
    };
  }).call(i.prototype), t.MatchingBraceOutdent = i;
}), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (e, t, n) {
  "use strict";

  var r = e("../../lib/oop"),
    i = e("../../range").Range,
    s = e("./fold_mode").FoldMode,
    o = t.FoldMode = function (e) {
      e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)));
    };
  r.inherits(o, s), function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function (e, t, n) {
      var r = e.getLine(n);
      if (this.singleLineBlockCommentRe.test(r) && !this.startRegionRe.test(r) && !this.tripleStarBlockCommentRe.test(r)) return "";
      var i = this._getFoldWidgetBase(e, t, n);
      return !i && this.startRegionRe.test(r) ? "start" : i;
    }, this.getFoldWidgetRange = function (e, t, n, r) {
      var i = e.getLine(n);
      if (this.startRegionRe.test(i)) return this.getCommentRegionBlock(e, i, n);
      var s = i.match(this.foldingStartMarker);
      if (s) {
        var o = s.index;
        if (s[1]) return this.openingBracketBlock(e, s[1], n, o);
        var u = e.getCommentFoldRange(n, o + s[0].length, 1);
        return u && !u.isMultiLine() && (r ? u = this.getSectionRange(e, n) : t != "all" && (u = null)), u;
      }
      if (t === "markbegin") return;
      var s = i.match(this.foldingStopMarker);
      if (s) {
        var o = s.index + s[0].length;
        return s[1] ? this.closingBracketBlock(e, s[1], n, o) : e.getCommentFoldRange(n, o, -1);
      }
    }, this.getSectionRange = function (e, t) {
      var n = e.getLine(t),
        r = n.search(/\S/),
        s = t,
        o = n.length;
      t += 1;
      var u = t,
        a = e.getLength();
      while (++t < a) {
        n = e.getLine(t);
        var f = n.search(/\S/);
        if (f === -1) continue;
        if (r > f) break;
        var l = this.getFoldWidgetRange(e, "all", t);
        if (l) {
          if (l.start.row <= s) break;
          if (l.isMultiLine()) t = l.end.row;else if (r == f) break;
        }
        u = t;
      }
      return new i(s, o, u, e.getLine(u).length);
    }, this.getCommentRegionBlock = function (e, t, n) {
      var r = t.search(/\s*$/),
        s = e.getLength(),
        o = n,
        u = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
        a = 1;
      while (++n < s) {
        t = e.getLine(n);
        var f = u.exec(t);
        if (!f) continue;
        f[1] ? a-- : a++;
        if (!a) break;
      }
      var l = n;
      if (l > o) return new i(o, r, l, t.length);
    };
  }.call(o.prototype);
}), ace.define("ace/mode/c_cpp", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/c_cpp_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/folding/cstyle"], function (e, t, n) {
  "use strict";

  var r = e("../lib/oop"),
    i = e("./text").Mode,
    s = e("./c_cpp_highlight_rules").c_cppHighlightRules,
    o = e("./matching_brace_outdent").MatchingBraceOutdent,
    u = e("./folding/cstyle").FoldMode,
    a = function () {
      this.HighlightRules = s, this.$outdent = new o(), this.$behaviour = this.$defaultBehaviour, this.foldingRules = new u();
    };
  r.inherits(a, i), function () {
    this.lineCommentStart = "//", this.blockComment = {
      start: "/*",
      end: "*/"
    }, this.getNextLineIndent = function (e, t, n) {
      var r = this.$getIndent(t),
        i = this.getTokenizer().getLineTokens(t, e),
        s = i.tokens,
        o = i.state;
      if (s.length && s[s.length - 1].type == "comment") return r;
      if (e == "start") {
        var u = t.match(/^.*[\{\(\[]\s*$/);
        u && (r += n);
      } else if (e == "doc-start") {
        if (o == "start") return "";
        var u = t.match(/^\s*(\/?)\*/);
        u && (u[1] && (r += " "), r += "* ");
      }
      return r;
    }, this.checkOutdent = function (e, t, n) {
      return this.$outdent.checkOutdent(t, n);
    }, this.autoOutdent = function (e, t, n) {
      this.$outdent.autoOutdent(t, n);
    }, this.$id = "ace/mode/c_cpp", this.snippetFileId = "ace/snippets/c_cpp";
  }.call(a.prototype), t.Mode = a;
});
(function () {
  ace.require(["ace/mode/c_cpp"], function (m) {
    if ( true && module) {
      module.exports = m;
    }
  });
})();

/***/ }),

/***/ "./src/libs/theme-monokai.js":
/*!***********************************!*\
  !*** ./src/libs/theme-monokai.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
ace.define("ace/theme/monokai-css", ["require", "exports", "module"], function (e, t, n) {
  n.exports = ".ace-monokai .ace_gutter {\n  background: #2F3129;\n  color: #8F908A\n}\n\n.ace-monokai .ace_print-margin {\n  width: 1px;\n  background: #555651\n}\n\n.ace-monokai {\n  background-color: #272822;\n  color: #F8F8F2\n}\n\n.ace-monokai .ace_cursor {\n  color: #F8F8F0\n}\n\n.ace-monokai .ace_marker-layer .ace_selection {\n  background: #49483E\n}\n\n.ace-monokai.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #272822;\n}\n\n.ace-monokai .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-monokai .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_marker-layer .ace_active-line {\n  background: #202020\n}\n\n.ace-monokai .ace_gutter-active-line {\n  background-color: #272727\n}\n\n.ace-monokai .ace_marker-layer .ace_selected-word {\n  border: 1px solid #49483E\n}\n\n.ace-monokai .ace_invisible {\n  color: #52524d\n}\n\n.ace-monokai .ace_entity.ace_name.ace_tag,\n.ace-monokai .ace_keyword,\n.ace-monokai .ace_meta.ace_tag,\n.ace-monokai .ace_storage {\n  color: #F92672\n}\n\n.ace-monokai .ace_punctuation,\n.ace-monokai .ace_punctuation.ace_tag {\n  color: #fff\n}\n\n.ace-monokai .ace_constant.ace_character,\n.ace-monokai .ace_constant.ace_language,\n.ace-monokai .ace_constant.ace_numeric,\n.ace-monokai .ace_constant.ace_other {\n  color: #AE81FF\n}\n\n.ace-monokai .ace_invalid {\n  color: #F8F8F0;\n  background-color: #F92672\n}\n\n.ace-monokai .ace_invalid.ace_deprecated {\n  color: #F8F8F0;\n  background-color: #AE81FF\n}\n\n.ace-monokai .ace_support.ace_constant,\n.ace-monokai .ace_support.ace_function {\n  color: #66D9EF\n}\n\n.ace-monokai .ace_fold {\n  background-color: #A6E22E;\n  border-color: #F8F8F2\n}\n\n.ace-monokai .ace_storage.ace_type,\n.ace-monokai .ace_support.ace_class,\n.ace-monokai .ace_support.ace_type {\n  font-style: italic;\n  color: #66D9EF\n}\n\n.ace-monokai .ace_entity.ace_name.ace_function,\n.ace-monokai .ace_entity.ace_other,\n.ace-monokai .ace_entity.ace_other.ace_attribute-name,\n.ace-monokai .ace_variable {\n  color: #A6E22E\n}\n\n.ace-monokai .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F\n}\n\n.ace-monokai .ace_string {\n  color: #E6DB74\n}\n\n.ace-monokai .ace_comment {\n  color: #75715E\n}\n\n.ace-monokai .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-monokai .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
}), ace.define("ace/theme/monokai", ["require", "exports", "module", "ace/theme/monokai-css", "ace/lib/dom"], function (e, t, n) {
  t.isDark = !0, t.cssClass = "ace-monokai", t.cssText = e("./monokai-css");
  var r = e("../lib/dom");
  r.importCssString(t.cssText, t.cssClass, !1);
});
(function () {
  ace.require(["ace/theme/monokai"], function (m) {
    if ( true && module) {
      module.exports = m;
    }
  });
})();

/***/ }),

/***/ "./src/styles/css/App.css":
/*!********************************!*\
  !*** ./src/styles/css/App.css ***!
  \********************************/
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_components_problem_CodeEditor_tsx.908e444cf0dea3df9bbd.js.map