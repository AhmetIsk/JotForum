'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _classCallCheck = require('@babel/runtime/helpers/esm/classCallCheck');
var preact = require('preact');
var _asyncToGenerator = require('@babel/runtime/helpers/esm/asyncToGenerator');
var _slicedToArray = require('@babel/runtime/helpers/esm/slicedToArray');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var react = require('react');
var reactResponsive = require('react-responsive');
var _createClass = require('@babel/runtime/helpers/esm/createClass');
var _toConsumableArray = require('@babel/runtime/helpers/esm/toConsumableArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

var DataContext = /*#__PURE__*/react.createContext(); // This context provider is passed to any component requiring the context

var FetchData = function FetchData(_ref) {
  var children = _ref.children;

  var _useState = react.useState(null),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = react.useState(""),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      formID = _useState4[0],
      setFormID = _useState4[1];

  var _useState5 = react.useState(""),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      apiKey = _useState6[0],
      setApiKey = _useState6[1];

  var isTabletOrMobile = reactResponsive.useMediaQuery({
    query: '(max-width: 767px)'
  });

  var _useState7 = react.useState(JSON.parse(localStorage.getItem("JFUserInfo"))),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      isLoggedIn = _useState8[0],
      setIsLoggedIn = _useState8[1];

  return preact.h(DataContext.Provider, {
    value: {
      data: data,
      setData: setData,
      formID: formID,
      setFormID: setFormID,
      apiKey: apiKey,
      setApiKey: setApiKey,
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: setIsLoggedIn,
      isTabletOrMobile: isTabletOrMobile
    }
  }, children);
};

var objToString = function objToString(obj, key, index) {
  return Object.entries(obj).reduce(function (prevObj, _ref) {
    var _ref2 = _slicedToArray__default['default'](_ref, 2),
        valKey = _ref2[0],
        valValue = _ref2[1];

    return "".concat(prevObj).concat(prevObj && '&').concat(key).concat(index || index === 0 ? "[".concat(index + 1, "]") : '', "[").concat(valKey, "]=").concat(valValue);
  }, '');
};

var FormObjectToBody = function FormObjectToBody(obj) {
  return encodeURI(Object.keys(obj).reduce(function (prev, curr) {
    var value = obj[curr];

    if (Array.isArray(value)) {
      return "".concat(prev).concat(prev && '&').concat(value.reduce(function (valPrev, valCurr, index) {
        return "".concat(valPrev).concat(valPrev && '&').concat(objToString(valCurr, curr, index));
      }, ''));
    }

    return "".concat(prev).concat(prev && '&').concat(objToString(value, curr));
  }, ''));
};

var miniJFApi = /*#__PURE__*/function () {
  function miniJFApi(apiKey) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck__default['default'](this, miniJFApi);

    this.baseURL = options.baseURL || 'https://api.jotform.com/';
    this.apiKey = apiKey;
    this.fetchData = react.useContext(DataContext);
  }

  _createClass__default['default'](miniJFApi, [{
    key: "getElement",
    value: function getElement(id) {
      return document.getElementById(id);
    }
  }, {
    key: "getForms",
    value: function () {
      var _getForms = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
        var options,
            _options$orderby,
            orderby,
            url,
            response,
            _args = arguments;

        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _options$orderby = options.orderby, orderby = _options$orderby === void 0 ? 'id' : _options$orderby;
                url = "".concat(this.baseURL, "user/forms?apikey=").concat(this.apiKey, "&orderby=").concat(orderby);
                _context.next = 5;
                return fetch(url);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getForms() {
        return _getForms.apply(this, arguments);
      }

      return getForms;
    }()
  }, {
    key: "createForm",
    value: function () {
      var _createForm = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2() {
        var data,
            body,
            _args2 = arguments;
        return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                body = FormObjectToBody(data);
                _context2.next = 4;
                return fetch("".concat(this.baseURL, "form?apikey=").concat(this.apiKey), {
                  body: body,
                  "method": "POST",
                  "mode": "cors",
                  "credentials": "omit"
                }).then(function (response) {
                  return response.json();
                }).then(function (data1) {
                  console.log('Success:', data1);
                  data = data1.content.id;
                })["catch"](function (error) {
                  console.error('Error:', error);
                });

              case 4:
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createForm() {
        return _createForm.apply(this, arguments);
      }

      return createForm;
    }()
  }, {
    key: "createFormIfNotExists",
    value: function () {
      var _createFormIfNotExists = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3() {
        var data,
            results,
            i,
            _args3 = arguments;
        return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                _context3.next = 3;
                return this.getForms();

              case 3:
                results = _context3.sent;
                _context3.t0 = _regeneratorRuntime__default['default'].keys(results.content);

              case 5:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 12;
                  break;
                }

                i = _context3.t1.value;

                if (!(results.content[i].title === data.properties.title && results.content[i].status === "ENABLED")) {
                  _context3.next = 10;
                  break;
                }

                data = results.content[i].id;
                return _context3.abrupt("return", data);

              case 10:
                _context3.next = 5;
                break;

              case 12:
                return _context3.abrupt("return", this.createForm(data));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createFormIfNotExists() {
        return _createFormIfNotExists.apply(this, arguments);
      }

      return createFormIfNotExists;
    }()
  }, {
    key: "initializeForm",
    value: function () {
      var _initializeForm = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee4(pageName) {
        var formData, result;
        return _regeneratorRuntime__default['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = {
                  questions: [{
                    type: 'control_textarea',
                    text: 'Type your comment',
                    order: 1,
                    name: 'CommentBox'
                  }, {
                    type: 'control_textbox',
                    text: 'Full Name',
                    order: 2,
                    name: 'NameBox'
                  }, {
                    type: 'control_textbox',
                    text: 'Replied API',
                    order: 3,
                    name: 'RepliedBox'
                  }, {
                    type: 'control_fileupload',
                    text: 'Avatar Upload',
                    order: 4,
                    name: 'FileUpload'
                  }, {
                    type: 'control_textbox',
                    text: 'Avatar URL',
                    order: 5,
                    name: 'URLUpload'
                  }],
                  properties: {
                    title: pageName
                  }
                };
                _context4.next = 3;
                return this.createFormIfNotExists(formData);

              case 3:
                result = _context4.sent;
                this.fetchData.setFormID(result);
                return _context4.abrupt("return", result);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function initializeForm(_x) {
        return _initializeForm.apply(this, arguments);
      }

      return initializeForm;
    }()
  }, {
    key: "addSubmission",
    value: function () {
      var _addSubmission = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee5(data, formID, fetchData) {
        var _this = this;

        return _regeneratorRuntime__default['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                fetch("".concat(this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(this.apiKey), {
                  "body": JSON.stringify(data),
                  "method": "POST",
                  "mode": "cors",
                  "credentials": "omit"
                }).then(function (response) {
                  return response.json();
                }).then(function (data1) {
                  console.log('Success:', data1);
                  fetch("".concat(_this.baseURL, "form/").concat(formID, "/submissions?apikey=").concat(_this.apiKey, "&orderby=id")).then(function (response) {
                    if (response.ok) {
                      return response.json();
                    }

                    throw response;
                  }).then(function (data2) {
                    fetchData.setData(data2);
                    console.log(data2);
                  })["catch"](function (error) {
                    console.error("Error fetching data: ", error);
                  });
                })["catch"](function (error) {
                  console.error('Error:', error);
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function addSubmission(_x2, _x3, _x4) {
        return _addSubmission.apply(this, arguments);
      }

      return addSubmission;
    }()
  }, {
    key: "jotformLogin",
    value: function () {
      var _jotformLogin = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee6(username, password) {
        var userInfo;
        return _regeneratorRuntime__default['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userInfo = {
                  username: "",
                  avatar: ""
                };
                _context6.next = 3;
                return fetch("".concat(this.baseURL, "user/login"), {
                  "body": "username=".concat(username, "&password=").concat(password, "&access=readOnly"),
                  "method": "POST",
                  "mode": "cors",
                  "credentials": "omit"
                }).then(function (response) {
                  if (response.ok) {
                    return response.json();
                  }

                  throw response;
                }).then(function (data2) {
                  userInfo.username = data2.content.username;
                  var avatarUrl = data2.content.avatarUrl;
                  var avatar = avatarUrl.split('//');
                  userInfo.avatar = "https://i2.wp.com/".concat(avatar[2]);
                })["catch"](function (error) {
                  console.error("Error fetching data: ", error);
                });

              case 3:
                return _context6.abrupt("return", userInfo);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function jotformLogin(_x5, _x6) {
        return _jotformLogin.apply(this, arguments);
      }

      return jotformLogin;
    }()
  }]);

  return miniJFApi;
}();

var inputStyle = {
  display: "flex",
  width: "100%"
};
var buttonStyle = {
  backgroundColor: "#EB8230",
  width: "100px",
  height: "30px",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer"
};
var container = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around"
};
var inputBox = {
  backgroundColor: "#FAFAFA",
  borderRadius: "5px",
  padding: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  gap: "30px"
};
var MobileInputBox = {
  backgroundColor: "#FAFAFA",
  borderRadius: "5px",
  padding: "20px",
  width: "100%",
  display: "inlineBlock",
  gap: "30px"
};
var fontType = {
  margin: "2px",
  fontFamily: "Arial",
  fontSize: "1em",
  fontWeight: "Bold",
  color: "#595959"
};
var divStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "20px"
};
var replyButtonStyle = {
  backgroundColor: "#787878",
  width: "100px",
  height: "30px",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer"
};
var replyInputBox = {
  backgroundColor: "#FAFAFA",
  borderRadius: "5px",
  padding: "20px",
  display: "block",
  width: "100%"
};
var mobileReplyInputBox = {
  backgroundColor: "#FAFAFA",
  borderRadius: "5px",
  padding: "20px",
  display: "inlineBlock",
  width: "100%"
};
var replyFormGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)"
};
var MobileReply = {
  "float": "center",
  margin: "0 auto"
};

var copyRightStyle = {
  color: "rgba(0,0,0,.7)",
  textShadow: "0 1px rgba(255, 255, 255, 0.1)",
  textAlign: "center",
  padding: "30px"
};
var header = {
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  gap: "20px"
};
var mobileHeader$1 = {
  margin: "auto",
  display: "inlineBlock",
  paddingBottom: "10px"
};
var headingStyle = {
  color: "#EB8230",
  fontFamily: "Arial",
  fontWeight: "Bold",
  fontStyle: "italic"
};
var pStyle = {
  color: "#787878",
  fontFamily: "Arial",
  fontStyle: "italic",
  padding: "10px"
};
var commentsHeader = {
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px"
};
var selectStyle = {
  color: "#787878",
  fontFamily: "Arial",
  fontStyle: "italic",
  fontSize: "1em"
};

var authorStyle = {
  padding: "10px",
  display: "flex",
  gap: "20px"
};
var mobileHeader = {
  margin: "auto",
  display: "inlineBlock",
  padding: "10px"
};
var boxStyle = {
  padding: "10px",
  margin: "10px",
  backgroundColor: "#FAFAFA",
  gap: "10px",
  borderRadius: "5px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};
var mobileBoxStyle = {
  padding: "0px",
  margin: "0px",
  backgroundColor: "#FAFAFA",
  gap: "10px",
  borderRadius: "5px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};
var commentStyle = {
  backgroundColor: "#FFFFFF",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "1em",
  fontStyle: "italic",
  fontWeight: "lighter"
};
var reactions = {
  display: "flex",
  justifyContent: "flex-end",
  padding: "10px",
  cursor: "pointer",
  fontFamily: "Arial",
  color: "#787878",
  fontWeight: "Bold"
};
var reply = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "30px",
  cursor: "pointer",
  fontFamily: "Arial",
  color: "#787878",
  fontWeight: "Bold"
};
var hide = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "30px"
};
var paragraph = {
  fontFamily: "Arial",
  fontSize: "1em",
  color: "#787878",
  fontWeight: "Bold"
};
var avatarStyle = {
  borderRadius: "50%",
  width: "50px",
  height: "50px"
};

function Avatar(props) {
  var url = props.imageURL;
  return preact.h("img", {
    style: avatarStyle,
    src: "".concat(url)
  });
}

function LoginForm(props) {
  var fetchData = react.useContext(DataContext);

  var _useState = react.useState(""),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = react.useState(null),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      selectedFile = _useState4[0],
      setSelectedFile = _useState4[1];

  react.useEffect(function () {
    if (fetchData.isLoggedIn) {
      setName(fetchData.isLoggedIn.username);
      setSelectedFile(fetchData.isLoggedIn.avatar);
    }
  }, [fetchData.isLoggedIn]);
  return preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileReplyInputBox : inputBox
  }, preact.h("form", {
    onSubmit: props.handleSubmit
  }, preact.h("div", {
    style: authorStyle
  }, preact.h(Avatar, {
    imageURL: selectedFile
  }), preact.h("p", {
    style: headingStyle
  }, "Hey ", name, ", Welcome JotFormer! ")), preact.h("p", {
    style: fontType
  }, "Please type your comment:"), preact.h("textarea", {
    value: props.comment,
    onChange: props.handleChange,
    placeholder: props.text,
    required: true,
    style: inputStyle
  }), preact.h("div", {
    style: divStyle
  }, preact.h("button", {
    style: buttonStyle
  }, "Send"))));
}

function WithoutLogin(props) {
  var fetchData = react.useContext(DataContext);
  return preact.h("div", {
    style: fetchData.isTabletOrMobile ? MobileInputBox : inputBox
  }, preact.h("form", {
    onSubmit: props.handleSubmit
  }, preact.h("p", {
    style: fontType
  }, "Please pick an image (only image format is accepted):"), preact.h("input", {
    style: inputStyle,
    type: "file",
    id: "myFile",
    name: "filename",
    onChange: props.handleImageChange,
    accept: "image/*"
  }), preact.h("p", {
    style: fontType
  }, "Please type your comment:"), preact.h("textarea", {
    value: props.comment,
    onChange: props.handleChange,
    placeholder: props.text,
    required: true,
    style: inputStyle
  }), preact.h("div", null, preact.h("div", null, preact.h("p", {
    style: fontType
  }, "and enter your name:"), preact.h("span", null, preact.h("input", {
    type: "text",
    value: props.name,
    onChange: props.handleNameChange,
    placeholder: "Name",
    required: true,
    style: inputStyle
  })))), preact.h("div", {
    style: divStyle
  }, preact.h("button", {
    style: buttonStyle
  }, "Send"))), preact.h("form", {
    onSubmit: props.handleLogin
  }, preact.h("p", {
    style: headingStyle
  }, "or Login with JotForm Account"), preact.h("p", {
    style: fontType
  }, "Please type your username:"), preact.h("input", {
    type: "text",
    value: props.username,
    onChange: props.handleUsernameChange,
    placeholder: "Name",
    required: true,
    style: inputStyle
  }), preact.h("div", null, preact.h("div", null, preact.h("p", {
    style: fontType
  }, "Password:"), preact.h("span", null, preact.h("input", {
    type: "password",
    value: props.password,
    onChange: props.handlePasswordChange,
    placeholder: "Name",
    required: true,
    style: inputStyle
  })))), preact.h("div", {
    style: divStyle
  }, preact.h("button", {
    style: buttonStyle
  }, "Login"))));
}

function JFUserLogin(_x, _x2, _x3) {
  return _JFUserLogin.apply(this, arguments);
}

function _JFUserLogin() {
  _JFUserLogin = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(api, username, password) {
    var JFUserInfo;
    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!localStorage.getItem("JFUserInfo")) {
              _context.next = 4;
              break;
            }

            JFUserInfo = localStorage.getItem("JFUserInfo");
            _context.next = 8;
            break;

          case 4:
            _context.next = 6;
            return api.jotformLogin(username, password);

          case 6:
            JFUserInfo = _context.sent;

            if (JFUserInfo.username != null) {
              localStorage.setItem("JFUserInfo", JSON.stringify(JFUserInfo));
            }

          case 8:
            return _context.abrupt("return", JFUserInfo);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _JFUserLogin.apply(this, arguments);
}

var toBase64$1 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

function CommentInput(props) {
  var fetchData = react.useContext(DataContext);
  var formID = fetchData.formID;
  var parentID = 1;
  var api = new miniJFApi(props.apiKey);

  var _useState = react.useState(""),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = react.useState(""),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = react.useState(""),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      username = _useState6[0],
      setUserName = _useState6[1];

  var _useState7 = react.useState(""),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      password = _useState8[0],
      setPassword = _useState8[1];

  var _useState9 = react.useState(null),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      selectedFile = _useState10[0],
      setSelectedFile = _useState10[1];

  var _useState11 = react.useState(false),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      refresh = _useState12[0],
      setRefresh = _useState12[1];

  var handleChange = function handleChange(e) {
    setComment(e.target.value);
  };

  var handleNameChange = function handleNameChange(e) {
    setName(e.target.value);
  };

  var handlePasswordChange = function handlePasswordChange(e) {
    setPassword(e.target.value);
  };

  var handleUsernameChange = function handleUsernameChange(e) {
    setUserName(e.target.value);
  };

  var handleImageChange = function handleImageChange(e) {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(e) {
      var myfile, data2;
      return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(selectedFile);

              if (fetchData.isLoggedIn) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return toBase64$1(selectedFile);

            case 5:
              myfile = _context.sent;
              _context.next = 9;
              break;

            case 8:
              myfile = selectedFile;

            case 9:
              data2 = {
                "1": comment,
                "2": name,
                "3": parentID,
                "4": myfile,
                "5": myfile
              };
              api.addSubmission(data2, formID, fetchData);
              setComment("");
              setName("");
              setRefresh(!refresh);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleLogin = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2(e) {
      var JFUserInfo;
      return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return JFUserLogin(api, username, password);

            case 3:
              JFUserInfo = _context2.sent;
              if (JFUserInfo.username) fetchData.setIsLoggedIn(JFUserInfo);else alert("Your password or username is invalid. Please be sure that you entered correct username and password.");
              setComment("");
              setName(JFUserInfo.username);
              setSelectedFile(JFUserInfo.avatar);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleLogin(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  react.useEffect(function () {
    var jotformerData = JSON.parse(localStorage.getItem("JFUserInfo"));

    if (jotformerData) {
      setComment("");
      fetchData.setIsLoggedIn(jotformerData);
      setName(jotformerData.username);
      setSelectedFile(jotformerData.avatar);
    }
  }, [refresh]);
  return preact.h("div", {
    style: container
  }, !fetchData.isLoggedIn ? preact.h(WithoutLogin, {
    handleSubmit: handleSubmit,
    handleLogin: handleLogin,
    handleImageChange: handleImageChange,
    handleChange: handleChange,
    comment: comment,
    text: props.text,
    handleNameChange: handleNameChange,
    name: name,
    handleUsernameChange: handleUsernameChange,
    username: username,
    handlePasswordChange: handlePasswordChange,
    password: password
  }) : preact.h(LoginForm, {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    comment: comment,
    text: props.text
  }));
}

function ReplyWithoutLogin(props) {
  var fetchData = react.useContext(DataContext);
  return preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileReplyInputBox : replyInputBox
  }, preact.h("form", {
    onSubmit: props.handleSubmit,
    style: fetchData.isTabletOrMobile ? MobileReply : replyFormGrid
  }, preact.h("div", {
    style: {
      width: "33%"
    }
  }, preact.h("p", {
    style: fontType
  }, "Please pick an image (only image format is accepted):"), preact.h("input", {
    style: inputStyle,
    type: "file",
    id: "myFile",
    name: "filename",
    onChange: props.handleImageChange,
    accept: "image/*"
  })), preact.h("div", {
    style: {
      width: "33%"
    }
  }, preact.h("p", {
    style: fontType
  }, "Please type your comment:"), preact.h("textarea", {
    value: props.comment,
    onChange: props.handleChange,
    placeholder: props.text,
    required: true,
    style: inputStyle
  })), preact.h("div", {
    style: {
      width: "33%"
    }
  }, preact.h("div", null, preact.h("p", {
    style: fontType
  }, "and enter your name:"), preact.h("span", null, preact.h("input", {
    type: "text",
    value: props.name,
    onChange: props.handleNameChange,
    placeholder: "Name",
    required: true,
    style: inputStyle
  })))), preact.h("div", {
    style: divStyle
  }, preact.h("button", {
    style: replyButtonStyle
  }, "Reply"))));
}

var toBase64 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

function ReplyInput(props) {
  var repliedID = props.repliedCommentID;
  var fetchData = react.useContext(DataContext);
  var formID = fetchData.formID;

  var _useState = react.useState(""),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = react.useState(""),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = react.useState(null),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      selectedFile = _useState6[0],
      setSelectedFile = _useState6[1];

  var _useState7 = react.useState(false),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      isActive = _useState8[0],
      setIsActive = _useState8[1];

  var api = new miniJFApi(props.apiKey);

  var handleChange = function handleChange(e) {
    setComment(e.target.value);
  };

  var handleNameChange = function handleNameChange(e) {
    setName(e.target.value);
  };

  var handleImageChange = function handleImageChange(e) {
    setSelectedFile(e.target.files[0]);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(e) {
      var myfile, data2;
      return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log('burasi', fetchData.isLoggedIn);

              if (fetchData.isLoggedIn) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return toBase64(selectedFile);

            case 5:
              myfile = _context.sent;
              _context.next = 9;
              break;

            case 8:
              myfile = selectedFile;

            case 9:
              data2 = {
                "1": comment,
                "2": name,
                "3": repliedID,
                "4": myfile,
                "5": myfile
              };
              api.addSubmission(data2, formID, fetchData);
              console.log("data is sent");
              setComment("");
              setName("");
              setSelectedFile(null);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  react.useEffect(function () {
    if (fetchData.isLoggedIn) {
      setName(fetchData.isLoggedIn.username);
      setSelectedFile(fetchData.isLoggedIn.avatar);
      console.log(name);
    }
  }, [fetchData.isLoggedIn]);
  react.useEffect(function () {
    setIsActive(false);
  }, [fetchData.data]);
  return preact.h("div", {
    style: hide
  }, preact.h("div", {
    className: "accordion"
  }, preact.h("div", {
    className: "accordion-item"
  }, preact.h("div", {
    className: "accordion-title",
    onClick: function onClick() {
      return setIsActive(!isActive);
    }
  }, preact.h("div", {
    style: reply
  }, preact.h("a", null, "Reply ", isActive ? '-' : '+'))), isActive && (!fetchData.isLoggedIn ? preact.h(ReplyWithoutLogin, {
    handleSubmit: handleSubmit,
    handleImageChange: handleImageChange,
    handleChange: handleChange,
    comment: comment,
    text: props.text,
    handleNameChange: handleNameChange,
    name: name
  }) : preact.h(LoginForm, {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    comment: comment,
    text: props.text
  })))));
}

function CommentBox(props) {
  var apiKey = props.apiKey;
  var comment = props.comment;
  var fetchData = react.useContext(DataContext);
  return preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileBoxStyle : boxStyle
  }, preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileHeader : authorStyle
  }, preact.h(Avatar, {
    imageURL: comment.avatar
  }), preact.h("p", {
    style: paragraph
  }, "created by ", comment.name, " at ", comment.createdAt)), preact.h("div", {
    style: commentStyle
  }, preact.h("p", null, " ", JSON.stringify(comment.comment), " ")), preact.h(ReplyInput, {
    repliedCommentID: comment.id,
    text: "Join the discussion...",
    apiKey: apiKey
  }));
}

var ReplyDisplayer = function ReplyDisplayer(_ref) {
  var comment = _ref.comment,
      allComments = _ref.allComments;
  var fetchData = react.useContext(DataContext);
  var apiKey = fetchData.apiKey;

  var _useState = react.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      isReplies = _useState2[0],
      setIsReplies = _useState2[1];

  var _useState3 = react.useState(comment.replies.length > 0),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      isReplied = _useState4[0];
      _useState4[1];

  var result = comment.replies.map(function (id) {
    var reply = allComments.find(function (post) {
      if (post.id == id) return true;
    });
    return reply;
  });
  return preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileBoxStyle : boxStyle
  }, preact.h(CommentBox, {
    apiKey: apiKey,
    comment: comment
  }), preact.h("div", {
    className: "accordion"
  }, preact.h("div", {
    className: "accordion-item"
  }, preact.h("div", {
    className: "accordion-title",
    onClick: function onClick() {
      return setIsReplies(!isReplies);
    }
  }, preact.h("div", {
    style: reactions
  }, isReplied && preact.h("a", null, " ", isReplies ? 'Hide Comments-' : 'Show Comments+'))))), isReplies && result.map(function (reply) {
    return preact.h("div", {
      style: !fetchData.isTabletOrMobile && {
        paddingLeft: "5%"
      }
    }, preact.h(ReplyDisplayer, {
      comment: reply,
      allComments: allComments
    }));
  }));
};

function ListComments(props) {
  var fetchData = react.useContext(DataContext);

  var _useState = react.useState(fetchData.data),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      allComments = _useState2[0],
      setAllComments = _useState2[1];

  var _useState3 = react.useState([]),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      comments = _useState4[0],
      setComments = _useState4[1];

  react.useEffect(function () {
    var data = fetchData.data;
    var commentsRaw = [];

    for (var i in data.content) {
      if (data.content[i].status === "ACTIVE") {
        var _data$content$i$answe;

        var commentObject = {
          name: {},
          comment: {},
          avatar: {},
          createdAt: {},
          id: {},
          parentId: {},
          replies: []
        };
        commentObject.comment = data.content[i].answers[1].answer;
        commentObject.name = data.content[i].answers[2].answer;
        commentObject.avatar = (_data$content$i$answe = data.content[i].answers[5]) === null || _data$content$i$answe === void 0 ? void 0 : _data$content$i$answe.answer;
        commentObject.createdAt = data.content[i].created_at;
        commentObject.id = data.content[i].id;
        commentObject.parentId = data.content[i].answers[3].answer;
        commentsRaw.push(commentObject);
      }
    }

    var comments = commentsRaw.reduce(function (prev, comment) {
      if (comment.parentId !== 1) {
        var parentIndex = prev.findIndex(function (_ref) {
          var id = _ref.id;
          return id === comment.parentId;
        });

        if (parentIndex === -1) {
          return prev;
        }

        prev[parentIndex].replies = [].concat(_toConsumableArray__default['default'](prev[parentIndex].replies), [comment.id]);
      }

      return prev;
    }, commentsRaw);
    setAllComments(comments);
  }, [fetchData.data]);
  react.useEffect(function () {
    if (Array.isArray(allComments)) {
      var mappedComments = allComments.map(function (comment) {
        if (comment.parentId == 1) {
          return preact.h(ReplyDisplayer, {
            comment: comment,
            allComments: allComments
          });
        }
      });
      setComments(mappedComments);
    }
  }, [allComments]);
  return preact.h("div", null, comments);
}

function App(props) {
  var fetchData = react.useContext(DataContext);
  var apiKey = props.apiKey;
  fetchData.setApiKey(props.apiKey);
  var pageName = props.page;
  var api = new miniJFApi(props.apiKey);
  console.log(apiKey);

  var _useState = react.useState(null),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      formID = _useState2[0],
      setFormID = _useState2[1];

  var _useState3 = react.useState(true),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = react.useState(null),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = react.useState("desc"),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      asc = _useState8[0],
      setAsc = _useState8[1];

  var year = new Date().getFullYear();
  react.useEffect(function () {
    var initialLoad = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
        var resultFormID;
        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.initializeForm(pageName);

              case 2:
                resultFormID = _context.sent;
                setFormID(resultFormID);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function initialLoad() {
        return _ref.apply(this, arguments);
      };
    }();

    initialLoad();
  }, [apiKey]);

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setAsc(e.currentTarget.value);
  };

  react.useEffect(function () {
    fetch("https://api.jotform.com/form/".concat(formID, "/submissions?apikey=").concat(apiKey, "&orderby=id,").concat(asc)).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      throw response;
    }).then(function (data) {
      fetchData.setData(data);
      console.log(data);
    })["catch"](function (error) {
      console.error("Error fetching data: ", error);
      setError(error);
    })["finally"](function () {
      setLoading(false);
    });
  }, [formID, asc]);
  if (loading) return "Loading...";
  if (error) return "Error!";
  return preact.h("div", null, preact.h("div", {
    style: header
  }, !fetchData.isTabletOrMobile && preact.h("img", {
    style: "width: 40px; height: 50px;",
    src: "https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"
  }), preact.h("h3", {
    style: headingStyle
  }, "This blog is created using JotForum")), preact.h("p", {
    style: pStyle
  }, "JotForum is a forum tool that allows people to communicate with each other. Library works after installing via npm and declaring in your html or js files. You need to provide your JotForm api key for initialization. Then, JotForum creates a form with the name which is same with your file name. Each time a user comments or replies, the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies) are displayed."), preact.h("div", {
    style: header
  }, preact.h(CommentInput, {
    text: "Join the discussion...",
    apiKey: apiKey,
    formID: formID
  })), preact.h("div", null, preact.h("div", {
    style: fetchData.isTabletOrMobile ? mobileHeader$1 : commentsHeader
  }, preact.h("h2", {
    style: pStyle
  }, "Comments"), preact.h("select", {
    style: selectStyle,
    onChange: handleChange
  }, preact.h("option", {
    key: "order",
    value: "desc"
  }, "Newest Comment First"), preact.h("option", {
    key: "order",
    value: "asc"
  }, "Oldest Comment First"))), preact.h(ListComments, {
    asc: asc
  })), preact.h("div", null, preact.h("p", {
    style: copyRightStyle
  }, "\xA9 Copyright ", year, " JotForm. All rights reserved.")));
}

var JotForum = function JotForum(address, apiKey, page) {
  _classCallCheck__default['default'](this, JotForum);

  console.log(apiKey);
  preact.render(preact.h(FetchData, null, preact.h(App, {
    apiKey: apiKey,
    page: page
  })), address);
};

exports.default = JotForum;
//# sourceMappingURL=index.cjs.js.map
