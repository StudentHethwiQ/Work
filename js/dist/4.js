(self.webpackChunkawwwards_new = self.webpackChunkawwwards_new || []).push([
  [9805],
  {
    4692: (e, t, o) => {
      var s = {
        "./academy/course-show_controller.js": 4009,
        "./academy/open-section_controller.js": 667,
        "./academy/open-unit_controller.js": 2531,
        "./academy/rating_controller.js": 9917,
        "./academy/toggle-sidebar_controller.js": 9346,
        "./add_work_to_gallery_controller.js": 1828,
        "./admin_bar_controller.js": 1590,
        "./admin_score_controller.js": 9077,
        "./animate_icons_controller.js": 5006,
        "./annual_vote_controller.js": 7908,
        "./auth/forgot_password_controller.js": 6491,
        "./auth/register_controller.js": 6846,
        "./auto-open-modal_controller.js": 462,
        "./button-loader_controller.js": 788,
        "./change_plan_controller.js": 7514,
        "./chartbar_controller.js": 8353,
        "./chatbox_controller.js": 8154,
        "./collectable_controller.js": 5521,
        "./collection/collaborators_controller.js": 9700,
        "./collection/follow_controller.js": 1395,
        "./confirm-modal_controller.js": 1008,
        "./contact_user_controller.js": 6896,
        "./cookie_manager_controller.js": 1725,
        "./delete_billing_controller.js": 1476,
        "./faqs_controller.js": 4899,
        "./floating-header_controller.js": 4085,
        "./follow_user_controller.js": 7975,
        "./grid_controller.js": 489,
        "./header_marquee_controller.js": 5038,
        "./infinite_scroll_controller.js": 9026,
        "./job_contact_controller.js": 827,
        "./jury_credits_controller.js": 8968,
        "./lazyload_iframe_video_controller.js": 9880,
        "./lazyload_image_controller.js": 201,
        "./lazyload_video_controller.js": 841,
        "./library/choices_controller.js": 2311,
        "./library/clipboard_controller.js": 2994,
        "./library/lottie_fix_border_blur_controller.js": 6908,
        "./list-with-hidden-elements_controller.js": 474,
        "./login_controller.js": 7645,
        "./login_register_controller.js": 3668,
        "./map_controller.js": 9728,
        "./marquee_controller.js": 2304,
        "./modal_controller.js": 6579,
        "./modal_url_controller.js": 1079,
        "./open-modal_controller.js": 5594,
        "./own-collection_controller.js": 9138,
        "./palette_controller.js": 7758,
        "./preview_controller.js": 7889,
        "./profile_controller.js": 426,
        "./project/add_controller.js": 3442,
        "./project/delete_controller.js": 2436,
        "./project/items_form_controller.js": 9262,
        "./project/sort_controller.js": 6266,
        "./project/sort_form_controller.js": 8960,
        "./purchase/cart_controller.js": 9918,
        "./purchase/coupon_controller.js": 9162,
        "./purchase/purchase_controller.js": 9744,
        "./quill_controller.js": 5875,
        "./read_notification_controller.js": 5359,
        "./remove_work_to_gallery_controller.js": 1876,
        "./reproduce_video_controller.js": 5656,
        "./search-dropdown_controller.js": 290,
        "./search_controller.js": 7667,
        "./search_controller_old.js": 9731,
        "./searchable-filter_controller.js": 8251,
        "./share_controller.js": 7195,
        "./show_options_controller.js": 6754,
        "./show_plan_controller.js": 4217,
        "./snackbar_controller.js": 8427,
        "./submission/award_category_controller.js": 8424,
        "./submission/credits_controller.js": 797,
        "./submission/sotm_controller.js": 619,
        "./submission/sotm_judge_controller.js": 6983,
        "./suggestions_controller.js": 1378,
        "./swiper-thumbnail_controller.js": 2868,
        "./swiper_controller.js": 944,
        "./tabs_controller.js": 7692,
        "./team_invite_controller.js": 8743,
        "./team_member_remove_controller.js": 339,
        "./toggle_answer_controller.js": 3502,
        "./toggle_controller.js": 6429,
        "./trailer_controller.js": 4122,
        "./upload_image_controller.js": 1630,
        "./user_list_controller.js": 8952,
        "./validator/characters_controller.js": 6703,
        "./validator/options_controller.js": 777,
        "./validator/password_controller.js": 1650,
        "./validator/url_controller.js": 256,
        "./video_hover_controller.js": 4636,
        "./view_cart_item_controller.js": 5095,
        "./visit_count_controller.js": 1149,
        "./vote-modal_controller.js": 3853,
        "./vote-process_controller.js": 5785,
      };
      function n(e) {
        var t = i(e);
        return o(t);
      }
      function i(e) {
        if (!o.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (n.keys = function () {
        return Object.keys(s);
      }),
        (n.resolve = i),
        (e.exports = n),
        (n.id = 4692);
    },
    8205: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = {};
    },
    4009: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => g });
      var s = o(6599),
        n = o(7051),
        i = o(5432),
        a = o(2406),
        r = o(8888),
        l = o.n(r),
        c = o(2316),
        d = o.n(c),
        u = o(6301),
        h = o(9755);
      const p = d().Model.extend({
        defaults: { slug: "", lectures: [], current_lecture: null },
        changeLectureSelected: function (e) {
          let t = this.getLectures();
          for (var o in t)
            if (o === e) return void this.set("current_lecture", t[o]);
        },
        getVideoSource: function (e, t) {
          return h.get({
            url: u.Z.generate("tv_course_lecture_source", { id: e, mode: t }),
          });
        },
        loadCurrentLecture: function () {
          let e = this.getCurrentLecture();
          return this.getVideoSource(e.id, "manual");
        },
        getCurrentLecture: function () {
          return this.get("current_lecture");
        },
        getLectures: function () {
          return this.get("lectures");
        },
        getSlug: function () {
          return this.get("slug");
        },
        getLecturesFinished: function () {
          let e = [],
            t = this.getLectures();
          for (var o in t) {
            let s = t[o];
            s.completed && e.push(s.id);
          }
          return e;
        },
        getTotalLectures: function () {
          let e = 0;
          for (var t in this.getLectures()) e++;
          return e;
        },
        certificateAvailableForUser: function () {
          return this.getPercentageCompleted() > 95;
        },
        getPercentageCompleted: function () {
          let e = this.getLecturesFinished(),
            t = this.getTotalLectures();
          return (100 * e.length) / t;
        },
        setStateLecture: function (e, t) {
          let o = this.getLectures();
          o[e].completed
            ? this._postUncompleteLecture(e, t)
            : this._postCompleteLecture(e, t),
            (o[e].completed = !o[e].completed);
        },
        _postStoreTimeLecture: function (e, t) {
          h.post({
            url: u.Z.generate("tv_lecture_store_time", { id: e }),
            data: { time: t },
          });
        },
        _postCompleteLecture: function (e, t) {
          h.post({
            url: u.Z.generate("tv_lecture_complete", { id: e, mode: t }),
          });
        },
        _postUncompleteLecture: function (e, t) {
          h.post({
            url: u.Z.generate("tv_lecture_uncomplete", { id: e, mode: t }),
          });
        },
        storeCurrentTime: function (e) {
          let t = this.getCurrentLecture();
          (this.getLectures()[t.id] = t), this._postStoreTimeLecture(t.id, e);
        },
        completeCurrentLecture: function () {
          let e = this.getCurrentLecture();
          (e.completed = !0),
            (this.getLectures()[e.id] = e),
            this._postCompleteLecture(e.id, "auto");
        },
        uncompleteCurrentLecture: function () {
          let e = this.getCurrentLecture();
          (e.completed = !0),
            (this.getLectures()[e.id] = e),
            this._postUncompleteLecture(e.id, "auto");
        },
        getNextLecture: function () {
          return this._findNextLectureId(this.getCurrentLecture().id);
        },
        _findNextLectureId: function (e) {
          let t = !1,
            o = this.getLectures();
          for (var s in o) {
            if (t) return o[s];
            s === e && (t = !0);
          }
          return null;
        },
      });
      var m = o(4095);
      const _ = class {
          constructor(e, t) {
            (this.model = e),
              (this.playerContainer = t),
              (this.player = null),
              (this.storeProgressInterval = null),
              this._checkViewedLessons(),
              this._setPercentageCompleted(),
              this._showCurrentLecture();
          }
          _showCurrentLecture() {
            if (null !== this.playerContainer.querySelector("video")) {
              (this.player = this._createPlayer()),
                this._storeProgress(this.player);
              let e = this;
              this.model.loadCurrentLecture().then(function (t) {
                e.player.changePlaying(t);
              });
            }
          }
          _navigateToLecture(e) {
            let t = e.currentTarget;
            this._navigateAndPlay(t, "manual");
          }
          _navigateAndPlay(e, t) {
            let o = e.parentElement.parentElement,
              s = JSON.parse(e.dataset.model),
              n = this.model.getCurrentLecture();
            if (s.id !== n.id) {
              this._changeLecture(o, s, n),
                this.model.changeLectureSelected(s.id),
                history.pushState(
                  null,
                  "",
                  u.Z.generate("tv_course_show_lecture", {
                    lectureId: s.id,
                    slug: this.model.getSlug(),
                  })
                );
              var i = this;
              this.model
                .getVideoSource(this.model.getCurrentLecture().id, t)
                .then(function (e) {
                  e.isHtml ? i._changeToHtml(e.html) : i._changeToVideo(e);
                });
            }
          }
          _changeLecture(e, t, o) {
            this._deactivateLecture(o), this._activateLecture(t, e);
          }
          _activateLecture(e, t) {
            if (
              (document
                .querySelector(".js-lecture-" + e.id)
                .classList.add("show"),
              document
                .querySelector(".js-section-" + e.section.id)
                .classList.add("active"),
              window.innerWidth > 999)
            )
              t.scrollIntoView({ behavior: "smooth" });
            else {
              let e = t.offsetTop - this.playerContainer.offsetHeight;
              window.scrollTo(0, e);
            }
          }
          _deactivateLecture(e) {
            document
              .querySelector(".js-lecture-" + e.id)
              .classList.remove("show"),
              document
                .querySelector(".js-section-" + e.section.id)
                .classList.remove("active");
          }
          _setPercentageCompleted() {
            let e = document.querySelector(".box-progress"),
              t = e.querySelector(".percentage"),
              o = this.model.getPercentageCompleted();
            (t.innerHTML = o.toFixed(1).replace(".0", "") + "%"),
              (e.querySelector(".bar").style.width = o + "%");
          }
          _downloadHandler(e) {
            let t = e.currentTarget.dataset.lecture;
            this.model.setStateLecture(t, "manual"),
              (document
                .querySelector(".js-lecture-" + t)
                .querySelector("input").checked = !0);
          }
          _checkFinishLectureHandler(e) {
            let t = e.currentTarget.dataset.lecture;
            this.model.setStateLecture(t, "manual"),
              this._toggleCheckLesson(t),
              this._setPercentageCompleted();
          }
          _checkViewedLessons() {
            let e = this.model.getLecturesFinished();
            for (let t = 0; t < e.length; t++) {
              const o = e[t];
              this._markLessonAsFinished(o);
            }
          }
          _markCurrentLessonAsFinished() {
            let e = this.model.getCurrentLecture();
            this._markLessonAsFinished(e.id);
          }
          _markLessonAsFinished(e) {
            this._getCheckLectureVideo(e).checked = !0;
          }
          _toggleCheckLesson(e) {
            let t = this._getCheckLectureVideo(e);
            t.checked = !t.checked;
          }
          _getCheckLectureVideo(e) {
            return document
              .querySelector(".js-lecture-" + e)
              .querySelector("input");
          }
          _createVideoTag() {
            let e = document.createElement("video");
            return (
              (e.id = "video"),
              e.classList.add("js-video", "video-js"),
              e.setAttribute("crossorigin", "anonymous"),
              e
            );
          }
          _createPlayer() {
            null === this.playerContainer.querySelector("#video") &&
              this.playerContainer.appendChild(this._createVideoTag());
            const e = this.playerContainer.querySelector("#video");
            let t = new m.Z(e, {
              aspectRatio: "16:9",
              playbackRates: [0.5, 1, 1.5, 2],
            });
            var o = this;
            return (
              (e.ontimeupdate = function () {
                e.currentTime / e.duration > 0.95 &&
                  !o.model.getCurrentLecture().completed &&
                  (o.model.completeCurrentLecture(),
                  o._markCurrentLessonAsFinished());
              }),
              (e.onended = function () {
                o._markCurrentLessonAsFinished(),
                  o._getNextLecture(),
                  o._setPercentageCompleted();
              }),
              t
            );
          }
          _resetContainer() {
            this.playerContainer.innerHTML = "";
          }
          _removePlayer() {
            this.player.dispose(), (this.player = null);
          }
          _changeToHtml(e) {
            this._resetContainer(), this.player && this._removePlayer();
            let t = document.createElement("div");
            t.classList.add("js-lecture-html");
            let o = document.createElement("div");
            o.classList.add("wrapper-lecture");
            let s = document.createElement("div");
            s.classList.add("content-lecture", "js-lecture-html-content"),
              t.appendChild(o),
              o.appendChild(s),
              (s.innerHTML = e),
              this.playerContainer.appendChild(t);
          }
          _changeToVideo(e) {
            this._resetStoreProgress(),
              null == this.player &&
                (this._resetContainer(), (this.player = this._createPlayer())),
              this._storeProgress(this.player);
            let t = this.player.emtpyTracks();
            this.player.changePlaying(e, t);
          }
          _getNextLecture() {
            let e = this.model.getNextLecture(),
              t = document.querySelector(".js-lecture-" + e.id);
            if (t) {
              let e = t.closest(".js-video-lesson");
              this._navigateAndPlay(e.querySelector(".js-lecture"), "auto");
            } else console.log("Course Finished.");
          }
          _storeProgress(e) {
            var t = this,
              o = 0,
              s = e.getVideoDOM();
            function n() {
              o !== Math.round(s.currentTime) &&
                ((o = Math.round(s.currentTime)),
                t.model.storeCurrentTime(Math.round(s.currentTime)));
            }
            e.on("play", function () {
              null === t.storeProgressInterval &&
                (t.storeProgressInterval = setInterval(n, 1e4));
            });
          }
          _resetStoreProgress() {
            clearInterval(this.storeProgressInterval),
              (this.storeProgressInterval = null);
          }
        },
        g = class extends s.Qr {
          static targets = ["playerContainer"];
          static values = { model: { type: Object, default: {} } };
          initialize() {
            (this.model = new p(this.modelValue)),
              (this.view = new _(this.model, this.playerContainerTarget));
          }
          downloadResource(e) {
            this.view._downloadHandler(e);
          }
          navigateToLecture(e) {
            this.view._navigateToLecture(e);
          }
          checkFinishLecture(e) {
            this.view._checkFinishLectureHandler(e);
          }
          showCertificate() {
            new i.Z({ remove_after_close: !0, size: "small" }).show(
              (0, a.Hk)(
                l()({
                  certificateAvailableForUser:
                    this.model.certificateAvailableForUser(),
                  slug: this.model.getSlug(),
                  username: n.Z.username,
                })
              )
            );
          }
        };
    },
    667: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        open() {
          this.element.classList.contains("active")
            ? this.element.classList.remove("active")
            : (document
                .querySelectorAll(".list-sections > li")
                .forEach(function (e) {
                  e.classList.remove("active");
                }),
              this.element.classList.add("active"));
        }
      };
    },
    2531: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["lessonSection"];
        open() {
          this.lessonSectionTarget.classList.toggle("is-open");
        }
      };
    },
    9917: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(3414),
        i = o(2947),
        a = o(3290);
      const r = [
          "Awful, not what I expected at all",
          "Poor, pretty dissapointed",
          "Average, could be better",
          "Good, what I expected",
          "Amazing, above the expectations",
        ],
        l = class extends s.Qr {
          static targets = ["ratingMessage", "stars", "contentInput"];
          static values = { route: { type: String, default: "" } };
          initialize() {
            (this.rating = 4),
              (this.ratingMessageTarget.innerHTML = r[3]),
              this._setRating(4);
          }
          rate(e) {
            this._setRating(e.currentTarget.dataset.rating);
          }
          hover(e) {
            let t = e.currentTarget.dataset.rating;
            this.ratingMessageTarget.innerHTML = r[t - 1];
          }
          send() {
            let e = new FormData();
            e.append("rate", this.rating),
              e.append("content", this.contentInputTarget.value),
              i.Z.post(this.routeValue, e)
                .then(() => {
                  (0, n.O)("success", "Thanks for your help!"),
                    a.Z.closeLatestWithoutCallback();
                })
                .catch((e) => {
                  (0, n.O)("error", e.response.data);
                });
          }
          _setRating(e) {
            (this.rating = e), (this.starsTarget.dataset.stars = e);
          }
        };
    },
    9346: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        toggle() {
          document.body.classList.toggle("hide-sidebar");
        }
      };
    },
    1828: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(2947),
        i = o(6301),
        a = o(2406),
        r = o(3414),
        l = o(9482);
      const c = class extends s.Qr {
        static values = {
          identifier: { type: String, default: "" },
          type: { type: String, default: "" },
        };
        add() {
          let e = i.Z.generate("tv_add_work_to_gallery", {
              identifier: this.identifierValue,
              type: this.typeValue,
            }),
            t = this;
          document
            .querySelector(".js-loading-" + this.identifierValue)
            .classList.add("is-visible"),
            n.Z.post(e).then(function (e) {
              if (e) {
                (t.element.style.opacity = "0"),
                  setTimeout(() => t.element.remove(), 500),
                  document
                    .getElementById("js-sortable-container")
                    .prepend((0, a.Hk)(e.data.renderItem)),
                  1 ===
                    document.querySelectorAll(
                      ".js-container-submissions li.js-item-project-profile"
                    ).length &&
                    document
                      .querySelector(".js-no-results-submissions")
                      .classList.remove("is-hidden"),
                  1 ===
                    document.querySelectorAll(
                      ".js-container-user-projects li.js-item-project-profile"
                    ).length &&
                    document
                      .querySelector(".js-no-results-user-projects")
                      .classList.remove("is-hidden"),
                  document
                    .querySelector(".js-no-results-gallery")
                    .classList.add("is-hidden"),
                  (0, r.O)("success", l.Z.trans("Your work has been added."));
              }
              document
                .querySelector(".js-loading-" + this.identifierValue)
                .classList.remove("is-visible");
            });
        }
      };
    },
    1590: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(2193);
      const i = class extends s.Qr {
        static targets = ["bar", "openButton"];
        open() {
          this.barTarget.classList.remove("is-hidden"),
            this.openButtonTarget.classList.add("is-hidden"),
            n.Z.set("tv_admin_bar", 1);
        }
        close() {
          this.barTarget.classList.add("is-hidden"),
            this.openButtonTarget.classList.remove("is-hidden"),
            n.Z.set("tv_admin_bar", 0);
        }
        toggleInfo(e) {
          e.preventDefault();
          var t = document.querySelectorAll(".js-content-search-info");
          [].forEach.call(t, function (e) {
            e.classList.toggle("is-hidden");
          });
        }
      };
    },
    9077: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(5432),
        i = o(2406);
      const a = class extends s.Qr {
        static values = { score: { type: Object, default: {} } };
        open() {
          console.log(this.scoreValue);
          let e =
            "<pre style='overflow: scroll'>" +
            JSON.stringify(this.scoreValue, null, 2) +
            "</pre>";
          new n.Z({ remove_after_close: !0 }).show(
            (0, i.Hk)(
              "<div class=\"modal__box\" style='width: 70%; overflow: scroll; height: 100%;'>" +
                e +
                "</div>"
            )
          );
        }
      };
    },
    5006: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7545);
      o(886);
      const i = class extends s.Qr {
        connect() {
          (0, n.sx)(this);
        }
        appear(e) {
          e.target.play();
        }
        disappear(e) {
          e.target.stop();
        }
      };
    },
    7908: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => g });
      var s = o(6599),
        n = o(7051),
        i = o(7792),
        a = o(5432),
        r = o(2406),
        l = o(2193),
        c = o(8238),
        d = o.n(c),
        u = o(2688),
        h = o.n(u),
        p = o(4027),
        m = o.n(p),
        _ = o(7508);
      const g = class extends s.Qr {
        static values = {
          lastDayOfVoting: { type: String, default: "" },
          userType: { type: String, default: "user" },
          annualAwardsYear: { type: Number, default: 0 },
        };
        initialize() {
          this.element.querySelectorAll("a").forEach((e) => {
            e.addEventListener("click", (e) => {
              if (!n.Z.isLoggedIn()) {
                e.preventDefault(), new i.Z().open();
              }
            });
          });
        }
        connect() {
          if ((0, _.T)(this.lastDayOfVotingValue))
            return void (0, _.n)(this.annualAwardsYearValue);
          if (!n.Z.isLoggedIn()) return void this._openLogin();
          if (void 0 !== l.Z.get("__w_av")) return;
          let e = new a.Z();
          var t, o;
          e.show(
            (0, r.Hk)(
              ((t = this.userTypeValue),
              (o = this.annualAwardsYearValue),
              "judge" === t
                ? d()({ annualAwardsYear: o })
                : "judge_young" === t
                ? h()({ annualAwardsYear: o })
                : m()())
            )
          ),
            e.el
              .querySelector(".js-start-voting")
              .addEventListener("click", () => {
                l.Z.set("__w_av", !0), e.close();
              });
        }
      };
    },
    6491: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(2947),
        i = o(2283),
        a = o.n(i),
        r = o(7063);
      const l = class extends s.Qr {
        submit(e) {
          e.preventDefault(), r.Z.dispatch("show_loading");
          let t = e.currentTarget.closest("form");
          n.Z.post(t.action, new FormData(t))
            .then(() => {
              this.element.innerHTML = a()();
            })
            .catch((e) => {
              this._showErrors(t, e.response.data);
            })
            .finally(() => {
              r.Z.dispatch("hide_loading");
            });
        }
        _showErrors(e, t) {
          var o = e.querySelector(".form-field");
          o.classList.add("is-invalid");
          let s = o.querySelector(".form-field__msg");
          null === s &&
            ((s = document.createElement("div")),
            s.classList.add("form-field__msg"),
            o.appendChild(s)),
            (s.textContent = t.errors);
        }
      };
    },
    6846: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => d });
      var s = o(6599),
        n = o(2947),
        i = o(7063),
        a = o(8854),
        r = o(1313),
        l = o(7267),
        c = o.n(l);
      const d = class extends s.Qr {
        submit(e) {
          e.preventDefault(), i.Z.dispatch("show_loading");
          let t = e.currentTarget.closest("form");
          n.Z.post(t.action, new FormData(t))
            .then(() => {
              this.element.innerHTML = c()();
            })
            .catch((e) => {
              this._showErrors(t, e.response.data);
            })
            .finally(() => {
              i.Z.dispatch("hide_loading");
            });
        }
        _showErrors(e, t) {
          this._showChildrenErrors(e.name, "", t);
        }
        _showChildrenErrors(e, t, o) {
          let s = "" !== t ? e + "_" + t : e;
          for (let e in o) {
            let t = o[e];
            Array.isArray(t)
              ? this._showError(s, e, t)
              : this._showChildrenErrors(s, e, t);
          }
        }
        _showError(e, t, o) {
          let s = e + "_" + t,
            n = document.getElementById(s);
          if (!n) return void (0, a.Tb)(s);
          let i = n.closest(".form-field");
          i.classList.add("is-invalid"), (0, r.f)(i, o);
        }
      };
    },
    462: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(5432),
        i = o(2505);
      const a = class extends s.Qr {
        static targets = ["content"];
        static values = {
          urlParameterName: { type: String, default: "show_modal" },
          size: { type: String, default: "small" },
        };
        initialize() {
          this.lightbox = new n.Z({
            close_callback: () => {
              let e = new URL(window.location);
              e.searchParams.delete(this.urlParameterNameValue),
                i.Z.replace(e.toString());
            },
            remove_after_close: !0,
            size: this.sizeValue,
          });
        }
        connect() {
          const e = this.contentTarget.cloneNode(!0);
          this.lightbox.show(e);
        }
        disconnect() {
          this.lightbox.destroy();
        }
      };
    },
    788: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        connect() {
          this.element.addEventListener("click", () => {
            this.element.classList.add("is-loading");
            let e = document.createElement("div");
            e.classList.add("button__spinner"), this.element.append(e);
          });
        }
      };
    },
    7514: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        change(e) {
          let t = e.currentTarget.checked;
          document.querySelectorAll(".js-price-plan").forEach((e) => {
            let o = this.application.getControllerForElementAndIdentifier(
              e,
              "show-plan"
            );
            t ? o.annually() : o.monthly();
          });
        }
      };
    },
    8353: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7545);
      const i = class extends s.Qr {
        connect() {
          (0, n.sx)(this);
        }
        appear(e) {
          this.paintChartbars(e.target);
        }
        paintChartbars(e) {
          e.querySelectorAll(".js-chart-bar").forEach(function (e) {
            let t = (100 * e.dataset.note) / 10,
              o = 0,
              s = setInterval(function () {
                o >= t ? clearInterval(s) : (o++, (e.style.width = o + "%"));
              }, 5);
          });
        }
        disappear() {}
      };
    },
    8154: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599);
      const n = class {
          constructor(e) {
            this.el = e;
          }
          open() {
            let e = new Audio("/assets/files/notification.mp3");
            setTimeout(() => {
              this.el.classList.add("is-visible");
              let t = e.play();
              void 0 !== t && t.then(function () {}).catch(function () {});
            }, 0);
          }
          hide() {
            this.el.classList.remove("is-visible");
          }
        },
        i = class extends s.Qr {
          initialize() {
            this.bubble = new n(this.element);
          }
          connect() {
            setTimeout(() => {
              this.bubble.open();
            }, 2e3);
          }
          hide() {
            this.bubble.hide();
          }
        };
    },
    5521: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599);
      var n = o(2947),
        i = o(6301);
      const a = class {
        constructor(e) {
          (this.id = e.id),
            (this.collectableIdentifier = e.collectableIdentifier),
            (this.type = e.type),
            (this.image = e.image),
            (this.title = e.title);
        }
        getId() {
          return this.id;
        }
        getType() {
          return this.type;
        }
        getImage() {
          return this.image;
        }
        getTitle() {
          return this.title;
        }
        getCollectableIdentifier() {
          return this.collectableIdentifier;
        }
        saveInCollection(e) {
          return n.Z.post(
            i.Z.generate("tv_favourites_collect_item", {
              type: this.getType(),
              parameter: this.getCollectableIdentifier(),
              idCollection: e,
            })
          );
        }
      };
      var r = o(4518);
      const l = class extends s.Qr {
        static values = { model: { type: Object, default: {} } };
        initialize() {
          this.hasModelValue &&
            this.modelValue !== {} &&
            (r.Z.add(this.modelValue.type, this.modelValue.id, this.element),
            (this.collectable = new a({
              id: this.modelValue.id,
              collectableIdentifier: this.modelValue.collectableIdentifier,
              type: this.modelValue.type,
              image: this.modelValue.collectableImage,
              title: this.modelValue.collectableTitle,
            })));
        }
        collect() {
          var e;
          (e = this.collectable),
            o
              .e(4291)
              .then(o.bind(o, 4291))
              .then(function (t) {
                new t.default().openFolder(e);
              });
        }
      };
    },
    9700: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => p });
      var s = o(6599),
        n = o(3697),
        i = o(6301),
        a = o(2947),
        r = o(3414),
        l = o(9482);
      const c = class {
        constructor(e, t) {
          (this.currentCollection = t),
            (this.currentCollaborators = []),
            (this.eventDispatcher = e),
            (this.cache = {});
        }
        fetchCollaborators() {
          a.Z.get(
            i.Z.generate("tv_collection_get_collaborators", {
              id: this.currentCollection.id,
            })
          ).then((e) => {
            let t = e.data;
            t.length > 0 &&
              ((this.currentCollaborators = t),
              this.eventDispatcher.dispatch("collaborators_loaded", t));
          });
        }
        searchUserByUsernameOrEmail(e) {
          if (void 0 !== this.cache[e])
            return void this.eventDispatcher.dispatch(
              "show_users_found",
              this.cache[e]
            );
          let t = document.querySelector(".js-loading-spinner");
          t.classList.remove("is-hidden");
          let o = new FormData();
          o.append("text", e),
            a.Z.post(i.Z.generate("tv_directory_suggest"), o).then((o) => {
              let s = o.data;
              s.length > 0 &&
                this.eventDispatcher.dispatch("show_users_found", s),
                (this.cache[e] = s),
                t.classList.add("is-hidden");
            });
        }
        existCollaborator(e) {
          for (let t = 0; t < this.currentCollaborators.length; t++)
            if (this.currentCollaborators[t].id === e.id) return !0;
          return !1;
        }
        addCollaborator(e) {
          let t = new FormData();
          t.append("collaborator", e.id),
            a.Z.post(
              i.Z.generate("tv_collection_add_collaborator", {
                id: this.currentCollection.id,
              }),
              t
            ).then(function () {
              (0, r.O)("success", l.Z.trans("app.notification.changes_saved"));
            });
        }
        removeCollaborator(e) {
          let t = new FormData();
          t.append("collaborator", e.id),
            a.Z.post(
              i.Z.generate("tv_collection_remove_collaborator", {
                id: this.currentCollection.id,
              }),
              t
            ).then(function () {
              (0, r.O)("success", l.Z.trans("app.notification.changes_saved"));
            });
        }
      };
      var d = o(2157),
        u = o(2406),
        h = o(8559);
      const p = class extends s.Qr {
        static targets = [
          "inputSearch",
          "boxUsers",
          "listUsers",
          "usersSuggested",
        ];
        static values = { model: { type: Object, default: {} } };
        initialize() {
          let e = new n.Z();
          (this.model = new c(e, this.modelValue)),
            e.addListener("collaborators_loaded", (e) => {
              this.showCollaborators(e);
            }),
            e.addListener("show_users_found", (e) => {
              this.showUsersFound(e);
            }),
            (this.debouncedSearch = (function (e, t = 100) {
              let o;
              return function (...s) {
                clearTimeout(o),
                  (o = setTimeout(() => {
                    e.apply(this, s);
                  }, t));
              };
            })(this._search, 300)),
            this.model.fetchCollaborators();
        }
        searchUser(e) {
          let t = e.currentTarget.value;
          this.debouncedSearch(t);
        }
        _search(e) {
          e.length < 3 ||
            (this.model.searchUserByUsernameOrEmail(e),
            (this.boxUsersTarget.style.visibility = "visible"));
        }
        addCollaborator(e) {
          let t = e.currentTarget,
            o = JSON.parse(t.dataset.user);
          if (!this.model.existCollaborator(o)) {
            (this.boxUsersTarget.style.visibility = "hidden"),
              (this.inputSearchTarget.value = "");
            let e = this._createCollaboratorItem(o);
            this.listUsersTarget.appendChild(e), this.model.addCollaborator(o);
          }
        }
        showCollaborators(e) {
          let t = document.createDocumentFragment();
          for (let o = 0; o < e.length; o++) {
            let s = e[o],
              n = this._createCollaboratorItem(s);
            t.appendChild(n);
          }
          (this.listUsersTarget.innerHTML = ""),
            this.listUsersTarget.appendChild(t);
        }
        showUsersFound(e) {
          (this.usersSuggestedTarget.innerHTML = ""),
            this.usersSuggestedTarget.appendChild(
              h.Z.createItems(
                e,
                "click->collection--collaborators#addCollaborator"
              )
            );
        }
        _createCollaboratorItem(e) {
          let t = document.createElement("img");
          t.classList.add("circle-avatar"),
            (t.src = d.Z.thumb(e.photo, "thumb_user_70")),
            (t.alt = e.display_name),
            (t.width = 32),
            (t.height = 32);
          let o = document.createElement("div");
          o.classList.add("bt-delete");
          let s = d.Z.redesignIcon("close", 20);
          (s = (0, u.Hk)(s)), o.appendChild(s);
          let n = document.createElement("li");
          return (
            n.classList.add("item", "js-user"),
            (n.dataset.username = e.username),
            n.appendChild(t),
            n.appendChild(o),
            o.addEventListener("click", () => {
              n.remove(), this.model.removeCollaborator(e);
            }),
            n
          );
        }
      };
    },
    1395: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(7051),
        i = o(7792),
        a = o(6301),
        r = o(2947),
        l = o(9482);
      const c = class extends s.Qr {
        static targets = ["followButtonContent"];
        static values = {
          collectionId: { type: String, default: "" },
          isFollowing: { type: Boolean, default: !1 },
        };
        followOrUnfollow(e) {
          (e.preventDefault(), n.Z.isLoggedIn())
            ? this.isFollowingValue
              ? this.unfollow()
              : this.follow()
            : new i.Z().open();
        }
        follow() {
          r.Z.post(
            a.Z.generate("tv_collection_follow", { id: this.collectionIdValue })
          )
            .then(() => {
              this._setFollowing();
            })
            .catch(() => {
              this._setNotFollowing();
            });
        }
        unfollow() {
          r.Z.post(
            a.Z.generate("tv_collection_unfollow", {
              id: this.collectionIdValue,
            })
          )
            .then(() => {
              this._setNotFollowing();
            })
            .catch(() => {
              this._setFollowing();
            });
        }
        _setFollowing() {
          (this.isFollowingValue = !0),
            this.element.classList.add("active"),
            (this.followButtonContentTarget.innerHTML =
              l.Z.trans("app.following"));
        }
        _setNotFollowing() {
          (this.isFollowingValue = !1),
            this.element.classList.remove("active"),
            (this.followButtonContentTarget.innerHTML =
              l.Z.trans("app.follow"));
        }
      };
    },
    1008: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(5432);
      const i = class extends s.Qr {
        static values = {
          title: { type: String, default: "Are you sure?" },
          description: { type: String, default: "" },
          textActionButton: { type: String, default: "Confirm" },
          classActionButton: { type: String, default: "" },
          showCancelButton: { type: Boolean, default: !0 },
        };
        confirm_form(e) {
          e.preventDefault();
          let t = e.currentTarget;
          new n.Z().showModal(
            function () {
              t.submit();
            },
            this.titleValue,
            this.descriptionValue,
            this.textActionButtonValue,
            this.classActionButtonValue,
            this.showCancelButtonValue
          );
        }
      };
    },
    6896: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => m });
      var s = o(6599),
        n = o(7546),
        i = o.n(n),
        a = o(5432),
        r = o(6301),
        l = o(3414),
        c = o(2947),
        d = o(1102),
        u = o(2406);
      const h = { name: "", email: "", website: "", message: "" };
      const p = class {
          constructor(e, t) {
            (this.recaptcha = e), (this.username = t), (this.contactData = h);
          }
          open() {
            (this.lightBox = new a.Z({ remove_after_close: !0 })),
              this.lightBox.setCloseCallback(() => {
                (this.contactData.name = this.lightBox.el.querySelector(
                  "[name='contact[name]']"
                ).value),
                  (this.contactData.email = this.lightBox.el.querySelector(
                    "[name='contact[email]']"
                  ).value),
                  (this.contactData.website = this.lightBox.el.querySelector(
                    "[name='contact[website]']"
                  ).value),
                  (this.contactData.message = this.lightBox.el.querySelector(
                    "[name='contact[message]']"
                  ).value);
              });
            let e = (0, u.Hk)(
              i()({ model: this.contactData, recaptcha: this.recaptcha })
            );
            e
              .querySelector(".js-submit-form")
              .addEventListener("submit", this._submit.bind(this)),
              this.lightBox.show(e);
          }
          _doSubmit(e, t, o) {
            let s = new FormData(e);
            c.Z.post(
              r.Z.generate("tv_user_contact", { username: this.username }),
              s
            )
              .then(() => {
                d.Z.removeLoading(t),
                  this.lightBox.close(),
                  (this.contactData = h),
                  (0, l.O)(
                    "success",
                    "Your message has been sent successfully."
                  );
              })
              .catch((e) => {
                if ((d.Z.removeLoading(t), !e.response)) return;
                (o.value = ""),
                  this.lightBox.el
                    .querySelectorAll(".has-error")
                    .forEach((e) => {
                      e.classList.remove("is-invalid"),
                        (e.querySelector(".msg").innerHTML = "");
                    });
                let s = e.response.data.error;
                for (let e in s) {
                  let t = document.querySelector('[name="contact[' + e + ']"]'),
                    o =
                      "checkbox" === t.type
                        ? t.parentNode.parentNode
                        : t.parentNode,
                    n = o.querySelector(".msg");
                  n ||
                    ((n = document.createElement("div")),
                    (n.className = "form-field__msg"),
                    o.appendChild(n)),
                    (n.textContent = s[e]),
                    o.classList.add("is-invalid");
                }
              });
          }
          _submit(e) {
            e.preventDefault();
            let t = this.lightBox.el.querySelector(
              ".js-submit-contact-user-button"
            );
            if (d.Z.isLoading(t)) return;
            d.Z.addLoading(t);
            let o = e.currentTarget,
              s = o.querySelector("#contact_recaptcha");
            (s.value = ""),
              window.grecaptcha &&
                window.grecaptcha.ready(() => {
                  window.grecaptcha
                    .execute(this.recaptcha, { action: "form" })
                    .then((e) => {
                      (s.value = e), this._doSubmit(o, t, s);
                    });
                });
          }
        },
        m = class extends s.Qr {
          static values = {
            username: { type: String, default: "" },
            recaptcha: { type: String, default: "" },
          };
          initialize() {
            this.contact = new p(this.recaptchaValue, this.usernameValue);
          }
          open() {
            this.contact.open();
          }
        };
    },
    1725: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(1746),
        i = o(4766),
        a = o(3290);
      const r = class extends s.Qr {
        static targets = ["category"];
        initialize() {
          let e = n.Z.get();
          this.model = new i.Z(e);
        }
        configure() {
          this.element
            .querySelector("#button-manage")
            .classList.remove("is-hidden"),
            this.element
              .querySelector("#button-default")
              .classList.add("is-hidden"),
            this.element
              .querySelector("#cookies-info")
              .classList.remove("active"),
            this.element
              .querySelector("#cookies-settings")
              .classList.add("active");
        }
        save() {
          this.categoryTargets.forEach((e) => {
            this.model.updateSingleConsent(e.name, e.checked);
          }),
            this._saveValues(this.model.toJSON()),
            this._close();
        }
        acceptAll() {
          this.model.acceptAll(),
            this._saveValues(this.model.toJSON()),
            this._close();
        }
        rejectAll() {
          this.model.rejectAll(),
            this._saveValues(this.model.toJSON()),
            this._close();
        }
        savePreference(e) {
          let t = e.currentTarget;
          this.model.updateSingleConsent(t.name, t.checked);
        }
        _saveValues(e) {
          n.Z.set(e);
        }
        _close() {
          a.Z.closeLatestWithoutCallback();
        }
      };
    },
    1476: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(5432),
        i = o(1317),
        a = o(6301),
        r = o(2947);
      const l = class extends s.Qr {
        static values = { token: { type: String, default: "" } };
        initialize() {
          this.element.addEventListener("click", (e) => {
            e.preventDefault(),
              new n.Z({ remove_after_close: !0 }).confirmDelete(
                () => {
                  !(function (e) {
                    i.Z.fixed("Deleting billing info");
                    var t = new FormData();
                    t.append("_csrf_token", e),
                      r.Z.post(a.Z.generate("tv_user_billing_delete"), t).then(
                        () => {
                          window.location.reload();
                        }
                      );
                  })(this.tokenValue);
                },
                null,
                "Are you sure you want to delete this info?"
              );
          });
        }
      };
    },
    4899: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(5716);
      const i = class extends s.Qr {
        static targets = ["question", "answer"];
        connect() {
          this.questionTarget.addEventListener("click", () => {
            this.element.classList.contains("active")
              ? (this.element.classList.remove("active"),
                n.p8.to(this.answerTarget, { duration: 0.3, height: 0 }))
              : (this.element.classList.add("active"),
                n.p8.set(this.answerTarget, { height: "auto" }),
                n.p8.from(this.answerTarget, { duration: 0.4, height: 0 }));
          });
        }
      };
    },
    4085: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        connect() {
          let e = document.querySelector("[data-header-floating]").offsetTop;
          window.addEventListener("scroll", () => {
            window.scrollY >= e
              ? this.element.classList.add("show")
              : this.element.classList.remove("show");
          });
        }
      };
    },
    7975: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(2947),
        i = o(7051),
        a = o(7792),
        r = o(1102),
        l = o(6301);
      const c = class extends s.Qr {
        follow(e) {
          if ((e.preventDefault(), i.Z.isLoggedIn())) {
            var t = this.element,
              o = t.href,
              s = t.classList.contains("active");
            (0, r.D)(t, 1),
              n.Z.post(o).then(function (e) {
                if (e) {
                  var o = s ? "tv_user_follow" : "tv_user_unfollow";
                  t.href = l.Z.generate(o, { username: t.dataset.username });
                } else (0, r.D)(t, 1);
              });
          } else {
            new a.Z().open();
          }
        }
      };
    },
    489: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["filterItem", "gridToggle", "gridSwitch"];
        connect() {
          this.updateGridCols();
        }
        disconnect() {
          this.observer.disconnect();
        }
        toggleFilter(e) {
          this.filterItemTargets.forEach((t) => {
            t !== e.currentTarget && t.classList.remove("is-open");
          }),
            e.currentTarget.classList.toggle("is-open");
        }
        closeFilters() {
          this.filterItemTargets.forEach((e) => {
            e.classList.remove("is-open");
          });
        }
        switchGrid(e) {
          e.stopPropagation(),
            this.gridToggleTargets.forEach((t) => {
              t !== e.currentTarget && t.classList.remove("is-active");
            }),
            e.currentTarget.classList.add("is-active");
          let t = e.currentTarget.getAttribute("data-cols"),
            o = document
              .querySelector(".grid-cards")
              .getAttribute("data-group");
          document.querySelector(".grid-cards").setAttribute("data-cols", t),
            this.setCookieGrid("gridCols", { cols: t, group: o }, 7);
        }
        setCookieGrid(e, t, o) {
          let s = "";
          if (o) {
            const e = new Date();
            e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3),
              (s = "; expires=" + e.toUTCString());
          }
          const n = JSON.stringify(t);
          document.cookie = e + "=" + n + s + "; path=/";
        }
        getCookie(e) {
          const t = `; ${document.cookie}`.split(`; ${e}=`);
          if (2 === t.length) {
            const e = t.pop().split(";").shift();
            return JSON.parse(e);
          }
          return null;
        }
        updateGridCols() {
          const e = this.getCookie("gridCols");
          e &&
            e.cols &&
            e.group ===
              document
                .querySelector(".grid-cards")
                .getAttribute("data-group") &&
            (document
              .querySelector(".grid-cards")
              .setAttribute("data-cols", e.cols),
            this.gridToggleTargets.forEach((t) => {
              t.getAttribute("data-cols") === e.cols
                ? t.classList.add("is-active")
                : t.classList.remove("is-active");
            }));
        }
      };
    },
    5038: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(7545),
        i = o(5716);
      const a = class extends s.Qr {
        connect() {
          (0, n.sx)(this), this.move();
        }
        move() {
          let e,
            t = this.element.querySelector("div"),
            o = this.element.dataset.speed || 10,
            s = t.clientWidth;
          for (e = 0; e < 10; e++) {
            let e = t.cloneNode(!0);
            this.element.appendChild(e);
          }
          (this.marqueeAnimation = i.p8.timeline({
            repeat: -1,
            defaults: { ease: "linear" },
          })),
            this.marqueeAnimation
              .to(this.element, { x: `-${s}px`, duration: o })
              .set(this.element, { x: 0 }),
            this.element.classList.add("is-visible"),
            this.element.addEventListener(
              "mouseover",
              function () {
                i.p8.to(this.marqueeAnimation, {
                  timeScale: 0,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              }.bind(this)
            ),
            this.element.addEventListener(
              "mouseout",
              function () {
                i.p8.to(this.marqueeAnimation, {
                  timeScale: 1,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              }.bind(this)
            );
        }
        appear() {
          this.marqueeAnimation.resume();
        }
        disappear() {
          this.marqueeAnimation.pause();
        }
      };
    },
    9026: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(2947),
        i = o(2406),
        a = o(1102);
      const r = class extends s.Qr {
        static targets = ["entries", "pagination", "spinner"];
        initialize() {
          (this.intersectionObserver = new IntersectionObserver(
            (e) => this.processIntersectionEntries(e),
            { rootMargin: "200px" }
          )),
            (this.isLoading = !1);
        }
        connect() {
          this.intersectionObserver.observe(this.paginationTarget);
        }
        disconnect() {
          this.intersectionObserver.unobserve(this.paginationTarget);
        }
        processIntersectionEntries(e) {
          e.forEach((e) => {
            e.isIntersecting && this.loadMore();
          });
        }
        loadMoreClick(e) {
          e.preventDefault(), this.loadMore();
        }
        loadMore() {
          if (this.isLoading) return;
          let e = this.paginationTarget.querySelector(".pagination__next");
          null != e &&
            ((this.isLoading = !0),
            this.paginationTarget.classList.contains(
              "js-infinite-pagination"
            ) && a.Z.addLoadingChangingText(e, "Loading..."),
            this.hasSpinnerTarget &&
              (this.spinnerTarget.style.visibility = "visible"),
            n.Z.get(e.href)
              .then((e) => {
                let t = (0, i.Hk)(e.data);
                t.querySelectorAll(".js-ajax-entries > li").forEach((e) => {
                  this.entriesTarget.appendChild(e);
                }),
                  (this.paginationTarget.innerHTML = ""),
                  this.paginationTarget.appendChild(
                    t.querySelector(".js-ajax-pagination")
                  ),
                  (this.isLoading = !1),
                  this.hasSpinnerTarget &&
                    (this.spinnerTarget.style.visibility = "hidden");
              })
              .catch(() => {
                this.isLoading = !1;
              }));
        }
      };
    },
    827: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => m });
      var s = o(6599),
        n = o(7428),
        i = o.n(n),
        a = o(5432),
        r = o(6301),
        l = o(3414),
        c = o(2947),
        d = o(1102),
        u = o(2406);
      const h = { name: "", email: "", phone: "", website: "", message: "" };
      const p = class {
          constructor(e, t) {
            (this.recaptcha = e), (this.slug = t), (this.contactData = h);
          }
          open() {
            (this.lightBox = new a.Z({ remove_after_close: !0 })),
              this.lightBox.setCloseCallback(() => {
                (this.contactData.name = this.lightBox.el.querySelector(
                  "[name='contact[name]']"
                ).value),
                  (this.contactData.email = this.lightBox.el.querySelector(
                    "[name='contact[email]']"
                  ).value),
                  (this.contactData.phone = this.lightBox.el.querySelector(
                    "[name='contact[phone]']"
                  ).value),
                  (this.contactData.website = this.lightBox.el.querySelector(
                    "[name='contact[website]']"
                  ).value),
                  (this.contactData.message = this.lightBox.el.querySelector(
                    "[name='contact[message]']"
                  ).value);
              });
            let e = (0, u.Hk)(
              i()({ model: this.contactData, recaptcha: this.recaptcha })
            );
            e
              .querySelector(".js-submit-form")
              .addEventListener("submit", this._submit.bind(this)),
              this.lightBox.show(e);
          }
          _doSubmit(e, t, o) {
            c.Z.post(
              r.Z.generate("tv_job_contact", { slug: this.slug }),
              new FormData(e)
            )
              .then(() => {
                d.Z.removeLoading(t),
                  this.lightBox.close(),
                  (this.contactData = h),
                  (0, l.O)(
                    "success",
                    "Your message has been sent successfully."
                  );
              })
              .catch((e) => {
                d.Z.removeLoading(t),
                  (o.value = ""),
                  this.lightBox.el
                    .querySelectorAll(".is-invalid")
                    .forEach((e) => {
                      e.classList.remove("is-invalid"),
                        (e.querySelector(".form-field__msg").innerHTML = "");
                    });
                let s = e.response.data.error;
                for (let e in s) {
                  let t = document.querySelector(
                      '[name="contact[' + e + ']"]'
                    ).parentNode,
                    o = t.querySelector(".form-field__msg");
                  o ||
                    ((o = document.createElement("div")),
                    (o.className = "form-field__msg"),
                    t.appendChild(o)),
                    (o.textContent = s[e]),
                    t.classList.add("is-invalid");
                }
              });
          }
          _submit(e) {
            e.preventDefault();
            let t = this.lightBox.el.querySelector(
              ".js-submit-contact-job-button"
            );
            if (d.Z.isLoading(t)) return;
            d.Z.addLoading(t);
            let o = e.currentTarget,
              s = o.querySelector("#contact_recaptcha");
            (s.value = ""),
              window.grecaptcha &&
                window.grecaptcha.ready(() => {
                  window.grecaptcha
                    .execute(this.recaptcha, { action: "form" })
                    .then((e) => {
                      (s.value = e), this._doSubmit(o, t, s);
                    });
                });
          }
        },
        m = class extends s.Qr {
          static values = {
            model: { type: Object, default: {} },
            recaptcha: { type: String, default: "" },
          };
          initialize() {
            this.element.addEventListener("click", (e) => {
              e.preventDefault(),
                null == this.contactJob &&
                  (this.contactJob = new p(
                    this.recaptchaValue,
                    this.modelValue.slug
                  )),
                this.contactJob.open();
            });
          }
        };
    },
    8968: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(5432),
        i = o(5352),
        a = o.n(i),
        r = o(2406);
      const l = class extends s.Qr {
        show() {
          new n.Z({ remove_after_close: !0 }).show((0, r.Hk)(a()()));
        }
      };
    },
    9880: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(7545),
        i = o(9998);
      const a = class extends s.Qr {
        connect() {
          (0, n.sx)(this, { threshold: 0.1 });
        }
        appear(e) {
          var t, o, s;
          (t = e.target).dataset.src &&
            !t.querySelector("iframe") &&
            ((o = t.dataset.src),
            (s = document.createElement("iframe")).setAttribute("src", o),
            s.setAttribute("width", "640"),
            s.setAttribute("height", "360"),
            s.setAttribute("frameborder", "0"),
            s.setAttribute("allow", "autoplay; fullscreen"),
            s.setAttribute("allowfullscreen", ""),
            t.appendChild(s),
            (0, i.dS)());
        }
        disappear() {}
      };
    },
    201: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(7545),
        i = o(7022);
      const a = class extends s.Qr {
        connect() {
          (0, n.sx)(this, { threshold: 0.1 });
        }
        appear(e) {
          (0, i.Z)(e.target);
        }
        disappear() {}
      };
    },
    841: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(7545),
        i = o(3070);
      const a = class extends s.Qr {
        connect() {
          (0, n.sx)(this, { threshold: 0.1 });
        }
        appear(e) {
          (0, i.Z)(e.target);
        }
        disappear() {}
      };
    },
    2311: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(9482),
        i = o(3987);
      const a = class extends s.Qr {
        static values = {
          showRemoveButtons: { type: Boolean, default: !1 },
          enableSearch: { type: Boolean, default: !1 },
          noResultsText: { type: String, default: "" },
          placeholder: { type: String, default: "" },
          delimiter: { type: String, default: "" },
          maxItemCount: { type: Number, default: 0 },
        };
        connect() {
          this.element.dataset.active || this.createChoice(this.element);
        }
        createChoice(e) {
          let t = {
            removeItemButton: this.showRemoveButtonsValue,
            searchEnabled: this.enableSearchValue,
            shouldSort: !1,
            allowHTML: !0,
          };
          "" !== this.noResultsTextValue &&
            (t.noResultsText = n.Z.trans(this.noResultsTextValue)),
            this.element.hasAttribute("placeholder") &&
              (t.placeholderValue = this.element.getAttribute("placeholder")),
            "" !== this.placeholderValue &&
              (t.placeholderValue = this.placeholderValue),
            "" !== this.delimiterValue && (t.delimiter = this.delimiterValue),
            0 !== this.maxItemCountValue &&
              (t.maxItemCount = this.maxItemCountValue),
            i.Z.createChoice(e, t);
        }
      };
    },
    2994: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(5350);
      const n = class extends s.default {
        copy(e) {
          e.preventDefault();
          const t =
            ((o = this.sourceTarget.innerHTML || this.sourceTarget.value),
            ((s = document.createElement("textarea")).innerHTML = o),
            s.value);
          var o, s;
          navigator.clipboard.writeText(t).then(() => this.copied());
        }
      };
    },
    6908: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        connect() {
          this.element.addEventListener("play", (e) => {
            e.target.shadowRoot.querySelector("svg").style.transform = "";
          });
        }
      };
    },
    474: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["loadMore", "loadMoreButton"];
        static values = {
          hiddenClass: { type: String, default: "is-hidden" },
          itemClass: { type: String, default: "js-hidden-list-element" },
        };
        connect() {
          this.hasLoadMoreTarget &&
            this.loadMoreTarget.addEventListener(
              "click",
              this.loadMore.bind(this)
            );
        }
        loadMore() {
          this.element
            .querySelectorAll("." + this.itemClassValue)
            .forEach((e) => {
              e.classList.remove(this.hiddenClassValue);
            }),
            this.hasLoadMoreButtonTarget && this.loadMoreButtonTarget.remove();
        }
      };
    },
    7645: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7792);
      const i = class extends s.Qr {
        open(e) {
          e.preventDefault(), new n.Z().open();
        }
        register(e) {
          e.preventDefault(), new n.Z().register();
        }
      };
    },
    3668: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => h });
      var s = o(6599),
        n = o(2947),
        i = o(6301),
        a = o(2406),
        r = o(7063),
        l = o(3032),
        c = o.n(l);
      const d = ["login", "forgotPassword", "register"],
        u = {
          login: { id: "tab-login" },
          forgotPassword: { id: "tab-forgot" },
          register: { id: "tab-register" },
        },
        h = class extends s.Qr {
          static targets = [
            "loading",
            "loginTab",
            "forgotPasswordTab",
            "registerTab",
          ];
          static values = {
            redirectUrl: { type: String, default: window.location.href },
          };
          initialize() {
            r.Z.addListener("show_loading", () => this._showLoading()),
              r.Z.addListener("hide_loading", () => this._hideLoading());
          }
          connect() {
            "login" === this.element.dataset.open
              ? this._doShowLogin()
              : "register" === this.element.dataset.open &&
                this._doShowRegister();
          }
          showForgotPassword(e) {
            e.preventDefault();
            let t = this._getElement("forgotPassword");
            null === t
              ? (this._showLoading(),
                n.Z.get(i.Z.generate("tv_forgot_password")).then((e) => {
                  let t = this._createContainer("tab-forgot"),
                    o = (0, a.Hk)(e.data);
                  t.appendChild(o), this._renderView(t);
                }))
              : this._changeToTab(t);
          }
          _createContainer(e) {
            let t = document.createElement("div");
            return (
              t.classList.add("content-tabs__item", "active", "js-tab"),
              (t.id = e),
              t
            );
          }
          _getElement(e) {
            let t = u[e].id;
            return this._getElementById(t);
          }
          _getElementById(e) {
            return this.element.querySelector("#" + e);
          }
          showLogin(e) {
            e.preventDefault(), this._doShowLogin();
          }
          _doShowLogin() {
            let e = this._getElement("login");
            null === e
              ? n.Z.get(i.Z.generate("tv_login_csrf")).then((e) => {
                  let t = e.data.token,
                    o = c()({ from_url: this.redirectUrlValue, csrf_value: t }),
                    s = this._createContainer("tab-login");
                  s.appendChild((0, a.Hk)(o)), this._renderView(s);
                })
              : this._changeToTab(e);
          }
          showRegister(e) {
            e.preventDefault(), this._doShowRegister();
          }
          _doShowRegister() {
            let e = this._getElement("register");
            null === e
              ? (this._showLoading(),
                n.Z.get(
                  i.Z.generate("tv_register_ajax", {
                    fromUrl: this.redirectUrlValue,
                  })
                ).then((e) => {
                  let t = this._createContainer("tab-register"),
                    o = (0, a.Hk)(e.data);
                  t.appendChild(o), this._renderView(t);
                }))
              : this._changeToTab(e);
          }
          _showLoading() {
            this.loadingTarget.classList.add("is-visible");
          }
          _hideLoading() {
            this.loadingTarget.classList.remove("is-visible");
          }
          _renderView(e) {
            this._hideTabs(), this.element.appendChild(e), this._hideLoading();
          }
          _changeToTab(e) {
            this._hideTabs(), e.classList.add("active");
          }
          _hideTabs() {
            d.forEach((e) => {
              let t = this._getElement(e);
              t && t.classList.remove("active");
            });
          }
        };
    },
    9728: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599);
      const n = class {
          constructor(e) {
            let t = document.getElementById("js-user-map");
            if (null === t) return;
            let o = e.latitude,
              s = e.longitude,
              n = e.location;
            this.setInputs(),
              (this.map = new google.maps.Map(t, {
                center: new google.maps.LatLng(o, s),
                zoom: 13,
              })),
              (this.geocoder = new google.maps.Geocoder()),
              (this.autocomplete = new google.maps.places.Autocomplete(
                this.inputLocation
              )),
              this.autocomplete.bindTo("bounds", this.map),
              (this.marker = new google.maps.Marker({
                map: this.map,
                anchorPoint: new google.maps.Point(0, -29),
              })),
              this.marker.setPosition(new google.maps.LatLng(o, s)),
              (this.inputLocation.value = n),
              this.addListenerMap();
          }
          setInputs() {
            let e = document.querySelector(".js-map-form");
            (this.inputLocation = e.querySelector(".location_location")),
              (this.selectCountry = e.querySelector(".location_country")),
              (this.inputCityToSend = e.querySelector(".location_city")),
              (this.inputLocationToSend =
                e.querySelector(".location_location")),
              (this.inputLongitudeToSend = e.querySelector(
                ".location_longitude"
              )),
              (this.inputLatitudeToSend =
                e.querySelector(".location_latitude"));
          }
          addListenerMap() {
            google.maps.event.addListener(
              this.autocomplete,
              "place_changed",
              () => {
                let e = this.autocomplete.getPlace();
                this.showInMap(e);
              }
            );
          }
          geocode() {
            this.geocoder.geocode(
              { address: this.inputLocation.value, partialmatch: !0 },
              (e, t) => {
                t === google.maps.GeocoderStatus.OK && e.length > 0
                  ? this.showInMap(e[0])
                  : console.error("There are no results");
              }
            );
          }
          showInMap(e) {
            if ((this.marker.setVisible(!1), e.geometry)) {
              if (
                (e.geometry.viewport
                  ? this.map.fitBounds(e.geometry.viewport)
                  : (this.map.setCenter(e.geometry.location),
                    this.map.setZoom(17)),
                this.marker.setPosition(e.geometry.location),
                this.marker.setVisible(!0),
                e.address_components)
              ) {
                this.inputCityToSend.value = "";
                for (var t = 0; t < e.address_components.length; t++) {
                  var o = e.address_components[t];
                  this._updateCountry(o), this._updateCity(o);
                }
              }
              (this.inputLocationToSend.value = e.formatted_address),
                (this.inputLongitudeToSend.value = e.geometry.location.lng()),
                (this.inputLatitudeToSend.value = e.geometry.location.lat());
            }
          }
          _updateCountry(e) {
            if (-1 === e.types.indexOf("country")) return;
            let t = this._indexMatchingDataId(this.selectCountry, e.short_name);
            this.selectCountry.selectedIndex = t;
          }
          _indexMatchingDataId(e, t) {
            for (var o = 0; o < e.length; o++)
              if (e[o].dataset.id === t) return o;
            return null;
          }
          _updateCity(e) {
            -1 !== e.types.indexOf("locality") &&
              (this.inputCityToSend.value = e.long_name);
          }
        },
        i = class extends s.Qr {
          connect() {
            let e = this._getLocationSettings(),
              t = new n({
                latitude: e.latitude,
                longitude: e.longitude,
                location: e.location,
              });
            this.element.addEventListener("keydown", (e) => {
              13 === (e.keyCode ? e.keyCode : e.which) &&
                (e.preventDefault(), t.geocode());
            });
          }
          _getLocationSettings() {
            let e = document.querySelector(".js-map-settings");
            return e
              ? {
                  latitude: e.dataset.lat || -33.8688,
                  longitude: e.dataset.lng || 151.2195,
                  location: e.dataset.location || "",
                }
              : { latitude: -33.8688, longitude: 151.2195, location: "" };
          }
        };
    },
    2304: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(5716);
      const i = class extends s.Qr {
        static values = {
          duration: { type: Number, default: 10 },
          clonedTimes: { type: Number, default: 3 },
        };
        connect() {
          setTimeout(() => {
            this.move();
          }, 200);
        }
        move() {
          let e = this.element.querySelector("div");
          for (let t = 0; t < this.clonedTimesValue; t++) {
            let t = e.cloneNode(!0);
            e.after(t);
          }
          n.p8
            .to(this.element.querySelectorAll("div"), {
              duration: this.durationValue,
              xPercent: -100,
              ease: "none",
              repeat: -1,
            })
            .timeScale(1);
        }
      };
    },
    6579: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["content", "close"];
        open(e) {
          this.element.classList.add("is-visible"),
            (this.contentTarget.innerHTML = e);
        }
      };
    },
    1079: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(5432),
        i = o(2947),
        a = o(2406);
      const r = class extends s.Qr {
        static values = {
          url: { type: String, default: "" },
          size: { type: String, default: "small" },
        };
        open() {
          let e = new n.Z({ size: this.sizeValue, remove_after_close: !0 });
          i.Z.get(this.urlValue).then((t) => {
            let o = (0, a.Hk)(t.data);
            o.firstChild.classList &&
              o.firstChild.classList.remove("is-hidden"),
              e.show(o, !0);
          });
        }
      };
    },
    5594: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(5432);
      const i = class extends s.Qr {
        static values = {
          id: { type: String, default: "" },
          class: { type: String, default: "" },
          size: { type: String, default: "large" },
          clone: { type: Boolean, default: !0 },
        };
        initialize() {
          this.element.addEventListener("click", (e) => {
            e.preventDefault();
            const t = "" === this.sizeValue ? null : this.sizeValue,
              o = "" === this.classValue ? null : this.classValue;
            let s = new n.Z({
              size: t,
              remove_after_close: !0,
              extra_class: o,
            });
            this.cloneValue ||
              s.setCloseCallback(() => {
                if (null === this.parentElement) return;
                let e = this.getModalElement();
                e.classList.add("is-hidden"), this.parentElement.appendChild(e);
              }),
              s.show(this.getContent());
          });
        }
        connect() {
          null === this.getModalElement()
            ? this.element.classList.add("is-hidden")
            : (this.parentElement = this.getModalElement().parentNode);
        }
        getContent() {
          let e = this.getModalElement();
          return (
            (e = this.cloneValue
              ? e.cloneNode(!0)
              : e.parentNode.removeChild(e)),
            e.classList.remove("is-hidden"),
            e
          );
        }
        getModalElement() {
          if ("" !== this.idValue) return document.getElementById(this.idValue);
          if ("" !== this.classValue)
            return document.querySelector("." + this.classValue);
          throw new Error("You should provide an id or class");
        }
      };
    },
    9138: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => g });
      var s = o(6599),
        n = o(5432),
        i = o(9482),
        a = o(1317),
        r = o(3578),
        l = o(3414),
        c = o(7255),
        d = o.n(c),
        u = o(2406),
        h = o(6301),
        p = o(2947);
      let m = new (o(3697).Z)();
      function _(e) {
        new n.Z().openConfirmation(
          "The collection will be removed.",
          i.Z.trans("app.delete_collection"),
          function () {
            var t;
            (t = e.id),
              p.Z.delete(h.Z.generate("tv_collection_remove", { id: t }))
                .then(() => {
                  a.Z.remove(),
                    r.Z.subtracts(),
                    (0, l.O)(
                      "success",
                      i.Z.trans("app.notification.changes_saved")
                    ),
                    document.getElementById(t).remove();
                })
                .catch(() => {
                  a.Z.remove();
                }),
              a.Z.fixed("app.deleting_collection");
          }
        );
      }
      const g = class extends s.Qr {
        static values = { model: { type: Object, default: {} } };
        remove(e) {
          e.preventDefault(), _(this.modelValue);
        }
        edit(e) {
          var t;
          e.preventDefault(),
            (t = this.modelValue),
            o
              .e(2138)
              .then(o.bind(o, 2138))
              .then(function (e) {
                var o = new e.default({ modelData: t, dispatcher: m });
                m.addListener("updated", function (e) {
                  let t = document.getElementById(e.getId());
                  (t.querySelector(".js-title-collection").innerText =
                    e.getName()),
                    (t.querySelector(".js-category-collection").innerText =
                      e.getCategory().name),
                    o.close();
                }),
                  o.on("close", () => {
                    o.close();
                  }),
                  o.open();
              });
        }
        editFromDetail(e) {
          var t;
          e.preventDefault(),
            (t = this.modelValue),
            o
              .e(2138)
              .then(o.bind(o, 2138))
              .then(function (e) {
                var o = new e.default({ modelData: t, dispatcher: m });
                m.addListener("updated", () => {
                  (0, l.O)(
                    "success",
                    i.Z.trans("app.notification.changes_saved")
                  ),
                    o.close(),
                    window.location.reload();
                }),
                  o.open();
              });
        }
        share(e) {
          e.preventDefault(),
            new n.Z({ size: "small" }).show(
              (0, u.Hk)(d()({ collection: this.modelValue }))
            );
        }
      };
    },
    7758: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        initialize() {
          window.addEventListener("resize", this.paletteViewport);
        }
        connect() {
          this.paletteViewport();
        }
        paletteViewport() {
          this.element &&
            ((window.innerWidth || document.documentElement.clientWidth) > 1023
              ? (this.element.classList.remove("list-palette--v"),
                this.element.classList.add("list-palette--h"))
              : (this.element.classList.remove("list-palette--h"),
                this.element.classList.add("list-palette--v")));
        }
      };
    },
    7889: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(1636),
        i = o(3290),
        a = o(1415);
      const r = class extends s.Qr {
        static values = { url: { type: String, default: "" } };
        preview(e) {
          if (e.metaKey || e.ctrlKey) return;
          if (i.Z.isLightboxOpen()) return;
          e.preventDefault();
          let t = this.element.href;
          a.Z.gtag("event", "page_view", { page_location: t }),
            (0, n.Z)(t, this.urlValue, !0);
        }
      };
    },
    426: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static values = { model: { type: Object, default: {} } };
        connect() {
          this._updateCollectionCount();
        }
        _updateCollectionCount() {
          let e = this.element.querySelector(".js-user-profile");
          if (null !== e) {
            var t = this.element.querySelector(".js-collections-count");
            null !== t && (t.textContent = e.dataset.collectionCount);
          }
        }
      };
    },
    3442: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(1102),
        i = o(6301),
        a = o(7051),
        r = o(5432),
        l = o(2406);
      const c = class extends s.Qr {
        open(e) {
          let t = e.currentTarget;
          if (n.Z.isLoading(t)) return !1;
          n.Z.addLoading(t),
            fetch(
              i.Z.generate("tv_show_lightbox_add_projects", {
                username: a.Z.username,
              }),
              {
                method: "get",
                headers: { "X-Requested-With": "XMLHttpRequest" },
              }
            )
              .then((e) => e.text())
              .then(function (e) {
                new r.Z({ size: "large", remove_after_close: !0 }).show(
                  (0, l.Hk)(e)
                ),
                  n.Z.removeLoading(t);
              });
        }
      };
    },
    2436: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(5432),
        i = o(3414),
        a = o(2947);
      const r = class extends s.Qr {
        delete(e) {
          e.preventDefault();
          let t = this.element;
          new n.Z().confirmDelete(function () {
            a.Z.post(t.href)
              .then(() => {
                let e = t.closest(".js-item");
                e && (e.remove(), window.location.reload()),
                  (e = t.closest(".js-item-project-profile")),
                  e && e.remove(),
                  (0, i.O)(
                    "success",
                    "Your project has been removed successfully."
                  );
              })
              .catch(() => {
                (0, i.O)(
                  "error",
                  "There has been an error deleting project, please try again"
                );
              });
          }, "This action is irreversible, once this content is deleted it cannot be restored, click delete to confirm.\n");
        }
      };
    },
    9262: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(2157),
        i = o(6301);
      function a(e) {
        let t = null;
        t = e.result.split(";")[0].includes("video")
          ? '<video data-action="click->project--items-form#show" class="img-gallery js-gallery-large-img" autoplay muted><source src="' +
            e.result +
            '" type="video/mp4"></video>'
          : '<img data-action="click->project--items-form#show" class="img-gallery js-gallery-large-img" src="' +
            e.result +
            '" />';
        let o = document.createElement("li");
        o.classList.add("thumb", "js-thumb", "js-new"),
          (o.innerHTML = `\n            <div class="gallery-item">\n                ${t}\n                <span data-action="click->project--items-form#remove" class="button button--small--circle"></span>\n            </div>\n            <div class="js-box-loading loading is-visible open"><div class="loading__spinner"></div></div>\n        `);
        let s = document.querySelector(".js-gallery-thumbs"),
          i = document.querySelector("li.js-upload");
        return (
          s.insertBefore(o, i ? document.querySelector("li.js-upload") : null),
          setTimeout(function () {
            o.querySelector(".js-box-loading").classList.remove("open");
          }, 500),
          setTimeout(function () {
            o.querySelector(".js-box-loading").remove();
            let e = document
              .createRange()
              .createContextualFragment(
                n.Z.redesignIcon("remove", 14, "white")
              );
            o.querySelector("span").appendChild(e);
          }, 1e3),
          document.getElementById("js-drag-and-drop-info").offsetWidth &&
            o.classList.add("selected"),
          t
        );
      }
      function r(e) {
        let t = document.getElementById("js-gallery-large-container");
        document
          .getElementById("js-drag-and-drop-info")
          .classList.add("is-hidden");
        let o = document.createRange().createContextualFragment(e);
        t.insertBefore(o, null);
        let s = document.createElement("li");
        s.classList.add("upload", "js-upload"),
          (s.innerHTML =
            '\n            <div class="gallery-item upload">\n                <input type="file" multiple class="input-file" data-action="change->project--items-form#addFile">\n                <svg width="139" height="139" viewBox="0 0 139 139" fill="none">\n                    <path d="M104.11 42.117C97.994 28.495 84.511 19.738 69.5 19.738c-15.013 0-28.496 8.757-34.612 22.379C19.32 42.812 6.95 55.6 6.95 71.168c0 15.985 13.066 29.051 29.051 29.051h4.448a2.196 2.196 0 002.224-2.224 2.196 2.196 0 00-2.224-2.224H36c-13.483 0-24.603-10.981-24.603-24.603 0-13.483 10.981-24.603 24.881-24.603 7.228.139 14.04 3.336 18.626 8.896.417.556 1.112.834 1.668.834.556 0 .973-.139 1.39-.556.973-.834 1.112-2.224.278-3.197-4.726-5.699-11.398-9.313-18.626-10.286 5.7-11.12 17.097-18.07 29.746-18.07 13.761 0 25.854 8.201 31.136 20.989.278.834 1.529 1.39 2.363 1.39 13.483 0 24.603 10.981 24.603 24.603 0 13.483-10.981 24.603-24.603 24.603h-4.448a2.196 2.196 0 00-2.224 2.224c0 1.251.973 2.224 2.224 2.224h4.448c15.985 0 29.051-13.066 29.051-29.051.139-15.568-12.093-28.217-27.8-29.051z" fill="#272C2E"/>\n                    <path class="arrow" d="M70.471 76.172c-.139-.139-.139-.139-.278-.139-.139-.139-.278-.139-.417-.278-.139-.139-.417-.139-.695-.139h-.139c-.278 0-.556 0-.834.139-.139 0-.278.139-.417.278-.139.139-.278.139-.278.278l-15.29 14.456c-.834.834-.973 2.224-.139 3.197.834.834 2.224.973 3.197.139l11.537-10.981v33.916c0 1.251.973 2.224 2.224 2.224 1.251 0 2.224-.973 2.224-2.224V82.983l12.232 11.12c.417.417.973.556 1.53.556.555 0 1.25-.278 1.667-.695.834-.973.834-2.363-.139-3.197L70.471 76.172z" fill="#272C2E"/>\n                </svg>\n            </div>\n            '),
          document.querySelector(".js-gallery-thumbs").insertBefore(s, null);
      }
      function l(e) {
        var t = new FormData();
        t.append("file", e),
          fetch(i.Z.generate("tv_profile_upload_file"), {
            method: "POST",
            body: t,
          })
            .then((e) => e.json())
            .then(function (e) {
              e.errors
                ? alert(e.errors)
                : (function (e) {
                    let t = document.getElementById("containerItems"),
                      o = t.dataset.prototype,
                      s = t.dataset.index || 0,
                      n = o.replace(/__name__/g, s);
                    t.dataset.index = s + 1;
                    let i = document.querySelector(".js-new");
                    i.classList.remove("js-new");
                    let a = document.createRange().createContextualFragment(n);
                    a.querySelector("div").classList.add("is-hidden"),
                      i.append(a),
                      (document.getElementById(
                        "user_project_items_" + s + "_temporaryPath"
                      ).value = e),
                      (document.getElementById(
                        "user_project_items_" + s + "_position"
                      ).value = s);
                  })(e.id);
            });
      }
      const c = class extends s.Qr {
        static targets = ["largeContainer", "thumbsContainer"];
        addFile() {
          if (
            (document.querySelectorAll(".js-empty").forEach(function (e) {
              e.remove();
            }),
            window.File && window.FileList && window.FileReader)
          )
            for (var e = event.target.files, t = 0; t < e.length; t++) {
              var o = e[t];
              let s = new FileReader();
              s.addEventListener("load", function (e) {
                let t = a(e.target);
                document.getElementById("js-drag-and-drop-info").offsetWidth &&
                  r(t);
              }),
                s.readAsDataURL(o),
                l(o);
            }
          else console.log("Your browser does not support File API");
        }
        remove(e) {
          let t = e.currentTarget;
          if (
            (t.closest("li").remove(),
            !this.thumbsContainerTarget.querySelector(".js-thumb"))
          ) {
            document
              .getElementById("js-drag-and-drop-info")
              .classList.remove("is-hidden"),
              this.thumbsContainerTarget.querySelector("li.js-upload").remove();
            for (let e = 0; e < 6; e++)
              this.thumbsContainerTarget.innerHTML +=
                '\n                <li class="empty js-empty">\n                    <div class="gallery-item"></div>\n                </li>\n                ';
          }
          if (t.closest("li").classList.contains("selected")) {
            let e = this.largeContainerTarget.querySelector(
              ".js-gallery-large-img"
            );
            e && e.remove();
            let t = document.querySelector(".js-gallery-thumbs .js-thumb");
            if (t) {
              t.classList.add("selected");
              let e = t.querySelector(".js-gallery-large-img");
              this.largeContainerTarget.insertAdjacentElement(
                "beforeend",
                e.cloneNode(!0)
              );
            }
          }
        }
        show(e) {
          let t = e.currentTarget,
            o = this.largeContainerTarget.querySelector(
              ".js-gallery-large-img"
            );
          o && o.remove(),
            this.largeContainerTarget.insertAdjacentElement(
              "beforeend",
              t.cloneNode(!0)
            ),
            this.thumbsContainerTarget
              .querySelectorAll(".js-thumb")
              .forEach(function (e) {
                e.classList.remove("selected");
              }),
            t.closest("li").classList.add("selected");
        }
      };
    },
    6266: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(1474),
        i = o(6301),
        a = o(7051),
        r = o(3414),
        l = o(9482);
      const c = class extends s.Qr {
        initialize() {
          (this.changePositions = []), (this.indexesOrdered = []);
        }
        connect() {
          n.ZP.create(this.element, {
            handle: ".js-box-item",
            animation: 150,
            emptyInsertThreshold: 10,
            onUpdate: (e) => {
              this.changePositions.push(e.oldIndex),
                this.changePositions.push(e.newIndex);
              let t = e.from.querySelectorAll(".js-item-project-profile");
              (this.indexesOrdered = []),
                [].forEach.call(t, (e) => {
                  this.indexesOrdered.push(e.dataset.sortId);
                }),
                this._sortItems();
            },
          });
        }
        _sortItems() {
          fetch(i.Z.generate("tv_sort_projects", { username: a.Z.username }), {
            method: "post",
            body: JSON.stringify({
              sorted_items: this.indexesOrdered,
              first: this._setFirstAndLastItemSorted().first,
              last: this._setFirstAndLastItemSorted().last,
            }),
            headers: { "X-Requested-With": "XMLHttpRequest" },
          })
            .then((e) => e.text())
            .then(() => {
              (0, r.O)("success", l.Z.trans("Your work has been sorted."));
            });
        }
        _setFirstAndLastItemSorted() {
          return {
            first: Math.min(...this.changePositions),
            last: Math.max(...this.changePositions),
          };
        }
      };
    },
    8960: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(1474);
      const i = class extends s.Qr {
        connect() {
          n.ZP.create(this.element, {
            handle: ".thumb",
            animation: 150,
            emptyInsertThreshold: 10,
            onUpdate: function (e) {
              let t = e.from.querySelectorAll(".js-thumb"),
                o = 0;
              [].forEach.call(t, function (e) {
                e.querySelector(".js-position").value = o++;
              });
            },
          });
        }
      };
    },
    9918: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => u });
      var s = o(6599),
        n = o(2347),
        i = o(2316),
        a = o.n(i),
        r = o(6301),
        l = o(3695),
        c = o(2947);
      const d = a().Model.extend({
          defaults: {
            totalNet: 0,
            taxes: 0,
            currency: "",
            userHasToPayTaxes: !1,
          },
          coupon: null,
          checkCoupon: function (e) {
            let t = new FormData();
            t.append("code", e),
              c.Z.post(r.Z.generate("tv_coupon_cart_check"), t)
                .then(() => {
                  window.location.reload();
                })
                .catch((e) => {
                  l.Z.dispatch("coupon_error", e.response.data.message);
                });
          },
          removeCoupon: function () {
            c.Z.post(r.Z.generate("tv_coupon_cart_remove")).then(() => {
              window.location.reload();
            });
          },
          changeUserTax: function (e) {
            this.set("userHasToPayTaxes", e);
          },
          getTotal: function () {
            return this.hasToPayTaxes()
              ? (
                  Number(this.get("totalNet")) + Number(this.get("taxes"))
                ).toFixed(2)
              : this.get("totalNet");
          },
          hasToPayTaxes: function () {
            return this.get("taxes") > 0 && this.get("userHasToPayTaxes");
          },
          getCurrency: function () {
            return this.get("currency");
          },
          getTotalWithCurrency: function () {
            return (
              ("EUR" === this.getCurrency() ? "â‚¬" : "$") + this.getTotal()
            );
          },
          isFree: function () {
            return 0 === parseInt(this.getTotal());
          },
        }),
        u = class extends s.Qr {
          static values = { options: { type: Object, default: {} } };
          initialize() {
            new n.Z({ model: new d(this.optionsValue) });
          }
        };
    },
    9162: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(1102),
        i = o(3695),
        a = o(1317);
      const r = class extends s.Qr {
        static targets = ["message", "code", "applyButton", "formMessage"];
        initialize() {
          i.Z.addListener("coupon_error", (e) => {
            this.showError(e);
          }),
            i.Z.addListener("coupon_reset", () => {
              this.clear();
            });
        }
        open() {
          this.messageTarget.classList.add("is-hidden"),
            this.element.classList.add("is-open");
        }
        check(e) {
          13 === (e.keyCode || e.which) && (e.preventDefault(), this.apply());
        }
        showError(e) {
          n.Z.isLoading(this.applyButtonTarget) &&
            n.Z.removeLoading(this.applyButtonTarget),
            a.Z.remove(),
            (this.formMessageTarget.innerText = e);
        }
        apply() {
          n.Z.isLoading(this.applyButtonTarget) ||
            (n.Z.addLoading(this.applyButtonTarget),
            this.clearFormMessage(),
            i.Z.dispatch("coupon_check", this.codeTarget.value));
        }
        clear() {
          a.Z.fixed("Updating cart"),
            (this.codeTarget.value = ""),
            (document.querySelector(".js-coupon-code-apply").value = ""),
            this.clearFormMessage(),
            i.Z.dispatch("coupon_clear");
        }
        clearFormMessage() {
          this.formMessageTarget.innerText = "";
        }
      };
    },
    9744: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => x });
      var s = o(6599);
      const n = class {
        constructor(e) {
          (this.shortName = e.shortName),
            (this.name = e.name),
            (this.tax = e.tax),
            (this.product_id = e.product_id),
            (this.product_uuid = e.product_uuid),
            (this.price = e.price),
            (this.type = e.type),
            (this.has_shipping = e.has_shipping),
            (this.payment_options = e.payment_options),
            (this.discount = e.discount),
            (this.stock = e.stock);
        }
        getName() {
          return this.name;
        }
        getPrice() {
          return this.price;
        }
        getShortName() {
          return this.shortName;
        }
        getPaymentOptions() {
          return this.payment_options;
        }
        getStock() {
          return this.stock;
        }
        getProductUuid() {
          return this.product_uuid;
        }
        getUserDiscount() {
          return this.discount;
        }
        getTax() {
          return this.tax;
        }
        hasShipping() {
          return this.has_shipping;
        }
      };
      var i = o(6301),
        a = o(2211),
        r = o.n(a),
        l = o(3609),
        c = o(8030),
        d = o(8215),
        u = o(2347),
        h = o(1317),
        p = o(3695);
      window.dataLayer = window.dataLayer || [];
      var m = u.Z.extend({
        events: {
          "click .js-product": "_selected",
          "click .js_pay_with_stock": "_payWithStock",
        },
        initialize: function () {
          this.model.on("discount_processed", this.renderTotals, this),
            this.model.on("render_totals", this.renderTotals, this),
            this.model.on("render_summary", this.renderSummary, this),
            this.model.on("coupon_ok", (e) => {
              this.el.querySelector(".js-coupon-code-apply").value = e;
            }),
            this.renderFirst(),
            this.renderPaymentButtons(),
            this.setStripeAsDefaultPaymentActived();
          var e = document.querySelector(".js-coupon-code-apply").value;
          "" != e && this.model.checkCoupon(e),
            p.Z.addListener("coupon_check", (e) => {
              this.model.checkCoupon(e);
            }),
            p.Z.addListener("coupon_clear", () => {
              this.model.removeCoupon();
            });
          try {
            this._triggerAddCart();
          } catch (e) {
            console.error("there has been an error", e);
          }
        },
        renderFirst: function () {
          var e = document.querySelector(".js-product input:checked");
          this.setProduct(e.parentNode);
        },
        selectPayment: function (e) {
          "stock" === e
            ? this.model.showPayingWithStock()
            : this.model.hidePayingWithStock();
        },
        setProduct: function (e) {
          var t = JSON.parse(e.dataset.product),
            o = new n(t);
          this.model.setProduct(o),
            this.renderTotals(),
            this.refreshPaymentOptions(o);
        },
        renderSummary: function () {
          document.getElementById("totals").innerHTML = r()(
            this.model.getSummary()
          );
        },
        renderTotals: function () {
          h.Z.remove(),
            this.renderSummary(),
            this.model.isFree()
              ? this.showOnlyFreeMethod()
              : this.refreshPaymentOptions(this.model.product);
        },
        refreshPaymentOptions: function (e) {
          var t = this,
            o = this.el.querySelectorAll(".js-payment-option");
          [].forEach.call(o, function (e) {
            e.classList.add("is-hidden");
          });
          let s = this.el.querySelectorAll(".js-payment-tab");
          if (
            ([].forEach.call(s, function (e) {
              e.classList.remove("is-active");
            }),
            this.refreshStock(e),
            0 == this.model.total)
          )
            return;
          [].forEach.call(e.getPaymentOptions(), function (e) {
            t.el
              .querySelector(".js-payment-option.js-" + e)
              .classList.remove("is-hidden");
          });
          let n = e.getPaymentOptions()[0];
          (t.el.querySelector("#" + n + "-radio").checked = !0),
            t.el
              .querySelector(".js-payment-tab.js-" + n)
              .classList.add("is-active");
        },
        _selected: function (e) {
          (e.currentTarget.querySelector(".js-product-radio").checked = !0),
            this.setProduct(e.currentTarget),
            this.model.hasCoupon() &&
              this.model.checkCoupon(this.model.coupon.code);
        },
        refreshStock: function (e) {
          var t = e.getStock(),
            o = document.querySelector(".js-stock");
          t &&
            (o.classList.remove("is-hidden"),
            document.querySelectorAll(".js-stock-number").forEach(function (e) {
              e.innerText = t;
            }),
            (document.querySelector(".js-stock-type").innerText = e
              .getName()
              .toLowerCase()),
            o.classList.remove("hidden"));
        },
        _triggerAddCart: function () {
          if (!l.Z.hasAccepted(c.r$)) return;
          let e = [];
          e.push({
            item_id: this.model.getId(),
            item_name: this.model.product.getName(),
            price: this.model.total,
            item_category: this.model.getType(),
            quantity: 1,
          });
          let t = {
            content_ids: [this.model.getId()],
            content_name: this.model.product.getName(),
            content_type: "product",
            value: this.model.total,
            currency: this.model.getCurrency(),
            content_category: this.model.getType(),
          };
          window.dataLayer.push({
            event: "add_to_cart",
            ecommerce: { items: e, fb_items: t },
          }),
            d.Z.log("add_to_cart", { items: e, fb_items: t });
        },
        _createPaypalOrder: function () {
          return fetch(i.Z.generate("tv_payment_paypal_order_create"), {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              description: this.model.product.getName(),
              currency: this.model.getCurrency(),
              total: this.model.total,
              return_url: window.location.href,
            }),
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return e.orderID;
            });
        },
        _payWithStock: function (e) {
          e.preventDefault(), this._showLoading(), this._sendForm();
        },
      });
      const _ = m;
      var g = o(2316),
        v = o.n(g);
      const f = class {
        static roundTwoDecimals(e) {
          return (
            (e = +(+e.toFixed(3) - 0.005).toFixed(3)), Math.ceil(100 * e) / 100
          );
        }
      };
      var y = o(2947);
      const b = { amount: 0, description: "", type: "" };
      const w = v().Model.extend({
          defaults: {
            input: "",
            price: 0,
            id: 0,
            shipping_amount: 0,
            user_tax: !0,
            vat_shipping_amount: 0,
            vat: 0,
            type: null,
            card_id: null,
            has_shipping: !1,
          },
          product: null,
          total: 0,
          vat_amount: 0,
          subtotal: 0,
          coupon: null,
          errorCoupon: null,
          discountObject: b,
          payWithStock: !1,
          getId: function () {
            return this.get("id");
          },
          checkCoupon: function (e) {
            this.errorCoupon = null;
            let t = new FormData();
            t.append("code", e),
              t.append("uuid", this.product.getProductUuid()),
              y.Z.post(i.Z.generate("tv_coupon_check"), t)
                .then((t) => {
                  (this.coupon = t.data),
                    this._applyDiscount(),
                    this.trigger("coupon_ok", e);
                })
                .catch((e) => {
                  (this.coupon = null),
                    p.Z.dispatch("coupon_error", e.response.data.message),
                    (this.errorCoupon = e.response.data.message),
                    this.recalculateTotal(),
                    this.trigger("render_totals");
                });
          },
          changeShippingCost: function (e) {
            this.set("shipping_amount", e),
              this.set("vat_shipping_amount", Math.round(21 * e) / 100),
              this._recalculateAndRender();
          },
          changeUserTax: function (e) {
            this.set("user_tax", e), this._recalculateAndRender();
          },
          _applyDiscount: function () {
            this.recalculateTotal(), this.trigger("discount_processed");
          },
          getType: function () {
            return this.get("type");
          },
          setProduct: function (e) {
            (this.product = e),
              this.set("vat", e.getTax()),
              this.set("has_shipping", e.hasShipping()),
              this.recalculateTotal();
          },
          hasCoupon: function () {
            return null != this.coupon;
          },
          _getCoupon: function () {
            return null == this.coupon
              ? { amount: 0, description: "" }
              : this.coupon;
          },
          recalculateTotal: function () {
            (this.discountObject = this._generateDiscountObject()),
              (this.subtotal = this.product.getPrice()),
              (this.vat_amount = 0),
              this.hasToPayTaxes() &&
                (this.vat_amount = this._getVatForAmount(
                  this.subtotal - this.discountObject.amount
                )),
              (this.total = (
                this.subtotal -
                this.discountObject.amount +
                this.vat_amount +
                this._getShippingAmount() +
                this._getTaxShippingAmount()
              ).toFixed(2));
          },
          showPayingWithStock: function () {
            (this.payWithStock = !0),
              this.recalculateTotal(),
              this.trigger("render_summary"),
              (this.payWithStock = !1);
          },
          hidePayingWithStock: function () {
            (this.payWithStock = !1),
              this.recalculateTotal(),
              this.trigger("render_summary");
          },
          _recalculateAndRender: function () {
            this.recalculateTotal(), this.trigger("render_totals");
          },
          _generateDiscountObject: function () {
            if (this.payWithStock)
              return {
                amount: this.product.getPrice(),
                description: "Paying with stock",
                type: "stock",
              };
            var e = this._getCoupon(),
              t = this.product.getUserDiscount();
            return t.amount > e.amount
              ? { amount: t.amount, description: t.description, type: "user" }
              : {
                  amount: e.amount,
                  description: e.description,
                  type: "coupon",
                };
          },
          _getShippingAmount: function () {
            return this.get("has_shipping") ? this.get("shipping_amount") : 0;
          },
          hasToPayTaxes: function () {
            return this.get("vat") > 0 && this.get("user_tax");
          },
          _getTaxShippingAmount: function () {
            return this.hasToPayTaxes() && this.get("has_shipping")
              ? this.get("vat_shipping_amount")
              : 0;
          },
          getPaymentMethod: function () {
            return this.payment_method;
          },
          _getVatForAmount: function (e) {
            return 0 === this.get("vat")
              ? 0
              : f.roundTwoDecimals((this.get("vat") / 100) * e);
          },
          removeCoupon: function () {
            (this.discountObject = b),
              (this.coupon = null),
              this._recalculateAndRender();
          },
          getSummary: function () {
            return {
              shortName: this._getShortName(),
              subtotal: this._getSubtotal(),
              discount: this._getDiscount(),
              shipping_amount: this._getShippingAmountDescription(),
              vat_shipping_amount: this._getTaxShippingAmountDescription(),
              show_box_coupon:
                null != this.errorCoupon ||
                (null != this._getDiscount() && this.hasCoupon()),
              error_coupon: this.errorCoupon,
              vat: this._getVat(),
              total: this._getTotal(),
              has_coupon: this.hasCoupon(),
            };
          },
          _getVat: function () {
            var e;
            return this.hasToPayTaxes()
              ? ((e = Math.round(100 * this.vat_amount) / 100),
                {
                  name: "VAT (" + this.get("vat") + "%)",
                  price: this.getCurrencySymbol() + Number(e).toFixed(2),
                })
              : null;
          },
          _getShippingAmountDescription: function () {
            return this.get("has_shipping") && 0 !== this.get("shipping_amount")
              ? {
                  name: "Shipping cost",
                  price:
                    this.getCurrencySymbol() +
                    Math.round(100 * this.get("shipping_amount")) / 100,
                }
              : null;
          },
          _getTaxShippingAmountDescription: function () {
            return this.get("has_shipping") && 0 !== this.get("shipping_amount")
              ? {
                  name: "VAT Shipping cost (21%)",
                  price:
                    this.getCurrencySymbol() +
                    Math.round(100 * this.get("vat_shipping_amount")) / 100,
                }
              : null;
          },
          _getDiscount: function () {
            return 0 === this.discountObject.amount
              ? null
              : {
                  name: this.discountObject.description.replace(
                    /^DISCOUNT /,
                    ""
                  ),
                  price:
                    "-" +
                    this.getCurrencySymbol() +
                    Math.round(100 * this.discountObject.amount) / 100,
                  type: this.discountObject.type,
                };
          },
          _getTotal: function () {
            var e = this.total < 0 ? 0 : this.total;
            return {
              className: "text-bold",
              name: "Total",
              price: this.getCurrencySymbol() + e,
            };
          },
          getTotal: function () {
            return this.total;
          },
          isFree: function () {
            return 0 === parseInt(this.getTotal());
          },
          _getSubtotal: function () {
            return {
              name: this.product.getName(),
              price:
                this.getCurrencySymbol() +
                Number(Math.round(100 * this.subtotal) / 100),
            };
          },
          getCurrency: function () {
            return this.get("currency");
          },
          getCurrencySymbol: function () {
            return "EUR" === this.getCurrency() ? "â‚¬" : "$";
          },
          getTotalWithCurrency: function () {
            return this.getCurrencySymbol() + this.getTotal();
          },
          _getShortName: function () {
            return { name: this.product.getShortName() };
          },
        }),
        k = { currency: "US", vat: 1.21 },
        x = class extends s.Qr {
          static values = { options: { type: Object, default: {} } };
          initialize() {
            let e = { ...k, ...this.optionsValue };
            this.paymentView = new _({ model: new w(e) });
          }
          connect() {
            let e = document.querySelector(".js-country");
            if (e && e.value) {
              let t = e.selectedOptions[0];
              this._changeCountry(JSON.parse(t.dataset.customProperties));
            }
          }
          changeCountry(e) {
            this._changeCountry(JSON.parse(e.detail.choice.customProperties));
          }
          _changeCountry(e) {
            if (!e) return;
            let t = e.rate;
            -1 === ["CA", "JP", "AU", "US", "NZ"].indexOf(e.id)
              ? document.querySelector(".js-cif").classList.add("hidden")
              : document.querySelector(".js-cif").classList.remove("hidden"),
              this._changeShippingAmount(t);
          }
          _changeShippingAmount(e) {
            this.paymentView.changeShippingCost(e);
          }
        };
    },
    5875: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(6095),
        i = o.n(n);
      const a = class extends s.Qr {
        static targets = ["wysiwyg", "textarea"];
        static values = { score: { type: Object, default: {} } };
        connect() {
          let e = new (i())(this.wysiwygTarget, {
            modules: {
              toolbar: [
                ["bold", "italic", "link"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
              ],
            },
            theme: "snow",
          });
          e.on("editor-change", () => {
            this.textareaTarget.value = e.root.innerHTML;
          }),
            e.clipboard.addMatcher(Node.ELEMENT_NODE, (e, t) => {
              let o = [];
              return (
                t.ops.forEach((e) => {
                  e.insert &&
                    "string" == typeof e.insert &&
                    o.push({ insert: e.insert });
                }),
                (t.ops = o),
                t
              );
            });
        }
      };
    },
    5359: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(6301),
        i = o(2947);
      const a = class extends s.Qr {
        static values = { isRead: Boolean, notificationId: String };
        static targets = ["body"];
        read() {
          this.bodyTarget.classList.toggle("is-hidden"),
            this.isReadValue ||
              i.Z.post(
                n.Z.generate("tv_user_notification_markAsRead", {
                  notificationId: this.notificationIdValue,
                })
              );
        }
      };
    },
    1876: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(2947),
        i = o(6301),
        a = o(3414),
        r = o(9482);
      const l = class extends s.Qr {
        static values = {
          identifier: { type: String, default: "" },
          type: { type: String, default: "" },
        };
        remove() {
          let e = i.Z.generate("tv_remove_work_to_gallery", {
              identifier: this.identifierValue,
              type: this.typeValue,
            }),
            t = this;
          document
            .querySelector(".js-loading-" + this.identifierValue)
            .classList.add("is-visible"),
            n.Z.post(e).then(function (e) {
              e &&
                ((t.element.style.opacity = "0"),
                setTimeout(() => t.element.remove(), 500),
                1 ===
                  document.querySelectorAll(
                    ".js-elements-container li.js-item-project-profile"
                  ).length &&
                  document
                    .querySelector(".js-no-results-gallery")
                    .classList.remove("is-hidden"),
                (0, a.O)("success", r.Z.trans("Your work has been removed."))),
                document
                  .querySelector(".js-loading-" + this.identifierValue)
                  .classList.remove("is-visible");
            });
        }
      };
    },
    5656: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(5432),
        i = o(6301),
        a = o(4095),
        r = o(2947);
      const l = class extends s.Qr {
        static values = { id: { type: String, default: "" } };
        play() {
          let e = new n.Z({ remove_after_close: !0 }),
            t = (function () {
              let e = document.createElement("div");
              e.classList.add("model_content");
              let t = document.createElement("div");
              return (
                t.classList.add("modal__video", "js-boxVideo"),
                (t.innerHTML =
                  '<video class="video-js" width="640" height="360"></video>'),
                e.appendChild(t),
                e
              );
            })();
          this.getUrlVideoCDN(t), e.show(t);
        }
        getUrlVideoCDN(e) {
          r.Z.get(
            i.Z.generate("tv_course_lecture_open_source", { id: this.idValue })
          ).then((t) => {
            this.appendVideoCDN(t.data.videoUrl, e);
          });
        }
        appendVideoCDN(e, t) {
          let o = t.querySelector("video");
          new a.Z(o, { aspectRatio: "16:9" }).attachSource(e);
        }
      };
    },
    290: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7545);
      const i = class extends s.Qr {
        static targets = ["selected"];
        connect() {
          (0, n.O8)(this);
        }
        clickOutside(e) {
          e.target.closest(".search-dropdown") ||
            this.element.classList.remove("is-active");
        }
        showSelector() {
          this.element.classList.toggle("is-active");
        }
        selectItem(e) {
          this.element
            .querySelectorAll(".search-dropdown__option")
            .forEach((e) => {
              e.classList.remove("is-selected");
            }),
            e.currentTarget.classList.add("is-selected");
        }
      };
    },
    7667: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(2861),
        i = o(6301),
        a = o(2406);
      const r = class extends s.Qr {
        static targets = [
          "input",
          "search",
          "overlay",
          "defaultView",
          "headerMain",
          "headerMainOpen",
          "navHeaderMain",
          "autocompleteView",
          "autocompleteTags",
          "autocompleteTagsContainer",
          "autocompleteUsers",
          "autocompleteUsersContainer",
          "eSection",
          "eLinksDD",
          "navAwwards",
          "navTrending",
          "hamburger",
        ];
        static values = {
          url: { type: String, default: "" },
          criteria: { type: Object, default: {} },
          selectedType: { type: String, default: "" },
        };
        static widthMobileMenu = 1270;
        initialize() {
          this.handleResize();
        }
        openMain(e) {
          e.stopPropagation(),
            this.headerMainTarget.classList.add("has-search-focus"),
            this.removeActiveSections(),
            window.innerWidth < this.constructor.widthMobileMenu &&
              this.navHeaderMainTarget.classList.add("is-open");
        }
        toggleMobile() {
          this.navHeaderMainTarget.classList.toggle("is-open"),
            this.headerMainTarget.classList.remove("has-search-focus"),
            this.removeActiveSections();
        }
        toggleDropdown(e) {
          const t = this.eLinksDDTargets,
            o = e.currentTarget;
          t.forEach((e) => {
            e !== o && e.classList.remove("is-open");
          }),
            this.navTrendingTarget.classList.remove("is-active"),
            this.navAwwardsTarget.classList.add("is-active"),
            o.classList.toggle("is-open");
        }
        show(e) {
          e.stopPropagation(), this.openMain(e), this.removeActiveSections();
          let t = e.currentTarget.value;
          if (
            (this.navTrendingTarget.classList.add("is-active"),
            this.navAwwardsTarget.classList.remove("is-active"),
            t.length > 2)
          )
            return (
              this.headerMainTarget.classList.add("has-search-fill"),
              void this.doSearch(t)
            );
        }
        handleResize() {
          window.addEventListener("resize", () => {
            window.innerWidth > this.constructor.widthMobileMenu &&
              this.navHeaderMainTarget.classList.remove("is-open");
          });
        }
        doToogleTab(e) {
          const t = e.currentTarget;
          window.innerWidth > this.constructor.widthMobileMenu
            ? (this.removeActiveSections(), t.classList.add("is-active"))
            : t.classList.toggle("is-active");
        }
        removeActiveSections(e = !0) {
          this.eSectionTargets.forEach((e) => e.classList.remove("is-active")),
            e && this.navTrendingTarget.classList.remove("is-active"),
            this.navAwwardsTarget.classList.remove("is-active"),
            this.headerMainTarget.classList.remove("has-search-fill");
        }
        search(e) {
          let t = e.currentTarget.value;
          if (27 === e.keyCode)
            return this.doClose(e), void this.inputTarget.blur();
          if (13 !== e.keyCode) {
            if (t.length > 2)
              this.headerMainTarget.classList.add("has-search-fill"),
                this.doSearch(t);
            else {
              let e = !1;
              this.removeActiveSections(e);
            }
            return;
          }
          let o = { text: t };
          location.href = this.routeSearchWithoutFilters(o);
        }
        routeSearchWithoutFilters(e) {
          return i.Z.generate(this.urlValue, e, !0);
        }
        routeSearchWithFilters(e) {
          return i.Z.generate(
            this.urlValue,
            { ...this.criteriaValue, ...e },
            !0
          );
        }
        doSearch(e) {
          this.abortAutocomplete && this.abortAutocomplete.abort(),
            (this.abortAutocomplete = new AbortController()),
            n.Z.get(
              i.Z.generate("tv_inspiration_autocomplete", {
                text: e,
                type: this.selectedTypeValue,
              }),
              { signal: this.abortAutocomplete.signal }
            )
              .then((e) => {
                e.data.tags.length > 0 || e.data.users.length > 0
                  ? (this.paintTextAutocompleteTags(e.data.tags),
                    this.paintTextAutocompleteUsers(e.data.users),
                    this.autocompleteViewTarget.classList.add("active"))
                  : this.autocompleteViewTarget.classList.remove("active");
              })
              .catch(function () {});
        }
        close(e) {
          e.stopPropagation(), this.doClose(e);
        }
        doClose(e) {
          e.stopPropagation(),
            this.element.classList.remove("is-top"),
            this.headerMainTarget.classList.remove("has-search-focus"),
            this.removeActiveSections(),
            this.toggleDropdown(e);
        }
        paintTextAutocompleteTags(e) {
          (this.autocompleteTagsTarget.innerHTML = ""),
            0 !== e.length
              ? (this.autocompleteTagsContainerTarget.classList.remove(
                  "is-hidden"
                ),
                this.autocompleteTagsTarget.appendChild((0, a.Hk)(e)))
              : this.autocompleteTagsContainerTarget.classList.add("is-hidden");
        }
        paintTextAutocompleteUsers(e) {
          (this.autocompleteUsersTarget.innerHTML = ""),
            0 !== e.length
              ? (this.autocompleteUsersContainerTarget.classList.remove(
                  "is-hidden"
                ),
                this.autocompleteUsersTarget.appendChild((0, a.Hk)(e)))
              : this.autocompleteUsersContainerTarget.classList.add(
                  "is-hidden"
                );
        }
      };
    },
    9731: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(2861),
        i = o(6301),
        a = o(2406);
      console.log("PASO");
      const r = class extends s.Qr {
        static targets = [
          "input",
          "search",
          "overlay",
          "defaultView",
          "autocompleteView",
          "autocompleteTags",
          "autocompleteTagsContainer",
          "autocompleteUsers",
          "autocompleteUsersContainer",
        ];
        static values = {
          url: { type: String, default: "" },
          criteria: { type: Object, default: {} },
          selectedType: { type: String, default: "" },
        };
        show(e) {
          e.stopPropagation();
          let t = e.currentTarget.value;
          if (t.length > 2)
            return (
              this.doSearch(t),
              this.defaultViewTarget.classList.remove("active"),
              void this.searchTarget.classList.add("show-results")
            );
          this.element.classList.add("is-top"),
            this.searchTarget.classList.add("show-results");
        }
        search(e) {
          let t = e.currentTarget.value;
          if (27 === e.keyCode)
            return this.doClose(), void this.inputTarget.blur();
          if (13 !== e.keyCode)
            return void (t.length > 2
              ? this.doSearch(t)
              : (this.autocompleteViewTarget.classList.remove("active"),
                this.defaultViewTarget.classList.add("active")));
          let o = { text: t };
          location.href = i.Z.generate(
            this.urlValue,
            { ...this.criteriaValue, ...o },
            !0
          );
        }
        doSearch(e) {
          this.abortAutocomplete && this.abortAutocomplete.abort(),
            (this.abortAutocomplete = new AbortController()),
            n.Z.get(
              i.Z.generate("tv_inspiration_autocomplete", {
                text: e,
                type: this.selectedTypeValue,
              }),
              { signal: this.abortAutocomplete.signal }
            )
              .then((e) => {
                e.data.tags.length > 0 || e.data.users.length > 0
                  ? (this.paintTextAutocompleteTags(e.data.tags),
                    this.paintTextAutocompleteUsers(e.data.users),
                    this.defaultViewTarget.classList.remove("active"),
                    this.autocompleteViewTarget.classList.add("active"))
                  : (this.defaultViewTarget.classList.add("active"),
                    this.autocompleteViewTarget.classList.remove("active"));
              })
              .catch(function () {});
        }
        close(e) {
          e.target.closest(".header-search__results") || this.doClose();
        }
        doClose() {
          this.element.classList.remove("is-top"),
            this.searchTarget.classList.remove("show-results");
        }
        paintTextAutocompleteTags(e) {
          (this.autocompleteTagsTarget.innerHTML = ""),
            0 !== e.length
              ? (this.autocompleteTagsContainerTarget.classList.remove(
                  "is-hidden"
                ),
                this.autocompleteTagsTarget.appendChild((0, a.Hk)(e)))
              : this.autocompleteTagsContainerTarget.classList.add("is-hidden");
        }
        paintTextAutocompleteUsers(e) {
          (this.autocompleteUsersTarget.innerHTML = ""),
            0 !== e.length
              ? (this.autocompleteUsersContainerTarget.classList.remove(
                  "is-hidden"
                ),
                this.autocompleteUsersTarget.appendChild((0, a.Hk)(e)))
              : this.autocompleteUsersContainerTarget.classList.add(
                  "is-hidden"
                );
        }
      };
    },
    8251: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["filters", "input"];
        searchEvent(e) {
          if (13 === e.keyCode) return;
          let t = e.currentTarget.value;
          this.search(t);
        }
        doSearch() {
          let e = this.inputTarget.value;
          this.search(e);
        }
        search(e) {
          e.length < 2 ? this.showAll() : this.filter(e);
        }
        filter(e) {
          this.filtersTarget
            .querySelectorAll(".js-filter-section")
            .forEach(function (t) {
              let o = !1;
              t.querySelectorAll(".js-filter-item").forEach(function (t) {
                t
                  .querySelector(".js-filter-item-name")
                  .innerText.toLowerCase()
                  .indexOf(e.toLowerCase()) > -1
                  ? ((o = !0), t.classList.remove("is-hidden"))
                  : t.classList.add("is-hidden");
              }),
                o
                  ? t.classList.remove("is-hidden")
                  : t.classList.add("is-hidden");
            });
        }
        showAll() {
          this.filtersTarget
            .querySelectorAll(".js-filter-section")
            .forEach(function (e) {
              e.classList.remove("is-hidden"),
                e.querySelectorAll(".js-filter-item").forEach(function (e) {
                  e.classList.remove("is-hidden");
                });
            });
        }
      };
    },
    7195: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(200);
      const i = class extends s.Qr {
        static targets = ["box"];
        share(e) {
          e.target.closest(".toolbar-bts__close")
            ? this.boxTarget.classList.remove("is-show")
            : this.boxTarget.classList.add("is-show");
        }
        link(e) {
          e.preventDefault();
          let t = e.currentTarget;
          n.Z.show(t);
        }
      };
    },
    6754: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7545);
      const i = class extends s.Qr {
        static targets = ["optionsButton"];
        connect() {
          (0, n.XI)(this, { element: this.element });
        }
        initialize() {
          this.optionsButtonTarget.addEventListener("click", (e) => {
            e.preventDefault(), this.element.classList.toggle("is-open");
          });
        }
        mouseLeave() {
          let e = this;
          this.myTimeoutMouseLeave = setTimeout(function () {
            e.element.classList.remove("is-open");
          }, 1500);
        }
        mouseEnter() {
          clearTimeout(this.myTimeoutMouseLeave);
        }
      };
    },
    4217: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = [
          "priceWithoutDiscount",
          "price",
          "period",
          "discount",
        ];
        static values = {
          annually: { type: String, default: "" },
          monthly: { type: String, default: "" },
          annuallyWithoutDiscount: { type: String, default: "" },
          monthlyWithoutDiscount: { type: String, default: "" },
        };
        monthly() {
          (this.priceTarget.innerText = this.monthlyValue),
            (this.priceWithoutDiscountTarget.innerText =
              this.monthlyWithoutDiscountValue),
            (this.periodTarget.innerText = "month"),
            this.discountTarget.classList.add("is-hidden");
        }
        annually() {
          (this.priceTarget.innerText = this.annuallyValue),
            (this.priceWithoutDiscountTarget.innerText =
              this.annuallyWithoutDiscountValue),
            (this.periodTarget.innerText = "month"),
            this.discountTarget.classList.remove("is-hidden");
        }
      };
    },
    8427: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(3414);
      const i = class extends s.Qr {
        static values = {
          type: { type: String, default: "" },
          message: { type: String, default: "" },
        };
        initialize() {
          (0, n.O)(this.typeValue, this.messageValue);
        }
      };
    },
    8424: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => f });
      var s = o(6599),
        n = o(2406),
        i = o(2947),
        a = o(6301),
        r = o(5432),
        l = o(4),
        c = o.n(l),
        d = o(1895),
        u = o.n(d),
        h = o(3414),
        p = o(9482),
        m = o(1317),
        _ = o(7051),
        g = o(7792);
      const v = {
          ecommerce:
            "Cast your vote for websites that excel in seamless user experiences, intuitive navigation, and secure payment gateways. Look for captivating product displays, clear calls-to-action, and hassle-free checkout processes to determine the best Ecommerce website that deserves the Honor.",
          typography:
            "Take a closer look at websites that push the boundaries of creative typography. Consider the use of fonts to evoke emotions, enhance brand identity, and elevate overall design aesthetics. Vote for websites that masterfully integrate typography to create a distinct and engaging visual experience.",
          product:
            "Cast your vote for websites that skillfully showcase products through high-quality visuals, detailed product descriptions, and informative product pages. Pay attention to websites that effectively communicate the unique value propositions, leaving you convinced that they deserve the Honor.",
          portfolio:
            "Explore the digital portfolios of talented professionals and businesses, evaluating the diversity and caliber of projects presented. Vote for websites that impressively showcase past work, demonstrate a high level of expertise, and convey a compelling narrative of the creatorsâ€™ skills and accomplishments.",
          "business-services":
            "Make your voice heard for websites that effectively present business offerings and services, demonstrating strong communication, credibility, and professionalism. Consider websites that clearly outline the services, provide testimonials, and highlight case studies that prove their excellence.",
          "no-code":
            "This category is dedicated to websites created using no-code tools and platforms. Evaluate how effectively they leverage the no-code approach to web development. Pay attention to the ease of development, the impact of the no-code solution, and the overall benefits of a no-code approach to web design.",
        },
        f = class extends s.Qr {
          static values = {
            submissionId: { type: String, default: "" },
            nomineeId: { type: String, default: "" },
            title: { type: String, default: "" },
            route: { type: String, default: "" },
            image: { type: String, default: "" },
            awardCategorySlug: { type: String, default: "" },
            awardCategoryName: { type: String, default: "" },
          };
          vote(e) {
            if ((e.preventDefault(), !_.Z.isLoggedIn())) {
              return void new g.Z().open();
            }
            let t = e.currentTarget;
            this._showLightbox(t);
          }
          _showLightbox(e) {
            let t = new r.Z({
                size: "large",
                callback_confirmation: () => {
                  this.doVote(e);
                },
              }),
              o = c()({
                title: this.titleValue,
                internal_url: this.routeValue,
                by: this.titleValue,
                text_button: "Vote now",
                image: this.imageValue,
                category_name: this.awardCategoryNameValue,
                description: v[this.awardCategorySlugValue],
              });
            t.show((0, n.Hk)(o));
          }
          doVote() {
            let e = new FormData();
            e.append("submission_id", this.submissionIdValue),
              e.append("nominee_id", this.nomineeIdValue),
              e.append("award_category_slug", this.awardCategorySlugValue),
              m.Z.fixed("Processing your vote"),
              i.Z.post(a.Z.generate("tv_award_category_do_vote"), e)
                .then((e) => {
                  e.data.id &&
                    (this._updateButtons(),
                    this._openConfirmationModal(e.data.categories),
                    (0, h.O)(
                      "success",
                      p.Z.trans("Your vote has been added correctly.")
                    ),
                    m.Z.remove());
                })
                .catch((e) => {
                  m.Z.remove(),
                    console.log(e),
                    (0, h.O)("error", e.response.data.error);
                });
          }
          _updateButtons() {
            let e = document.querySelector(".js-voted");
            e &&
              ((e.textContent = "Vote now"),
              e.classList.add("button--medium--outline--gray--rounded--full"),
              e.classList.remove("button--medium--rounded--full"),
              e.classList.remove("js-voted")),
              document
                .querySelectorAll(
                  `[data-submission--award-category-nominee-id-value="${this.nomineeIdValue}"]`
                )
                .forEach((e) => {
                  (e.textContent = "Voted"),
                    e.classList.remove(
                      "button--medium--outline--gray--rounded--full"
                    ),
                    e.classList.add("button--medium--rounded--full"),
                    e.classList.add("js-voted");
                });
          }
          _openConfirmationModal(e) {
            let t = e.find((e) => !1 === e.is_voted) || null,
              o = new r.Z({ size: "large" }),
              s = u()({
                categories: e,
                firstCategoryNoVoted: t,
                share_title: this.titleValue,
                share_url: this.routeValue,
              });
            o.show((0, n.Hk)(s));
          }
        };
    },
    797: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var s = o(6599),
        n = o(2157),
        i = o(2406),
        a = o(8559),
        r = o(2947),
        l = o(6301);
      const c = class extends s.Qr {
        static targets = [
          "inputSearch",
          "boxUsers",
          "listUsers",
          "usersSuggested",
        ];
        static values = { model: { type: Object, default: {} } };
        initialize() {
          (this.collaborators = {}),
            [].forEach.call(
              document.querySelectorAll(".js-user_credit"),
              (e) => {
                let t = {
                  username: e.dataset.username,
                  photo: e.dataset.image,
                  display_name: e.dataset.username,
                };
                this.listUsersTarget.appendChild(
                  this._createCollaboratorItem(t, e)
                );
              }
            ),
            (this.debouncedSearch = (function (e, t = 100) {
              let o;
              return function (...s) {
                clearTimeout(o),
                  (o = setTimeout(() => {
                    e.apply(this, s);
                  }, t));
              };
            })(this._search, 300));
        }
        searchUser(e) {
          let t = e.currentTarget.value;
          this.debouncedSearch(t);
        }
        _search(e) {
          if (e.length < 3)
            return void (
              null !== this.boxUsersTarget.offsetParent &&
              (this.boxUsersTarget.style.visibility = "hidden")
            );
          let t = this.element.querySelector(".js-loading-spinner");
          t.classList.remove("is-hidden");
          let o = new FormData();
          o.append("text", e),
            r.Z.post(l.Z.generate("tv_directory_suggest"), o).then((e) => {
              let o = e.data;
              o.length > 0 && this.showUsersFound(o),
                t.classList.add("is-hidden");
            }),
            (this.boxUsersTarget.style.visibility = "visible");
        }
        showUsersFound(e) {
          (this.usersSuggestedTarget.innerHTML = ""),
            this.usersSuggestedTarget.appendChild(
              a.Z.createItems(e, "click->submission--credits#addCollaborator")
            );
        }
        addCollaborator(e) {
          var t = e.currentTarget,
            o = JSON.parse(t.dataset.user);
          if (!this.existCollaborator(o)) {
            (this.collaborators[o.username] = o),
              (this.boxUsersTarget.style.visibility = "hidden"),
              (this.inputSearchTarget.value = "");
            let e = this.addCollaboratorToCollection(o),
              t = this._createCollaboratorItem(o, e);
            this.listUsersTarget.appendChild(t);
          }
        }
        addCollaboratorToCollection(e) {
          let t = document.querySelector(".js-collaborator-container"),
            o = t.dataset.prototype,
            s = t.children.length,
            n = o.replace(/\__name__/g, s),
            a = (0, i.Hk)(n);
          t.appendChild(a);
          let r = document.querySelector("#" + t.id + "_" + s + "_user");
          return (r.value = e.username), r;
        }
        existCollaborator(e) {
          for (let t in this.collaborators) if (e.username === t) return !0;
          return !1;
        }
        _createCollaboratorItem(e, t) {
          let o = document.createElement("figure");
          o.classList.add("circle-avatar");
          let s = document.createElement("img");
          (s.src = n.Z.thumb(e.photo, "thumb_user_70")),
            (s.alt = e.display_name),
            (s.width = 34),
            (s.height = 34);
          let a = document.createElement("span"),
            r = n.Z.redesignIcon("close", 20);
          (r = (0, i.Hk)(r)), a.appendChild(r);
          let l = document.createElement("li");
          return (
            l.classList.add("item", "js-user"),
            (l.dataset.username = e.username),
            l.appendChild(o),
            o.appendChild(s),
            l.appendChild(a),
            a.addEventListener("click", () => {
              l.remove(), t.remove(), delete this.collaborators[e.username];
            }),
            l
          );
        }
      };
    },
    619: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => h });
      var s = o(6599),
        n = o(2406),
        i = o(2947),
        a = o(6301),
        r = o(5432),
        l = o(200),
        c = o(1695),
        d = o.n(c),
        u = o(1252);
      const h = class extends s.Qr {
        static values = {
          submissionId: { type: String, default: "" },
          title: { type: String, default: "" },
          route: { type: String, default: "" },
          image: { type: String, default: "" },
        };
        vote(e) {
          e.preventDefault(), this._showLightbox();
        }
        _showLightbox() {
          let e = new r.Z({
              size: "small",
              callback_confirmation: (e) => {
                l.Z.show(e.currentTarget), this.doVote();
              },
            }),
            t = d()({
              internal_url: this.routeValue,
              by: this.titleValue,
              share_button: !0,
              text_button: "VOTE AND TWEET",
              share_text: this.titleValue,
              share_url: this.routeValue,
              image: this.imageValue,
            });
          e.show((0, n.Hk)(t));
        }
        doVote() {
          let e = new FormData();
          e.append("id", this.submissionIdValue),
            i.Z.post(a.Z.generate("tv_sotms_nominees_user_vote"), e).then(
              (e) => {
                e.data.id && (0, u.c)(e.data.id);
              }
            );
        }
      };
    },
    6983: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => d });
      var s = o(6599),
        n = o(2406),
        i = o(5432),
        a = o(1695),
        r = o.n(a),
        l = o(3414),
        c = o(9482);
      const d = class extends s.Qr {
        static targets = [
          "inputSearch",
          "boxUsers",
          "listUsers",
          "usersSuggested",
        ];
        static values = {
          slug: { type: String, default: "" },
          title: { type: String, default: "" },
          route: { type: String, default: "" },
          image: { type: String, default: "" },
        };
        vote(e) {
          e.preventDefault();
          let t = new i.Z({
              size: "small",
              callback_confirmation: () => {
                (0, l.O)(
                  "success",
                  c.Z.trans("submission.sotm.nominees.thanks")
                ),
                  (document.getElementById("slug_value").value =
                    this.slugValue),
                  document.getElementById("vote_form").submit();
              },
            }),
            o = r()({
              internal_url: this.routeValue,
              by: this.titleValue,
              share_button: !1,
              text_button: c.Z.trans("app.send_vote"),
              image: this.imageValue,
            });
          t.show((0, n.Hk)(o));
        }
      };
    },
    1378: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static targets = ["box"];
        toggle() {
          this.boxTarget.classList.toggle("is-show");
        }
        close() {
          this.boxTarget.classList.remove("is-show");
        }
      };
    },
    2868: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(188);
      n.tq.use([n.W_, n.o3]);
      const i = class extends s.Qr {
        static targets = ["general", "thumbnail", "next", "prev"];
        static values = {
          customConfiguration: { type: Object, default: {} },
          customConfigurationThumbs: { type: Object, default: {} },
        };
        connect() {
          let e = { grabCursor: !0 };
          if (this.hasThumbnailTarget) {
            let t = {
                ...{
                  freeMode: !0,
                  watchSlidesProgress: !0,
                  allowTouchMove: !1,
                },
                ...this.customConfigurationThumbsValue,
              },
              o = new n.tq(this.thumbnailTarget, t);
            e.thumbs = { swiper: o };
          }
          let t = { ...e, ...this.customConfigurationValue };
          this.hasNextTarget &&
            (t.navigation = {
              nextEl: this.nextTarget,
              prevEl: this.prevTarget,
              disabledClass: "slider-navigation-disabled",
            }),
            (this.swiper = new n.tq(this.generalTarget, t));
        }
        disconnect() {
          this.swiper.destroy();
        }
      };
    },
    944: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(188);
      n.tq.use([n.tl, n.xW]);
      const i = 24,
        a = {
          master_class_instructors: {
            grabCursor: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            spaceBetween: i,
            slidesPerView: 1,
          },
          slider_4: {
            grabCursor: !0,
            navigation: {
              nextEl: ".js-slider-courses-next",
              prevEl: ".js-slider-courses-prev",
              disabledClass: "slider-navigation-disabled",
            },
            spaceBetween: i,
            breakpoints: {
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            },
          },
          slider_3: {
            grabCursor: !0,
            navigation: {
              nextEl: ".js-slider-sites-next",
              prevEl: ".js-slider-sites-prev",
            },
            spaceBetween: i,
            breakpoints: {
              320: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
            },
          },
          slider_2: {
            grabCursor: !0,
            navigation: {
              nextEl: ".js-slider-sites-next",
              prevEl: ".js-slider-sites-prev",
            },
            spaceBetween: i,
            breakpoints: {
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
            },
          },
          card_directory: {
            effect: "fade",
            grabCursor: !0,
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: !0,
            },
            slidesPerView: 1,
            spaceBetween: 0,
          },
          courses: {
            grabCursor: !0,
            navigation: {
              nextEl: ".js-slider-courses-next",
              prevEl: ".js-slider-courses-prev",
            },
            spaceBetween: i,
            breakpoints: {
              320: { slidesPerView: 1 },
              640: { slidesPerView: "auto" },
            },
          },
          featured_assets_ad: {
            grabCursor: !0,
            spaceBetween: i,
            slidesPerView: "auto",
          },
        },
        r = class extends s.Qr {
          static values = {
            configuration: { type: String, default: "" },
            customConfiguration: { type: Object, default: {} },
            navigation: { type: Boolean, default: !0 },
          };
          connect() {
            let e = {};
            this.navigationValue && n.tq.use([n.W_]),
              "" !== this.configurationValue &&
                (e = a[this.configurationValue]),
              0 !== Object.keys(this.customConfigurationValue).length &&
                (e = this.customConfigurationValue),
              (this.swiper = new n.tq(this.element, e));
          }
          destroy() {
            this.swiper.destroy();
          }
        };
    },
    7692: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        static values = {
          tabSelector: { type: String, default: ".js-selector-tab" },
          tabContentSelector: { type: String, default: ".js-content-tab" },
        };
        initialize() {
          this.element.querySelectorAll(this.tabSelectorValue).forEach((e) => {
            e.addEventListener("click", () => {
              let t = e.dataset.tab;
              this.element
                .querySelectorAll(this.tabSelectorValue)
                .forEach((e) => {
                  e.classList.remove("active");
                }),
                this.element
                  .querySelectorAll(this.tabContentSelectorValue)
                  .forEach((e) => {
                    e.classList.remove("active");
                  }),
                e.classList.add("active"),
                this.element.querySelector("#" + t).classList.add("active");
            });
          });
        }
      };
    },
    8743: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(2947),
        i = o(6301),
        a = o(2157),
        r = o(2406);
      const l = class extends s.Qr {
        static targets = [
          "input",
          "resultList",
          "resultListContainer",
          "memberList",
          "memberListContainer",
        ];
        static values = {
          url: { type: String, default: "" },
          criteria: { type: Object, default: {} },
        };
        initialize() {
          (this.selectedUsers = {}), (this.selectedEmails = {});
        }
        search(e) {
          let t = e.currentTarget.value;
          t.length > 2
            ? (this.abortAutocomplete && this.abortAutocomplete.abort(),
              (this.abortAutocomplete = new AbortController()),
              n.Z.get(i.Z.generate("tv_team_search", { text: t }), {
                signal: this.abortAutocomplete.signal,
              })
                .then((e) => {
                  this.paintTextAutocompleteUsers(e.data.users);
                })
                .catch(function () {}))
            : this.resultListContainerTarget.classList.remove("is-visible");
        }
        sendInvitations() {
          let e = [],
            t = [];
          Object.keys(this.selectedUsers).forEach((t) => {
            e.push(t);
          }),
            Object.keys(this.selectedEmails).forEach((e) => {
              t.push(e);
            }),
            n.Z.post(
              i.Z.generate("tv_team_invite"),
              JSON.stringify({ user_ids: e, emails: t })
            )
              .then(() => {
                window.location.reload();
              })
              .catch(() => {});
        }
        paintTextAutocompleteUsers(e) {
          0 !== e.length
            ? (this.resultListContainerTarget.classList.add("is-visible"),
              (this.resultListTarget.innerHTML = ""),
              e.forEach((e) => {
                let t = document.createElement("li"),
                  o = document.createElement("figure");
                o.classList.add("circle-avatar"),
                  t.appendChild(o),
                  t.addEventListener("click", () => {
                    this.memberListContainerTarget.classList.add("is-visible");
                    let t = document.createElement("li"),
                      o = document.createElement("div");
                    o.classList.add("has-tooltip"), t.appendChild(o);
                    let s = document.createElement("div");
                    s.classList.add("field-autocomplete__avatar"),
                      o.appendChild(s);
                    let n = document.createElement("figure");
                    n.classList.add("circle-avatar"), s.appendChild(n);
                    let i = document.createElement("img");
                    i.classList.add("circle-avatar__img"),
                      (i.src = a.Z.thumb(e.photo, "thumb_user_70")),
                      (i.width = 24),
                      (i.height = 24),
                      n.appendChild(i);
                    let l = (0, r.Hk)(a.Z.redesignIcon("close", 10)),
                      c = e.id;
                    n.addEventListener("click", () => {
                      t.remove(), delete this.selectedUsers[c];
                    }),
                      s.appendChild(l),
                      this.memberListTarget.appendChild(t),
                      this.resultListContainerTarget.classList.remove(
                        "is-visible"
                      ),
                      (this.inputTarget.value = ""),
                      (this.selectedUsers[e.id] = e);
                  });
                let s = document.createElement("img");
                s.classList.add("circle-avatar__img"),
                  (s.src = a.Z.thumb(e.photo, "thumb_user_70")),
                  (s.width = 24),
                  (s.height = 24),
                  o.append(s);
                let n = document.createElement("strong");
                (n.textContent = e.display_name),
                  t.appendChild(n),
                  this.resultListTarget.appendChild(t);
              }))
            : this.resultListContainerTarget.classList.remove("is-visible");
        }
      };
    },
    339: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(2947),
        i = o(6301),
        a = o(5432);
      const r = class extends s.Qr {
        static values = { id: { type: String, default: "" } };
        delete() {
          new a.Z().confirmDelete(() => {
            n.Z.post(
              i.Z.generate("tv_team_delete_member", { id: this.idValue })
            )
              .then(() => {
                window.location.reload();
              })
              .catch(() => {});
          });
        }
      };
    },
    3502: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(5716);
      const i = class extends s.Qr {
        static targets = ["answer"];
        seeAnswer() {
          this.element.classList.contains("active")
            ? (this.element.classList.remove("active"),
              n.p8.to(this.answerTarget, { duration: 0.3, height: 0 }))
            : (this.element.classList.add("active"),
              n.p8.set(this.answerTarget, { height: "auto" }),
              n.p8.from(this.answerTarget, { duration: 0.4, height: 0 }));
        }
      };
    },
    6429: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6599);
      const n = class extends s.Qr {
        toggle(e) {
          var t;
          (t = e.currentTarget),
            document.querySelector("#" + t.dataset.id).classList.toggle("show");
        }
      };
    },
    4122: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(2931);
      const i = class extends s.Qr {
        connect() {
          this.element.dataset.trailerloaded ||
            ((this.element.dataset.trailerloaded = !0), new n.Z(this.element));
        }
      };
    },
    1630: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(6301);
      const i = class extends s.Qr {
        static values = {
          mimeTypes: { type: Array, default: [] },
          maxSize: { type: Number, default: 0 },
          width: { type: Number, default: 0 },
          height: { type: Number, default: 0 },
        };
        remove(e) {
          let t = e.currentTarget.closest(".input-drag");
          t.classList.remove("is-inserted"),
            (t.querySelector("input[type=file]").value = ""),
            (t.querySelector(".js-upload-remove-media").checked = !0),
            t.querySelector(".js-preview-photo").classList.add("is-hidden"),
            t.querySelector(".js-preview-video") &&
              t.querySelector(".js-preview-video").classList.add("is-hidden");
          let o = t.querySelector(".js-temporary-path");
          o && (o.value = "");
        }
        previewImage(e) {
          let t = e.currentTarget,
            o = t.closest(".js-container-image"),
            s = o.querySelector(".js-upload-remove-media");
          if ((s && (s.checked = !1), !t.files || !t.files[0])) return;
          let n = t.files[0];
          if (!this._isMimeTypeValid(n))
            return (
              this._showError(
                "The image should be " +
                  (function (e) {
                    let t = e.map(function (e) {
                      return e.split("/")[1];
                    });
                    return t.slice(0, -1).join(", ") + " or " + t.slice(-1);
                  })(this.mimeTypesValue),
                o
              ),
              void (t.value = "")
            );
          if (!this._isSizeValid(n))
            return (
              this._showError(
                "The image is bigger than " +
                  (function (e) {
                    let t = 1024 * e,
                      o = 1024;
                    if (Math.abs(t) < o) return t + " B";
                    let s = ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                      n = -1;
                    do {
                      (t /= o), ++n;
                    } while (Math.abs(t) >= o && n < s.length - 1);
                    return t.toFixed(0) + s[n];
                  })(this.maxSizeValue),
                o
              ),
              void (t.value = "")
            );
          let i = new FileReader(),
            a = URL.createObjectURL(n);
          (i.onload = (e) => {
            if (e.target.result.split(";")[0].includes("video")) {
              let e = o.querySelector(".js-preview-video");
              e.classList.remove("is-hidden"), (e.src = a);
            } else {
              let s = new Image();
              (s.onload = () => {
                let e = Number(s.width),
                  i = Number(s.height),
                  a = 0 === this.widthValue || e === this.widthValue,
                  r = 0 === this.heightValue || i === this.heightValue;
                if (!1 === a || !1 === r)
                  (t.value = ""),
                    this._showError(
                      "The size is not " +
                        this.widthValue +
                        " x " +
                        this.heightValue +
                        "px",
                      o
                    );
                else {
                  o.classList.remove("is-invalid"),
                    o.querySelector(".msg") && o.querySelector(".msg").remove();
                  let e = o.querySelector(".js-preview-photo"),
                    t = o.querySelector(".js-preview-text");
                  e &&
                    (e.classList.remove("is-hidden"),
                    o.querySelector(".input-drag").classList.add("is-inserted"),
                    (e.src = s.src)),
                    t &&
                      (t.innerText = (function (e, t) {
                        let o = e
                            .substring(e.lastIndexOf(".") + 1, e.length)
                            .toLowerCase(),
                          s = e.replace("." + o, "");
                        return s.length <= t
                          ? e
                          : ((s = s.substr(0, t) + (e.length > t ? "..." : "")),
                            s + "." + o);
                      })(n.name, 19));
                }
              }),
                (s.src = e.target.result);
            }
          }),
            i.readAsDataURL(n);
          let r = o.querySelector(".js-temporary-path");
          r && this._uploadFile(n, r);
        }
        _uploadFile(e, t) {
          let o = new FormData();
          o.append("file", e),
            fetch(n.Z.generate("tv_profile_upload_temporary_file"), {
              method: "POST",
              body: o,
            })
              .then((e) => e.json())
              .then(function (e) {
                e.errors ? alert(e.errors) : (t.value = e.id);
              });
        }
        _showError(e, t) {
          if (
            (t.classList.add("is-invalid"),
            t.classList.contains("is-image-inline"))
          )
            return;
          t.querySelector(".form-field__msg") &&
            t.querySelector(".form-field__msg").remove();
          let o = document.createElement("div");
          o.classList.add("form-field__msg"),
            t.appendChild(o),
            (o.style.display = "block"),
            (o.innerText = e);
        }
        _isSizeValid(e) {
          if (0 === this.maxSizeValue) return !0;
          return e.size / 1024 <= this.maxSizeValue;
        }
        _isMimeTypeValid(e) {
          return (
            0 === this.mimeTypesValue.length ||
            this.mimeTypesValue.includes(e.type)
          );
        }
      };
    },
    8952: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(9783);
      const i = class extends s.Qr {
        static values = {
          collectionId: { type: String, default: "" },
          total: { type: Number, default: 0 },
        };
        open() {
          new n.Z({
            routeToFetch: "tv_collection_followers_list",
            routeParameters: { id: this.collectionIdValue },
            total: this.totalValue,
          }).show();
        }
      };
    },
    6703: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(9482),
        i = o(1313);
      const a = class extends s.Qr {
        static values = {
          msg: { type: String, default: "remaining characters." },
          max: { type: Number, default: 30 },
        };
        validate() {
          this._doCheckCharacters(this.element, this.element.value.length);
        }
        validateWyg() {
          this._doCheckCharacters(this.element, this.element.innerText.length);
        }
        _doCheckCharacters(e, t) {
          let o = this.maxValue - t,
            s = e.closest(".form-field"),
            a = o + " " + n.Z.trans(this.msgValue);
          (0, i.X)(e, a),
            o < 0
              ? s.classList.add("is-invalid")
              : s.classList.remove("is-invalid");
        }
      };
    },
    777: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(9482),
        i = o(1313);
      const a = class extends s.Qr {
        static values = {
          msg: { type: String, default: "remaining characters." },
          min: { type: Number, default: 1 },
          max: { type: Number, default: 30 },
        };
        validate() {
          this._doCheckOptions(this.element);
        }
        _doCheckOptions(e) {
          let t = 0;
          t =
            "text" === e.type
              ? e.value
                ? e.value.split(",").length
                : 0
              : e.selectedOptions.length;
          let o = n.Z.trans(this.msgValue),
            s = (0, i.X)(e, o),
            a = e.closest(".form-field");
          return t > this.maxValue
            ? ((s.innerText = n.Z.trans("form.validate.select_less", {
                max: this.maxValue,
              })),
              void a.classList.add("is-invalid"))
            : t < this.minValue
            ? ((s.innerText = n.Z.trans("form.validate.select_at_least", {
                min: this.minValue,
              })),
              void a.classList.add("is-invalid"))
            : t === this.maxValue
            ? ((s.innerText = ""), void a.classList.remove("is-invalid"))
            : void 0;
        }
      };
    },
    1650: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => a });
      var s = o(6599),
        n = o(1313),
        i = o(9755);
      const a = class extends s.Qr {
        validate() {
          this._doCheckStrength(this.element);
        }
        _doCheckStrength(e) {
          if (!e.value) return;
          let t = (0, n.X)(e, ""),
            s = e.closest(".form-field");
          s.classList.remove("has-warning", "is-invalid");
          let a = "has-warning";
          o.e(1322)
            .then(o.t.bind(o, 1322, 23))
            .then(function (o) {
              let n = o.default(e.value);
              0 === n.score && (a = "is-invalid"),
                n.feedback.warning
                  ? ((t.innerHTML =
                      "<ul><li>" + n.feedback.warning + "</li></ul>"),
                    i(t).slideDown(),
                    s.classList.add(a))
                  : ((t.innerHTML = ""), i(t).slideUp());
            });
        }
      };
    },
    256: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(9482),
        i = o(1313);
      const a =
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/,
        r = class extends s.Qr {
          validate() {
            this._doCheckUrl(this.element, this.element.value);
          }
          _doCheckUrl(e, t) {
            let o = e.closest(".form-field"),
              s = n.Z.trans("form.add_a_url_with_http");
            e.required || "" !== e.value
              ? ((0, i.X)(e, s),
                a.test(t)
                  ? o.classList.remove("is-invalid")
                  : o.classList.add("is-invalid"))
              : o.classList.remove("is-invalid");
          }
        };
    },
    4636: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(7545);
      const i = class extends s.Qr {
        connect() {
          (0, n.XI)(this, { element: this.element });
        }
        initialize() {
          this.isPlaying = !1;
        }
        mouseLeave() {
          this.pauseVideo();
        }
        mouseEnter() {
          this.playVideo();
        }
        playVideo() {
          let e = this.getVideoElement();
          if (null !== e) {
            var t = e.play();
            void 0 !== t &&
              t
                .then(() => {
                  this.isPlaying = !0;
                })
                .catch(() => {});
          }
        }
        pauseVideo() {
          let e = this.getVideoElement();
          null !== e && this.isPlaying && (e.pause(), (this.isPlaying = !1));
        }
        getVideoElement() {
          let e = this.element;
          return "VIDEO" === e.nodeName ? e : e.querySelector("video");
        }
      };
    },
    5095: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => l });
      var s = o(6599),
        n = o(3609),
        i = o(8030),
        a = o(1415),
        r = o(8215);
      const l = class extends s.Qr {
        static values = {
          model: { type: Object, default: {} },
          currency: { type: String, default: "USD" },
        };
        connect() {
          if (!n.Z.hasAccepted(i.r$)) return;
          let e = {
            content_ids: [this.modelValue.item_id],
            content_name: this.modelValue.item_name,
            content_type: "landing_page",
            value: this.modelValue.price,
            currency: this.modelValue.currency,
          };
          a.Z.push({
            event: "ViewContent",
            ecommerce: { fb_items: e, items: [this.modelValue] },
          }),
            r.Z.log("ViewContent", { fb_items: e, items: [this.modelValue] });
        }
      };
    },
    1149: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var s = o(6599),
        n = o(4157);
      const i = class extends s.Qr {
        static values = {
          identifier: { type: String, default: "" },
          type: { type: String, default: "" },
        };
        count() {
          n.Z.add(this.identifierValue, this.typeValue);
        }
      };
    },
    3853: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var s = o(6599),
        n = o(7051),
        i = o(7792),
        a = o(5432);
      const r = class extends s.Qr {
        showVote(e) {
          if (!n.Z.isLoggedIn()) return void new i.Z().open();
          e.preventDefault();
          let t = document.querySelector(".js-modal-vote-content");
          t &&
            ((t = t.cloneNode(!0)),
            t.classList.remove("is-hidden"),
            (t.dataset.controller = "vote-process"),
            new a.Z({ remove_after_close: !0 }).show(t));
        }
      };
    },
    5785: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => u });
      var s = o(6599),
        n = o(188),
        i = o(9998),
        a = o(8800),
        r = o.n(a),
        l = o(3414),
        c = o(1317),
        d = o(2947);
      const u = class extends s.Qr {
        static targets = [
          "poll",
          "result",
          "resultNotes",
          "average",
          "opinion",
        ];
        static values = {
          stepsConfiguration: {
            type: Array,
            default: [
              { key: "design", percent: 0.4 },
              { key: "usability", percent: 0.3 },
              { key: "creativity", percent: 0.2 },
              { key: "content", percent: 0.1 },
            ],
          },
          opinions: { type: Object, default: {} },
        };
        connect() {
          this.addNotesListener(),
            (this.slider = this.createSlider()),
            this.resetVoting();
        }
        addNotesListener() {
          this.element.querySelectorAll(".js-poll-note").forEach((e) => {
            e.addEventListener("click", this.clickNote.bind(this));
          }),
            (this.numberOfNotes = this.element.querySelectorAll(
              ".js-voting-category"
            ).length);
        }
        clickNote(e) {
          let t = e.currentTarget,
            o = t.dataset.value,
            s = t.closest("ul.js-voting-category");
          (this.notes[s.dataset.key] = parseInt(o)),
            t.classList.add("is-active"),
            this.slider.slideNext(),
            Object.keys(this.notes).length === this.numberOfNotes &&
              this.slider.activeIndex === this.numberOfNotes - 1 &&
              this.showResult();
        }
        showResult() {
          this.pollTarget.classList.remove("is-visible"),
            this.resultTarget.classList.add("is-visible"),
            this.showResultNotes(),
            this.calculateAverage() < 7 ||
              0 === Object.keys(this.opinionsValue).length ||
              this.showOpinion();
        }
        showOpinion() {
          let e = r()({ opinions: this.opinionsValue });
          this.opinionTarget.innerHTML = e;
        }
        showResultNotes() {
          (this.averageTarget.textContent = this.calculateAverage()),
            this.resultNotesTarget
              .querySelectorAll(".js-vote-result-category")
              .forEach((e) => {
                let t = e.dataset.key,
                  o = this.notes[t];
                e.querySelector(".js-circle-note").dataset.note = o;
              }),
            (0, i.FO)();
        }
        calculateAverage() {
          let e = 0;
          return (
            this.stepsConfigurationValue.forEach((t) => {
              e += this.notes[t.key] * t.percent;
            }),
            e.toFixed(2)
          );
        }
        createSlider() {
          n.tq.use([n.W_]);
          let e = this.element.querySelector(".js-slider-voting-prev");
          return new n.tq(this.element.querySelector(".js-slider-voting"), {
            noSwiping: !0,
            noSwipingClass: "swiper-slide",
            effect: "fade",
            navigation: { prevEl: e },
            on: {
              slideChange: () => {
                let t = this.slider.activeIndex,
                  o = this.element.querySelector(
                    ".slider-voting .swiper-slide:nth-of-type(" + t + ")"
                  );
                o &&
                  (e.querySelector(".nav-vote__title").textContent =
                    o.querySelector(".slide-vote").dataset.title);
              },
            },
          });
        }
        editVote() {
          this.resultTarget.classList.remove("is-visible"),
            this.pollTarget.classList.add("is-visible"),
            this.slider.slideTo(0),
            this.resetVoting(),
            this.element.querySelectorAll(".js-poll-note").forEach((e) => {
              e.classList.remove("is-active");
            });
        }
        resetVoting() {
          (this.notes = {}), (this.isVoting = !1);
        }
        sendVote() {
          if (!this.isVoting) {
            this.showLoading(), (this.isVoting = !0);
            for (let e in this.notes)
              this.element.querySelector("input.vote-" + e).value =
                this.notes[e];
            var e = this.element.querySelector(".js-vote-form");
            0 !== Object.keys(this.opinionsValue).length && this.fillOpinion(e),
              d.Z.post(e.action, new FormData(e))
                .then(function (e) {
                  setTimeout(function () {
                    e.hasOwnProperty("url")
                      ? (location.href = e.url)
                      : location.reload();
                  }, 500);
                })
                .catch((e) => {
                  if (e.response) {
                    let t = e.response.data.error;
                    this.editVote(), this.hideLoading(), (0, l.O)("error", t);
                  }
                })
                .finally(() => {
                  this.isVoting = !1;
                });
          }
        }
        fillOpinion(e) {
          [].forEach.call(["think", "like", "details"], (t) => {
            [].forEach.call(
              this.element.querySelectorAll(".js-" + t + " input:checked"),
              (t) => {
                var o = e.querySelector(
                  '.js-opinion input[value="' + t.value + '"]'
                );
                o && (o.checked = !0);
              }
            );
          });
        }
        showLoading() {
          c.Z.fixed();
        }
        hideLoading() {
          c.Z.remove();
        }
      };
    },
    3697: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      class s {
        constructor() {
          this.events = {};
        }
        addListener(e, t) {
          return "function" != typeof t
            ? (console.error(
                "The listener callback must be a function, the given type is " +
                  typeof t
              ),
              !1)
            : "string" != typeof e
            ? (console.error(
                "The event name must be a string, the given type is " + typeof e
              ),
              !1)
            : (void 0 === this.events[e] &&
                (this.events[e] = { listeners: [] }),
              void this.events[e].listeners.push(t));
        }
        removeListener(e, t) {
          if (void 0 === this.events[e])
            return console.error(`This event: ${e} does not exist`), !1;
          this.events[e].listeners =
            void 0 !== t
              ? this.events[e].listeners.filter(
                  (e) => e.toString() !== t.toString()
                )
              : [];
        }
        dispatch(e, t) {
          if (void 0 === this.events[e])
            return console.error(`This event: ${e} does not exist`), !1;
          this.events[e].listeners.forEach((e) => {
            e(t);
          });
        }
      }
    },
    7063: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = new (o(3697).Z)();
    },
    1317: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(9482);
      const n = new (class {
        constructor() {}
        show(e, t) {
          let o = this._createLoading(t);
          e.appendChild(o);
        }
        white(e, t) {
          let o = this._createLoading(t);
          o.classList.add("loading--white"), e.appendChild(o);
        }
        fixed(e, t = null) {
          let o = this._createLoading(e);
          o.classList.add("loading--fixed"),
            t && o.classList.add(t),
            document.body.appendChild(o);
        }
        _createLoading(e) {
          let t = document.createElement("div");
          t.classList.add("loading", "js-loading", "is-visible");
          let o = document.createElement("div");
          o.classList.add("loading__content");
          let n = document.createElement("div");
          if ((n.classList.add("loading__spinner"), o.appendChild(n), e)) {
            let t = document.createElement("div");
            t.classList.add("loading__msg"),
              (t.textContent = s.Z.trans(e)),
              o.appendChild(t);
          }
          return t.appendChild(o), t;
        }
        remove(e) {
          var t = (e || document).querySelector(".js-loading");
          t && t.remove();
        }
      })();
    },
    200: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = {
        show: function (e) {
          let t = e,
            o = t.dataset.link ? t.dataset.link : t.href,
            s = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
            n = void 0 !== window.screenTop ? window.screenTop : screen.top,
            i = document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            a = document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height,
            r = (window.innerWidth ? window.innerWidth : i) / 2 - 250 + s,
            l = (window.innerHeight ? window.innerHeight : a) / 2 - 250 + n,
            c = window.open(
              o,
              "",
              "scrollbars=yes, width=500, height=500, top=" + l + ", left=" + r
            );
          c && window.focus && c.focus();
        },
      };
    },
    3695: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = new (o(3697).Z)();
    },
    6301: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => a });
      var s = o(7677),
        n = o.n(s);
      const i = JSON.parse(
        '{"base_url":"","routes":{"tv_terms":{"tokens":[["text","/terms/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_privacy_policy":{"tokens":[["text","/privacy-policy/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_cookies_policy":{"tokens":[["text","/cookies-policy/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_login_csrf":{"tokens":[["text","/login_csrf"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_register":{"tokens":[["text","/register"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_register_ajax":{"tokens":[["text","/register_ajax"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_forgot_password":{"tokens":[["text","/forgot-password"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_payment_billing_check":{"tokens":[["text","/billing/check/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_payment_paypal_order_create":{"tokens":[["text","/payment/order/create"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_payment_paypal_order_create_for_cart":{"tokens":[["text","/payment/order/create_for_cart"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_search_websites":{"tokens":[["text","/websites/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_site_show":{"tokens":[["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_site_show_content":{"tokens":[["text","/content"],["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_site_get_user_votes":{"tokens":[["text","/get_user_votes"],["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_site_get_user_votes_score":{"tokens":[["text","/get_user_votes_score"],["variable","/","[^/]++","slug",true],["text","/sites"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_sotms_nominees_user_vote":{"tokens":[["text","/awards-of-the-month/nominees/vote_user"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_sotms_nominees_get_user_vote":{"tokens":[["text","/awards-of-the-month/nominees/get_vote_user"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_sotms_nominees_get_judge_vote":{"tokens":[["text","/awards-of-the-month/nominees/get_vote_judge"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_honors_category_nominees":{"tokens":[["variable","/","[^/]++","slug",true],["text","/honors"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_award_category_do_vote":{"tokens":[["text","/honors/category/vote/user"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_academy_homepage":{"tokens":[["text","/academy/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_academy_old_courses":{"tokens":[["text","/academy/best-sellers"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_academy_log":{"tokens":[["text","/academy/info/log"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"cart":{"tokens":[["text","/academy/cart"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"add_product_cart":{"tokens":[["variable","/","[^/]++","uuid",true],["text","/academy/add-product"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_remove_product":{"tokens":[["variable","/","[^/]++","uuid",true],["text","/academy/remove-product"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_domestika_course_show_modal":{"tokens":[["text","/modal"],["variable","/","[^/]++","slug",true],["text","/academy/new/courses"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_course_show_lecture":{"tokens":[["variable","/","[^/]++","lectureId",true],["text","/lectures"],["variable","/","[^/]++","slug",true],["text","/academy/course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_domestika_cart":{"tokens":[["text","/academy/dmstk/cart"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_domestika_purchase_summary":{"tokens":[["text","/academy/dmstk/purchase_summary"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_domestika_cart_add_course":{"tokens":[["variable","/","[^/]++","id",true],["text","/academy/dmstk/add-course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_domestika_cart_remove_course":{"tokens":[["variable","/","[^/]++","id",true],["text","/academy/dmstk/remove-course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_lecture_store_time":{"tokens":[["text","/store_time"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_lecture_complete":{"tokens":[["text","/complete"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_lecture_uncomplete":{"tokens":[["text","/uncomplete"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_course_lecture_source":{"tokens":[["text","/source"],["variable","/","[^/]++","id",true],["text","/academy/course/lecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_course_lecture_open_source":{"tokens":[["text","/source"],["variable","/","[^/]++","id",true],["text","/academy/course/openlecture"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_course_m3files_source":{"tokens":[["variable","/","[^/]++","id",true],["text","/academy/course/m3files"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_review_course_rate":{"tokens":[["text","/rate-it"],["variable","/","[^/]++","id",true],["text","/academy/review"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_webinar_user_purchases_list":{"tokens":[["text","/attendees"],["variable","/","[^/]++","slug",true],["text","/academy"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_judge_search":{"tokens":[["text","/jury/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_contact_us":{"tokens":[["text","/contact-us/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_ajax_subscriber_list":{"tokens":[["text","/subcriber_list/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_vote_annual_category":{"tokens":[["variable","/","[^/]++","id",true],["text","/annual-awards"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_vote_annual_vote":{"tokens":[["text","/annual-awards/vote/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_blog_all":{"tokens":[["text","/blog/all"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_blog":{"tokens":[["text","/blog/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_search_articles":{"tokens":[["text","/blog/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_search_articles_by_tag":{"tokens":[["text","/"],["variable","/","[^/]++","parameter",true],["text","/blog"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_job_search":{"tokens":[["text","/jobs/search/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_job_contact":{"tokens":[["text","/contact"],["variable","/","[^/]++","slug",true],["text","/jobs"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_asset_ad_show":{"tokens":[["variable","/","[^/]++","slug",true],["text","/market"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_asset_ad_show_preview":{"tokens":[["text","/preview"],["variable","/","[^/]++","slug",true],["text","/market"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_asset_ad_show_ajax_content":{"tokens":[["text","/content"],["variable","/","[^/]++","slug",true],["text","/market"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_directory_suggest":{"tokens":[["text","/directory/suggest/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_directory_autocomplete":{"tokens":[["text","/directory/autocomplete/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_directory_index":{"tokens":[["text","/directory/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_directory_search":{"tokens":[["text","/directory/search/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_favourites_collections":{"tokens":[["text","/favourites/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_favourites_collect_item":{"tokens":[["variable","/","[^/]++","idCollection",true],["variable","/","[^/]++","parameter",true],["variable","/","[^/]++","type",true],["text","/favourites/collect"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_favourites_collections_by_id":{"tokens":[["text","/favourites/activity/collections_by_id"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_favourites_add_collectable_to_collection":{"tokens":[["variable","/","[^/]++","idCollection",true],["text","/add-collectable"],["variable","/","[^/]++","collectableId",true],["text","/favourites/activity"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_coupon_check":{"tokens":[["text","/coupon/check-coupon"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_coupon_cart_check":{"tokens":[["text","/coupon/check-coupon-cart/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_coupon_cart_remove":{"tokens":[["text","/coupon/remove-coupon-cart/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_ajax_add_visit":{"tokens":[["variable","/","[^/]++","slug",true],["text","/log/counter"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_ajax_add_count":{"tokens":[["variable","/","[^/]++","identifier",true],["variable","/","[^/]++","type",true],["text","/log/counter"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_ajax_add_book_download":{"tokens":[["variable","/","[^/]++","slug",true],["text","/log/downloader"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_inspiration_search":{"tokens":[["text","/inspiration/search"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_search_inspiration":{"tokens":[["text","/inspiration_search/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_inspiration_autocomplete":{"tokens":[["text","/inspiration_autocomplete/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_search_element":{"tokens":[["text","/elements/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_search":{"tokens":[["text","/collections/search/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_followers_list":{"tokens":[["text","/followers"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_collection_follow":{"tokens":[["text","/follow"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_unfollow":{"tokens":[["text","/unfollow"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_plans_page":{"tokens":[["text","/plans/user-plans"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_be_pro":{"tokens":[["text","/pro"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_billing_delete":{"tokens":[["text","/settings/billing/delete"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_user_settings":{"tokens":[["text","/settings/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_settings_directory":{"tokens":[["text","/settings/directory/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_settings_gallery":{"tokens":[["text","/settings/gallery/"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_team_search":{"tokens":[["text","/settings/team/search"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_team_delete_member":{"tokens":[["variable","/","[^/]++","id",true],["text","/settings/team/delete_member"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_team_invite":{"tokens":[["text","/settings/team/invite"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_academy_course_certificate":{"tokens":[["text","/certificate/course/"],["variable","/","[^/]++","slug",true],["text","/academy/settings"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_academy_web_course_certificate":{"tokens":[["variable","/","[^/]++","slug",true],["variable","/","[^/]++","username",true],["text","/academy/certification/course"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_check_likes":{"tokens":[["text","/check_likes"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_user_contact":{"tokens":[["text","/contact"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_user_follow":{"tokens":[["text","/follow"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_unfollow":{"tokens":[["text","/unfollow"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_followers_list":{"tokens":[["text","/followers"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_notification_markAsRead":{"tokens":[["variable","/","[^/]++","notificationId",true],["text","/settings/notifications"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_profile_upload_temporary_file":{"tokens":[["text","/upload-temporary-file"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_collection_add_collaborator":{"tokens":[["text","/add_collaborator"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_remove_collaborator":{"tokens":[["text","/remove_collaborator"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_get_collaborators":{"tokens":[["text","/get_collaborators"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_favourites_create_folder_token":{"tokens":[["text","/favourites/create-collection/token"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_favourites_create_folder":{"tokens":[["text","/favourites/create-collection"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_favourites_edit_folder":{"tokens":[["variable","/","[^/]++","id",true],["text","/favourites/edit-folder"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_collection_remove":{"tokens":[["text","/remove"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["DELETE"],"schemes":[]},"tv_collection_remove_collectable":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","idCollectable",true],["variable","/","[^/]++","idCollection",true],["text","/collections/remove-collection"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_upload_cover":{"tokens":[["text","/upload-cover"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_collection_remove_cover":{"tokens":[["text","/remove-cover"],["variable","/","[^/]++","id",true],["text","/collections"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_user_homepage":{"tokens":[["text","/"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_show_lightbox_add_projects":{"tokens":[["text","/show_lightbox_add_projects"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":[],"schemes":[]},"tv_sort_projects":{"tokens":[["text","/sort_projects"],["variable","/","[^/]++","username",true]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_add_work_to_gallery":{"tokens":[["variable","/","[^/]++","identifier",true],["variable","/","[^/]++","type",true],["text","/add_project"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_remove_work_to_gallery":{"tokens":[["variable","/","[^/]++","identifier",true],["variable","/","[^/]++","type",true],["text","/remove_project"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_profile_show_project_ajax":{"tokens":[["variable","/","[^/]++","id",true],["text","/profile/user-project/show-project"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_profile_show_project_ajax_content":{"tokens":[["text","/content"],["variable","/","[^/]++","id",true],["text","/profile/user-project/show-project"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["GET"],"schemes":[]},"tv_profile_remove_project":{"tokens":[["variable","/","[^/]++","id",true],["text","/profile/user-project/remove-project"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]},"tv_profile_upload_file":{"tokens":[["text","/profile/upload-file"]],"defaults":[],"requirements":{"_locale":"en|es|ko|zh|ja|ru|pt"},"hosttokens":[],"methods":["POST"],"schemes":[]}},"prefix":"","host":"www.awwwards.com","port":"","scheme":"https","locale":""}'
      );
      n().setRoutingData(i);
      const a = n();
    },
    9482: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      const s = JSON.parse(
        '{"en":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Log in or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Log in with your e-mail","login_or_create.forgot_your_password":"Forgot your password?","login_or_create.login_now":"Log in now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following yearâ€™s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the â€œMerit for Commendable Sitesâ€ certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"Your Job Advert is Published!Â ","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"es":{"app.following":"Siguiendo","app.follow":"Seguir","form.description":"DescripciÃ³n","form.name":"Nombre","form.select_category":"Seleccionar categoria","footer_box.share_collection":"Â¡Comparte con tu equipo!","footer_box.edit_collection":"Editar colecciÃ³n","app.show_filters":"VER FILTROS","search.we_found":"Hemos encontrado","search.placeholder":"BUSCA INSPIRACIÃ“N (HTML5, VR, RED, MINIMALISMO...)","app.and":"y","app.for":"para","app.elements":"Elemento|Elementos","app.jobs":"Empleo|Empleos","app.create":"Crear","app.load_more":"Cargar mÃ¡s","app.loading":"Cargando","app.more_info":"MÃ¡s info","app.cancel":"Cancelar","app.private":"Privada","app.save":"Guardar","app.delete_collection":"Borrar colecciÃ³n","app.deleting_collection":"Borrando colecciÃ³n...","user.collections.menu.collections":"ColecciÃ³n|Colecciones","app.yes":"Si","app.no":"No","app.collaborator":"Colaborador","app.delete_account":"Borrar cuenta","app.delete":"Borrar","app.are_you_sure":"Â¿EstÃ¡s seguro?","app.add_to_collections":"Â¡AÃ±adir a colecciones!","app.activate_black_option":"Activar opciÃ³n oscura","app.activate_white_option":"Activar opciÃ³n blanca","app.send_vote":"Enviar voto","app.edit_your_vote":"Editar voto","app.edit":"Editar","app.users":"Usuario|Usuarios","app.judges":"Juez|Jueces","app.votes":"Voto|Votos","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribu","app.user_type.short.chief":"Jefe","app.user_type.short.jury":"Jurado","app.websites":"Sitio web|Sitios web","app.collections":"ColecciÃ³n|Colecciones","app.articles":"ArtÃ­culo|ArtÃ­culos","app.your_vote":"Tu voto","login_or_create.header":"Ingresa o crea una cuenta","login_or_create.not_a_member_yet":"Â¿AÃºn no eres miembro?","login_or_create.register_now":"RegÃ­strate ahora","login_or_create.login_with_your_email":"Ingresa con tu e-mail","login_or_create.forgot_your_password":"Â¿Has olvidado tu contraseÃ±a?","login_or_create.login_now":"Ingresar ahora","login_or_create.connect_with":"Conecta con","login_or_create.email_or_username":"E-mail o nombre de usuario","login_or_create.keep_me_logged_in":"Mantener sesiÃ³n iniciada","login_or_create.password":"ContraseÃ±a","login_or_create.sign_in_to_continue":"Iniciar sesiÃ³n","login_or_create.or_sign_in_with":"O inicia sesiÃ³n con","users_like_this":"a <strong>%users%</strong> usuario le gusta esto|a <strong>%users%</strong> usuarios les gusta esto","about.status.privileges.jury.title":"Un grupo de expertos seleccionados anualmente por el equipo de Awwwards cuya implicaciÃ³n y experiencia es fundamental para el funcionamiento de Awwwards.","about.status.privileges.jury.description_1":"Su voto determina la puntuaciÃ³n final del Sitio del DÃ­a, Sitio del Mes, MenciÃ³n de Honor y Sitio del AÃ±o.","about.status.privileges.jury.description_2":"Cada aÃ±o los 5 mejores usuarios son invitados a unirse al Jurado del siguiente aÃ±o.","about.status.privileges.pro.title":"Un grupo de agencias y diseÃ±adores reconocidos internacionalmente, los cuales han invertido en Awwwards y se han registrado con un Plan Profesional.","about.status.privileges.pro.description_1":"Sus votos cuentan para Sitio del DÃ­a y MenciÃ³n de Honor.","about.status.privileges.pro.description_2":"Perfil destacado en los resultados de bÃºsqueda del Directorio.","about.status.privileges.chief.title":"Usuarios con talento que a travÃ©s de su esfuerzo y compromiso han ganado 1 Sitio del DÃ­a, 3 Menciones de Honor o ganado 5000 puntos.","about.status.privileges.chief.description_1":"Sus votos cuentan para el Sitio del DÃ­a y MenciÃ³n de Honor.","about.status.privileges.chief.description_2":"Perfil incluido en el Directorio.","about.status.privileges.tribe.title":"Usuario bÃ¡sico cuya participaciÃ³n y contribuciÃ³n a partir de su conocimiento ayuda a mejorar la comunidad de Awwwards.","about.status.privileges.tribe.description_1":"Los votos cuentan para obtener el certificado de \\"MÃ©rito por Website Admirable\\" (pero no para el Sitio del DÃ­a o la MenciÃ³n de Honor).","about.status.privileges.tribe.description_2":"El perfil no estÃ¡ presente en el Directorio.","form.talent.about_us":"Sobre nosotros","form.talent.name":"Nombre, agencia / empresa","form.email":"Correo electrÃ³nico","form.website":"Sitio web","form.talent.message":"Â¿Podemos colaborar?","form.talent.message_description":"Estamos interesados en lo siguiente...","form.characters_remaining":"caracteres restantes.","form.characters_remaining_no_html":"caracteres restantes. HTML no permitido.","form.add_a_url_with_http":"AÃ±ade una URL con http://","form.validate.select_less":"Debes especificar %max% o menos","form.validate.select_at_least":"Debes especificar al menos %min%","form.creative_fields.tip":"Selecciona los elementos creativos que mejor describan tu trabajo","form.categories.tip":"Selecciona algunas categorÃ­as","form.tags.tip":"Selecciona algunas tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"ENVIAR MENSAJE","collection.create_a_new_collection":"Crea una colecciÃ³n nueva","legend_circle.design":"DiseÃ±o","legend_circle.usability":"Usabilidad","legend_circle.creativity":"Creatividad","legend_circle.content":"Contenido","search.no_result.title":"Â¡Tu bÃºsqueda no ha tenido Ã©xito!","search.no_result.try_some_different_keywords":"Prueba algunas palabras clave diferentes.","search.no_result.use_more_general_keywords":"Usa mÃ¡s palabras clave generales.","payment.processing_payment":"Procesando pago","app.notification.changes_saved":"Tus cambios han sido guardados.","legend_circle.responsive_design":"DiseÃ±o responsive","legend_circle.animations":"AnimaciÃ³n","legend_circle.accessibility":"Accesibilidad","legend_circle.semantics":"SemÃ¡ntica / SEO","app.final_score":"Nota final","app.show_all":"Mostrar todo","app.notification.collection_created":"Se ha creado la colecciÃ³n","vote_opinion.what_do_you_like":"Â¿QuÃ© es lo que te gusta?","vote_opinion.what_do_you_think":"Â¿QuÃ© opinas sobre este sitio web?","vote_opinion.think.master_piece":"Una obra maestra","vote_opinion.think.sotd":"Un SOTD","vote_opinion.think.not_sotd":"No es un SOTD","vote_opinion.like.animation":"AnimaciÃ³n","vote_opinion.like.content_architecture":"Arquitectura de contenido","vote_opinion.like.copy_design":"DiseÃ±o de copy","vote_opinion.like.interaction":"InteracciÃ³n","vote_opinion.like.layout":"GalerÃ­a","vote_opinion.like.navigation":"NavegaciÃ³n web","vote_opinion.like.photo_video":"Foto y video","vote_opinion.like.typography":"TipografÃ­a","vote_opinion.like.ui_design":"DiseÃ±o UI","vote_opinion.details.menu":"MenÃº","vote_opinion.details.about_page":"DiseÃ±o pÃ¡ginas \\"Acerca de\\"","vote_opinion.details.transitions":"Transiciones","vote_opinion.details.header":"DiseÃ±o de Header","vote_opinion.details.contact_page":"PÃ¡gina de contacto","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"DiseÃ±o de footer","vote_opinion.details.project_page":"PÃ¡gina de proyecto","vote_opinion.details.filters_effects":"Filtros y efectos","vote_opinion.details.forms":"Formularios","vote_opinion.details.ecommerce":"Comercio electrÃ³nico","vote_opinion.details.storytelling":"Como lo cuentan","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"PÃ¡ginas 404","vote_opinion.details.illustration":"IlustraciÃ³n","collection_category.inspiration":"InspiraciÃ³n","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"TecnologÃ­a web","collection_category.resources":"Recursos","collection_category.other":"Otros","i_have_read_and_accepted_the_terms_and_conditions":"He leÃ­do y acepto los <strong> <a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">TÃ©rminos y condiciones</a></strong> y <strong> <a href = \\"%href_privacy_policy%\\" target = \\"_blank\\"> PolÃ­tica de privacidad</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"FELICIDADES","welcome_to_the_exclusive_awwwards_directory":"Â¡Bienvenido al exclusivo directorio de Awwwards!","directory_description":"El directorio es el lugar donde los mejores diseÃ±adores web, diseÃ±adores grÃ¡ficos, directores de arte, ilustradores, desarrolladores y profesionales del marketing vienen a conectar y hacer crecer su negocio.","app.close":"cerrar","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Hemos recibido tu aplicaciÃ³n para Awwwards","payment.submission_received.description":"Dentro de poco recibirÃ¡s un email de confirmaciÃ³n y en unos dÃ­as nuestro equipo enviarÃ¡ tu proyecto a nuestro estimado jurado para su evaluaciÃ³n. Â¡Buena suerte en la competiciÃ³n!","payment.job_submission_received":"Nos complace confirmarte que hemos recibido tu oferta de empleo","payment.submission_job_received.description":"Estamos comprobando los detalles, tu oferta serÃ¡ publicada pronto.","your_registration_is_complete":"Â¡Tu registro se ha completado!","new_register.received.description":"Si eres autÃ³nomo o trabajas para una agencia, aÃ±ade tu perfil a nuestro exclusivo directorio dirigido a profesionales del web. Atrae nuevos clientes, recluta el mejor talento y haz importantes conexiones de negocio. Â¡Ahora es el momento!","login_or_register":"Registro / Entrar","app.confirm_your_vote":"Confirmar voto","submission.sotm.nominees.thanks":"Â¡Gracias por tu voto!","explanation_default_credit_card":"Haremos que este sea tu mÃ©todo de pago predeterminado para futuras compras en Awwwards. Los pagos anuales de las suscripciones se realizarÃ¡n con esta tarjeta.","form.edit_information":"Editar info","add_billing_info":"AÃ±adir datos de facturaciÃ³n","form.select_technologies.no_results":"Agregue otras tecnologÃ­as en \\"Otras tecnologÃ­as","complete_course_to_download_certificate":"Para descargar su certificado debe completar al menos el 95% del Curso.","certificate_of_completion":"Certificado de finalizaciÃ³n","courses":"Curso|Cursos"},"ko":{"app.following":"íŒ”ë¡œìš° í•˜ê¸°","app.follow":"íŒ”ë¡œìš°","form.description":"ì„¤ëª…","form.name":"ì„±ëª…","form.select_category":"ë²”ì£¼ ì„ íƒ...","footer_box.share_collection":"ìžì‹ ì˜ íŒ€ê³¼ ê³µìœ !","footer_box.edit_collection":"ì»¬ë ‰ì…˜ íŽ¸ì§‘","app.show_filters":"í•„í„° í‘œì‹œ","search.we_found":"ê²€ìƒ‰ëœ í•­ëª©:","search.placeholder":"ê²€ìƒ‰í•˜ì—¬ ì˜ê°ì„ ì–»ìœ¼ì„¸ìš” (HTML5, VR, RED, MINIMAL...)","app.and":"ë°","app.for":"ê²€ìƒ‰ í•­ëª©:","app.elements":"ìš”ì†Œ|ìš”ì†Œ","app.jobs":"ì¼ìžë¦¬|ì¼ìžë¦¬","app.create":"ë§Œë“¤ê¸°","app.load_more":"ë” ë³´ê¸°","app.loading":"ë¡œë”© ì¤‘","app.more_info":"ìžì„¸í•œ ì •ë³´","app.cancel":"ì·¨ì†Œ","app.private":"ì‚¬ì ","app.save":"ì €ìž¥","app.delete_collection":"ì»¬ë ‰ì…˜ ì‚­ì œ","app.deleting_collection":"ì»¬ë ‰ì…˜ ì‚­ì œ ì¤‘...","user.collections.menu.collections":"ì»¬ë ‰ì…˜|ì»¬ë ‰ì…˜","app.yes":"ì˜ˆ","app.no":"No","app.collaborator":"í˜‘ë ¥ìž","app.delete_account":"ê³„ì • ì‚­ì œ","app.delete":"Delete","app.are_you_sure":"ê³„ì†í•˜ì‹œê² ìŠµë‹ˆê¹Œ?","app.add_to_collections":"ì»¬ë ‰ì…˜ì— ì¶”ê°€!","app.activate_black_option":"ë¸”ëž™ ì˜µì…˜ í™œì„±í™”","app.activate_white_option":"í™”ì´íŠ¸ ì˜µì…˜ í™œì„±í™”","app.send_vote":"íˆ¬í‘œ ë³´ë‚´ê¸°","app.edit_your_vote":"ìžì‹ ì˜ íˆ¬í‘œ íŽ¸ì§‘","app.edit":"íŽ¸ì§‘","app.users":"ì‚¬ìš©ìž|ì‚¬ìš©ìž","app.judges":"ì‹¬ì˜ê´€|ì‹¬ì˜ê´€","app.votes":"íˆ¬í‘œ|íˆ¬í‘œ","app.user_type.short.pro":"í”„ë¡œíŽ˜ì…”ë„","app.user_type.short.tribe":"íŠ¸ë¼ìž…","app.user_type.short.chief":"ì¹˜í”„","app.user_type.short.jury":"ë°°ì‹¬ì›ë‹¨","app.websites":"ì›¹ì‚¬ì´íŠ¸|ì›¹ì‚¬ì´íŠ¸","app.collections":"ì»¬ë ‰ì…˜|ì»¬ë ‰ì…˜","app.articles":"ë…¼ë¬¸|ë…¼ë¬¸","app.your_vote":"ìžì‹ ì˜ íˆ¬í‘œ","login_or_create.header":"ë¡œê·¸ì¸ ë˜ëŠ” ê³„ì • ë§Œë“¤ê¸°","login_or_create.not_a_member_yet":"ì•„ì§ íšŒì›ì´ ì•„ë‹ˆì‹­ë‹ˆê¹Œ?","login_or_create.register_now":"ë°”ë¡œ ê°€ìž…","login_or_create.login_with_your_email":"ì´ë©”ì¼ë¡œ ë¡œê·¸ì¸","login_or_create.forgot_your_password":"ë¹„ë°€ë²ˆí˜¸ë¥¼ ìžŠìœ¼ì…¨ë‚˜ìš”?","login_or_create.login_now":"ë¡œê·¸ì¸í•˜ê¸°","login_or_create.connect_with":"ì—°ê²° ëŒ€ìƒ:","login_or_create.email_or_username":"ì´ë©”ì¼ ë˜ëŠ” ì‚¬ìš©ìžëª…","login_or_create.keep_me_logged_in":"ë¡œê·¸ì¸ ìƒíƒœ ìœ ì§€","login_or_create.password":"ë¹„ë°€ë²ˆí˜¸","login_or_create.sign_in_to_continue":"ë¡œê·¸ì¸í•˜ê¸°","login_or_create.or_sign_in_with":"ë‹¤ë¥¸ ê³„ì •ìœ¼ë¡œ ë¡œê·¸ì¸","users_like_this":"ì´ê²ƒì— ëŒ€í•´ <strong>%users%</strong> ì‚¬ìš©ìžì˜ ì¢‹ì•„ìš”|ì´ê²ƒì— ëŒ€í•´ <strong>%users%</strong> ì‚¬ìš©ìžì˜ ì¢‹ì•„ìš”","about.status.privileges.jury.title":"í•´ë‹¹ ì°¸ì—¬ì™€ ì „ë¬¸ì„±ì´ Awwwardsì˜ ìš´ìš©ì— í•µì‹¬ì ì¸ Awwwards íŒ€ì— ì˜í•´ ë§¤ë…„ ì„ ì •ë˜ëŠ” ì „ë¬¸ê°€ ê·¸ë£¹.","about.status.privileges.jury.description_1":"ì´ëŸ¬í•œ ì‚¬ìš©ìžì˜ íˆ¬í‘œëŠ” ã€Œì˜¤ëŠ˜ì˜ ì‚¬ì´íŠ¸ã€, ã€Œì´ë‹¬ì˜ ì‚¬ì´íŠ¸ã€, ã€Œì„ ì™¸ ê°€ìž‘ ì‚¬ì´íŠ¸ã€, ã€Œì˜¬í•´ì˜ ì‚¬ì´íŠ¸ã€ì˜ ìµœì¢… ì ìˆ˜ë¥¼ ê²°ì •í•˜ê²Œ ë©ë‹ˆë‹¤.","about.status.privileges.jury.description_2":"ë§¤ë…„ 5ëª…ì˜ ìƒìœ„ ì‚¬ìš©ìžê°€ ë‹¤ìŒ ì—°ë„ì˜ ë°°ì‹¬ì›ì— í•©ë¥˜í•˜ë„ë¡ ì´ˆëŒ€ë©ë‹ˆë‹¤.","about.status.privileges.pro.title":"Awwwardsì— íˆ¬ìží•˜ê³  ã€Œí”„ë¡œíŽ˜ì…”ë„ í”Œëžœã€ìœ¼ë¡œ ë“±ë¡ëœ êµ­ì œì ì„ ì¸ì •ì„ ë°›ëŠ” ì—ì´ì „ì‹œì™€ ë””ìžì´ë„ˆì˜ ê·¸ë£¹.","about.status.privileges.pro.description_1":"ì´ëŸ¬í•œ ì‚¬ìš©ìžì˜ íˆ¬í‘œëŠ” ã€Œì˜¤ëŠ˜ì˜ ì‚¬ì´íŠ¸ã€ ë° ã€Œì„ ì™¸ ê°€ìž‘ ì‚¬ì´íŠ¸ã€ì— ì‚¬ìš©ë©ë‹ˆë‹¤.","about.status.privileges.pro.description_2":"í”„ë¡œí•„ì´ ë””ë ‰í„°ë¦¬ ê²€ìƒ‰ ê²°ê³¼ì—ì„œ ê°•ì¡°ë˜ì–´ í‘œì‹œë¨.","about.status.privileges.chief.title":"ìž¬ëŠ¥ ì‚¬ìš©ìžëŠ” ë…¸ê³ ì™€ í—Œì‹ ìœ¼ë¡œ ã€Œì˜¤ëŠ˜ì˜ ì‚¬ì´íŠ¸ã€ 1íšŒ, ã€Œì„ ì™¸ ê°€ìž‘ ì‚¬ì´íŠ¸ã€ 3íšŒ ë˜ëŠ” 5,000 í¬ì¸íŠ¸ ì´ìƒì„ ë°›ì€ ìœ í˜•ìž…ë‹ˆë‹¤.","about.status.privileges.chief.description_1":"ì´ëŸ¬í•œ ì‚¬ìš©ìžì˜ íˆ¬í‘œëŠ” ã€Œì˜¤ëŠ˜ì˜ ì‚¬ì´íŠ¸ã€ ë° ã€Œì„ ì™¸ ê°€ìž‘ ì‚¬ì´íŠ¸ã€ì— ì‚¬ìš©ë©ë‹ˆë‹¤.","about.status.privileges.chief.description_2":"í”„ë¡œí•„ì— ë””ë ‰í„°ë¦¬ì— í¬í•¨ë¨.","about.status.privileges.tribe.title":"ê¸°ë³¸ ì‚¬ìš©ìžëŠ” Awwwards ì»¤ë®¤ë‹ˆí‹°ì— ì°¸ì—¬í•˜ê³  ì´ë¥¼ í–¥ìƒì‹œí‚¤ëŠ” ë°ì— ìžì‹ ì˜ ì§€ì‹ìœ¼ë¡œ ê¸°ì—¬í•˜ëŠ” ìœ í˜•ìž…ë‹ˆë‹¤.","about.status.privileges.tribe.description_1":"ê¸°ë³¸ ì‚¬ìš©ìžì˜ íˆ¬í‘œëŠ” â€œì¹­ì°¬ì„ ë°›ì„ ë§Œí•œ ìž¥ì ì´ ìžˆëŠ” ì‚¬ì´íŠ¸â€ ì¸ì¦ì„œ(ã€Œì˜¤ëŠ˜ì˜ ì‚¬ì´íŠ¸ã€ë‚˜ ã€Œì„ ì™¸ ê°€ìž‘ ì‚¬ì´íŠ¸ã€ê°€ ì•„ë‹˜ )ì— ì‚¬ìš©ë©ë‹ˆë‹¤.","about.status.privileges.tribe.description_2":"í”„ë¡œí•„ì´ ë””ë ‰í„°ë¦¬ì— ì¡´ìž¬í•˜ì§€ ì•ŠìŒ.","form.talent.about_us":"ì†Œê°œ","form.talent.name":"ì„±ëª…, ì—ì´ì „ì‹œ / íšŒì‚¬...","form.email":"ì´ë©”ì¼","form.website":"ì›¹ì‚¬ì´íŠ¸","form.talent.message":"í˜‘ë ¥í•  ìˆ˜ ìžˆì„ê¹Œìš”?","form.talent.message_description":"ë‹¤ìŒê³¼ ê°™ì€ ì‚¬í•­ì— ê´€ì‹¬ì´ ìžˆìŠµë‹ˆë‹¤...","form.characters_remaining":"ë‚¨ì„ ê¸€ìž ìˆ˜.","form.characters_remaining_no_html":"ë‚¨ì„ ê¸€ìž ìˆ˜. HTML í—ˆìš©ë˜ì§€ ì•ŠìŒ.","form.add_a_url_with_http":"â€˜http://â€™ë¥¼ í¬í•¨í•œ URL ì¶”ê°€","form.validate.select_less":"%max% ì´í•˜ë¡œ ì§€ì •í•´ì•¼ í•©ë‹ˆë‹¤","form.validate.select_at_least":"%min% ì´ìƒìœ¼ë¡œ ì§€ì •í•´ì•¼ í•©ë‹ˆë‹¤","form.creative_fields.tip":"ìžì‹ ì˜ ìž‘í’ˆì„ ê°€ìž¥ ìž˜ ì„¤ëª…í•˜ëŠ” ì°½ì˜ì„± ë¶„ì•¼ë¥¼ ì„ íƒí•˜ì‹­ì‹œì˜¤.","form.categories.tip":"ë²”ì£¼ ì¼ë¶€ ì„ íƒ","form.tags.tip":"ì¼ë¶€ íƒœê·¸ ì„ íƒ","form.tags":"íƒœê·¸","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"ë©”ì‹œì§€ ë³´ë‚´ê¸°","collection.create_a_new_collection":"ìƒˆ ì»¬ë ‰ì…˜ ë§Œë“¤ê¸°","legend_circle.design":"ë””ìžì¸","legend_circle.usability":"ì‚¬ìš©ì„±","legend_circle.creativity":"ì°½ì˜ì„±","legend_circle.content":"ì½˜í…ì¸ ","search.no_result.title":"ê²€ìƒ‰ ì‹¤íŒ¨!","search.no_result.try_some_different_keywords":"ë‹¤ë¥¸ í‚¤ì›Œë“œë¡œ ì‹œë„í•˜ì‹­ì‹œì˜¤.","search.no_result.use_more_general_keywords":"ë³´ë‹¤ ì¼ë°˜ì ì¸ í‚¤ì›Œë“œë¡œ ì‹œë„í•˜ì‹­ì‹œì˜¤.","payment.processing_payment":"ê²°ì œ ì²˜ë¦¬ ì¤‘","app.notification.changes_saved":"ë³€ê²½ë‚´ìš©ì´ ì €ìž¥ë˜ì—ˆìŠµë‹ˆë‹¤.","legend_circle.responsive_design":"í˜¸ì‘í•˜ëŠ” ë””ìžì¸","legend_circle.animations":"ì• ë‹ˆë©”ì´ì…˜","legend_circle.accessibility":"ì ‘ê·¼ì„±","legend_circle.semantics":"ì˜ë¯¸ë¡ ","app.final_score":"ìµœì¢… ì ìˆ˜","app.show_all":"ëª¨ë‘ í‘œì‹œ","app.notification.collection_created":"ì»¬ë ‰ì…˜ì´ ë§Œë“¤ì–´ ì¡ŒìŠµë‹ˆë‹¤","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"ìƒê¸°","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"ë””ìžì¸ ë³µì‚¬","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"ê°±ë„","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"ë¯¸ì„¸ìƒí˜¸ìž‘ìš©","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"ì´ì•¼ê¸° ì „ê°œ","vote_opinion.details.scrolling":"ìŠ¤í¬ë¡¤ë§","vote_opinion.details.404":"404","vote_opinion.details.illustration":"ì‚½í™”","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"ë¦¬ì†ŒìŠ¤","collection_category.other":"ë‹¤ë¥¸","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"ì¶•í•˜í•©ë‹ˆë‹¤","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"ë‹«ê¸°","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Awwwardsë¥¼ ìœ„í•œ ì œì¶œì„ ìˆ˜ë ¹í–ˆìŠµë‹ˆë‹¤","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"ì¼ìžë¦¬ ê²Œì‹œ ìš”ì²­ì˜ ì œì¶œì„ ìˆ˜ë ¹í–ˆìŒ í™•ì¸í•´ ë“œë¦½ë‹ˆë‹¤.","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"íšŒì›ê°€ìž…ì´ ì™„ë£Œë˜ì—ˆìŠµë‹ˆë‹¤.","new_register.received.description":"í”„ë¦¬ëžœì„œì´ê±°ë‚˜ ì›¹ì—ì´ì „ì‹œì¸ ê²½ìš° ì›¹ ì „ë¬¸ê°€ ë””ë ‰í„°ë¦¬ì— í”„ë¡œí•„ì„ ì¶”ê°€í•˜ì„¸ìš”.\\nìƒˆë¡œìš´ ê³ ê°ì„ ë§Œë‚˜ê³  ì¤‘ìš”í•œ ë¹„ì¦ˆë‹ˆìŠ¤ ê´€ê³„ë¥¼ êµ¬ì¶•í•˜ì„¸ìš”.\\nì§€ê¸ˆì´ ì ˆí˜¸ì˜ ê¸°íšŒìž…ë‹ˆë‹¤!","login_or_register":"íšŒì›ê°€ìž… / ë¡œê·¸ì¸","app.confirm_your_vote":"ìžì‹ ì˜ íˆ¬í‘œ í™•ì¸","submission.sotm.nominees.thanks":"íˆ¬í‘œí•´ ì£¼ì…”ì„œ ê°ì‚¬í•©ë‹ˆë‹¤!","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"ì •ë³´ íŽ¸ì§‘","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"zh":{"app.following":"å…³æ³¨","app.follow":"å…³æ³¨","form.description":"æè¿°","form.name":"å§“å","form.select_category":"é€‰æ‹©åˆ†ç±»","footer_box.share_collection":"å’Œæ‚¨çš„å›¢é˜Ÿåˆ†äº«ï¼","footer_box.edit_collection":"ç¼–è¾‘æ”¶è—","app.show_filters":"æ˜¾ç¤ºç­›é€‰æ¡ä»¶","search.we_found":"æˆ‘ä»¬æ‰¾åˆ°äº†","search.placeholder":"å¯»æ‰¾çµæ„Ÿï¼ˆHTML5, VR, RED, MINIMALâ€¦â€¦ï¼‰","app.and":"å’Œ","app.for":"å«æœ‰","app.elements":"å…ƒç´ |å…ƒç´ ","app.jobs":"æ‹›è˜|æ‹›è˜","app.create":"åˆ›å»º","app.load_more":"åŠ è½½æ›´å¤š","app.loading":"åŠ è½½ä¸­","app.more_info":"æ›´å¤šä¿¡æ¯","app.cancel":"å–æ¶ˆ","app.private":"ç§äºº","app.save":"ä¿å­˜","app.delete_collection":"åˆ é™¤æ”¶è—","app.deleting_collection":"æ­£åœ¨åˆ é™¤æ”¶è—â€¦â€¦","user.collections.menu.collections":"æ”¶è—|æ”¶è—","app.yes":"æ˜¯","app.no":"No","app.collaborator":"åˆä½œè€…","app.delete_account":"åˆ é™¤è´¦å·","app.delete":"åˆ é™¤","app.are_you_sure":"æ‚¨ç¡®å®šå—ï¼Ÿ","app.add_to_collections":"åŠ å…¥æ”¶è—ï¼","app.activate_black_option":"å¼€å¯é»‘è‰²é€‰é¡¹","app.activate_white_option":"æ¿€æ´»ç™½è‰²é€‰é¡¹","app.send_vote":"å‘é€è¯„åˆ†","app.edit_your_vote":"æ›´æ”¹æ‚¨çš„è¯„åˆ†","app.edit":"ç¼–è¾‘","app.users":"ç”¨æˆ·|ç”¨æˆ·","app.judges":"è¯„å§”|è¯„å§”","app.votes":"è¯„åˆ†|è¯„åˆ†","app.user_type.short.pro":"ä¸“ä¸š","app.user_type.short.tribe":"éƒ¨è½çº§","app.user_type.short.chief":"é¦–å¸­","app.user_type.short.jury":"è¯„å§”","app.websites":"ç½‘ç«™|ç½‘ç«™","app.collections":"æ”¶è—|æ”¶è—","app.articles":"æ–‡ç« |æ–‡ç« ","app.your_vote":"æ‚¨çš„è¯„åˆ†","login_or_create.header":"ç™»å½•æˆ–åˆ›å»ºå¸æˆ·","login_or_create.not_a_member_yet":"å°šæœªæˆä¸ºä¼šå‘˜ï¼Ÿ","login_or_create.register_now":"é©¬ä¸Šæ³¨å†Œ","login_or_create.login_with_your_email":"ä½¿ç”¨æ‚¨çš„ç”µå­é‚®ç®±ç™»å½•","login_or_create.forgot_your_password":"æ‚¨å¿˜è®°äº†å¯†ç ","login_or_create.login_now":"é©¬ä¸Šç™»å½•","login_or_create.connect_with":"è¿žæŽ¥è‡³","login_or_create.email_or_username":"ç”µå­é‚®ç®±æˆ–ç”¨æˆ·å","login_or_create.keep_me_logged_in":"ä¿æŒç™»å½•çŠ¶æ€","login_or_create.password":"å¯†ç ","login_or_create.sign_in_to_continue":"ç™»å½•ä»¥ç»§ç»­","login_or_create.or_sign_in_with":"æˆ–ä½¿ç”¨ä»¥ä¸‹ä¿¡æ¯ç™»å½•","users_like_this":"<Strong>%users%</strong> ç”¨æˆ·èµžäº†è¿™ä¸ª|<strong>%users%</strong> ç”¨æˆ·èµžäº†è¿™ä¸ª","about.status.privileges.jury.title":"ç”±Awwwardså›¢é˜Ÿæ¯å¹´æŒ‘é€‰å‡ºçš„ä¸“å®¶ç»„ï¼Œä»–ä»¬çš„å‚ä¸Žå’Œä¸“ä¸šçŸ¥è¯†æ˜¯Awwwardsçš„è¿ä½œåŸºç¡€ã€‚","about.status.privileges.jury.description_1":"ä»–ä»¬çš„è¯„åˆ†å°†å†³å®šæœ¬æ—¥ç½‘ç«™ã€æœ¬æœˆç½‘ç«™ã€è£èª‰æåå’Œå¹´åº¦ç½‘ç«™çš„èŽ·å¥–è€…ã€‚","about.status.privileges.jury.description_2":"æœ¬å¹´åº¦5ä½æœ€ä½³ç”¨æˆ·éƒ½å°†è¢«é‚€è¯·æˆä¸ºä¸‹ä¸€å¹´çš„è¯„å§”ã€‚","about.status.privileges.pro.title":"å›½é™…å…¬è®¤çš„åœ¨Awwwardså®Œæˆæ³¨å†Œå¹¶åŠ å…¥ä¸“ä¸šè®¡åˆ’çš„ä»£ç†æœºæž„å’Œè®¾è®¡å¸ˆå›¢é˜Ÿã€‚","about.status.privileges.pro.description_1":"ä»–ä»¬çš„è¯„åˆ†å°†è¢«è®¡å…¥æœ¬æ—¥ç½‘ç«™å’Œè£èª‰æåã€‚","about.status.privileges.pro.description_2":"ä¸ªäººèµ„æ–™åœ¨ç›®å½•æœç»“æžœä¸­ï¼Œçªå‡ºæ˜¾ç¤ºã€‚","about.status.privileges.chief.title":"é€šè¿‡è‡ªèº«åŠªåŠ›èŽ·å¾—äº†1ä¸ªæœ¬æ—¥ç½‘ç«™ã€3ä¸ªè£èª‰æåæˆ–ç´¯è®¡èŽ·å¾—5000ç§¯åˆ†çš„ç”¨æˆ·ã€‚","about.status.privileges.chief.description_1":"ä»–ä»¬çš„è¯„åˆ†å°†è¢«è®¡å…¥æœ¬æ—¥ç½‘ç«™å’Œè£èª‰æåã€‚","about.status.privileges.chief.description_2":"ä¸ªäººèµ„æ–™å·²å­˜å…¥ç›®å½•ã€‚","about.status.privileges.tribe.title":"åˆçº§ç”¨æˆ·çš„å‚ä¸Žå’ŒçŸ¥è¯†è´¡çŒ®æœ‰åŠ©äºŽæ”¹å–„Awwwardsç¤¾åŒºã€‚","about.status.privileges.tribe.description_1":"ä»–ä»¬çš„è¯„åˆ†å°†è¢«è®¡å…¥â€œå€¼å¾—ç§°èµžçš„ç½‘ç«™â€è¯ä¹¦ï¼ˆä½†ä¸è¢«è®¡å…¥æœ¬æ—¥ç½‘ç«™æˆ–è£èª‰æåï¼‰ã€‚","about.status.privileges.tribe.description_2":"ä¸ªäººèµ„æ–™æ— æ³•æ”¶å½•åœ¨ç›®å½•ä¸­ã€‚","form.talent.about_us":"å…³äºŽæˆ‘ä»¬","form.talent.name":"åç§°ã€ä»£ç†/å…¬å¸â€¦â€¦","form.email":"ç”µå­é‚®ä»¶","form.website":"ç½‘ç«™","form.talent.message":"æˆ‘ä»¬å¯ä»¥åˆä½œå—ï¼Ÿ","form.talent.message_description":"æˆ‘ä»¬æ„Ÿå…´è¶£çš„æœ‰â€¦â€¦","form.characters_remaining":"å‰©ä½™å­—ç¬¦ã€‚","form.characters_remaining_no_html":"å‰©ä½™å­—ç¬¦ã€‚ä¸å…è®¸HTMLã€‚","form.add_a_url_with_http":"åŠ å…¥ä»¥http://å¼€å¤´çš„ç½‘ç«™","form.validate.select_less":"æ‚¨å¿…é¡»è®¾å®š%max%æˆ–æ›´å°‘","form.validate.select_at_least":"æ‚¨è‡³å°‘å¿…é¡»è®¾å®š%min%","form.creative_fields.tip":"é€‰æ‹©æœ€è´´åˆ‡æ‚¨ä½œå“çš„åˆ›æ„é¢†åŸŸã€‚","form.categories.tip":"é€‰æ‹©ä¸€äº›åˆ†ç±»","form.tags.tip":"é€‰æ‹©ä¸€äº›æ ‡ç­¾","form.tags":"æ ‡ç­¾","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"å‘é€ä¿¡æ¯","collection.create_a_new_collection":"åˆ›å»ºæ–°çš„æ”¶è—","legend_circle.design":"è®¾è®¡","legend_circle.usability":"å®žç”¨æ€§","legend_circle.creativity":"åˆ›æ„","legend_circle.content":"å†…å®¹","search.no_result.title":"æ‚¨çš„æœç´¢æœªèƒ½æˆåŠŸï¼","search.no_result.try_some_different_keywords":"è¯·ä½¿ç”¨ä¸åŒçš„å…³é”®å­—ã€‚","search.no_result.use_more_general_keywords":"è¯·ä½¿ç”¨æ›´é€šç”¨çš„å…³é”®å­—ã€‚","payment.processing_payment":"æ­£åœ¨å¤„ç†ä»˜æ¬¾","app.notification.changes_saved":"æ‚¨çš„æ›´æ”¹å·²ä¿å­˜ã€‚","legend_circle.responsive_design":"å“åº”å¼è®¾è®¡","legend_circle.animations":"åŠ¨ç”»","legend_circle.accessibility":"å¯è®¿é—®æ€§","legend_circle.semantics":"è¯­ä¹‰","app.final_score":"æœ€ç»ˆå¾—åˆ†","app.show_all":"æ˜¾ç¤ºå…¨éƒ¨","app.notification.collection_created":"æ‚¨çš„æ”¶è—å·²åˆ›å»º","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"æ°ä½œ","vote_opinion.think.sotd":"å®ƒæ˜¯ SOTD","vote_opinion.think.not_sotd":"å®ƒä¸æ˜¯ SOTD","vote_opinion.like.animation":"åŠ¨ç”»","vote_opinion.like.content_architecture":"å†…å®¹æž¶æž„","vote_opinion.like.copy_design":"æ­£æ–‡æ–‡å­—è®¾è®¡","vote_opinion.like.interaction":"äº’åŠ¨","vote_opinion.like.layout":"ç”»å»Š","vote_opinion.like.navigation":"å¯¼èˆªæ ","vote_opinion.like.photo_video":"ç…§ç‰‡å’Œè§†é¢‘","vote_opinion.like.typography":"æ–‡å­—è®¾è®¡","vote_opinion.like.ui_design":"UIè®¾è®¡","vote_opinion.details.menu":"æŒ‰é’®","vote_opinion.details.about_page":"å…³äºŽé¡µé¢","vote_opinion.details.transitions":"é¡µé¢è¿‡æ¸¡","vote_opinion.details.header":"é¡µå¤´","vote_opinion.details.contact_page":"è”ç³»é¡µé¢","vote_opinion.details.microinterations":"å¾®äº’åŠ¨","vote_opinion.details.footer":"é¡µè„š","vote_opinion.details.project_page":"é¡¹ç›®é¡µé¢","vote_opinion.details.filters_effects":"ç­›é€‰å™¨ & æ•ˆæžœ","vote_opinion.details.forms":"è¡¨å•","vote_opinion.details.ecommerce":"é›»å­å•†å‹™","vote_opinion.details.storytelling":"æ•…äº‹æ€§","vote_opinion.details.scrolling":"æ»šåŠ¨ç‰¹æ•ˆ","vote_opinion.details.404":"404","vote_opinion.details.illustration":"æ’ç”»","collection_category.inspiration":"çµæ„Ÿ","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"ç½‘é¡µæŠ€æœ¯","collection_category.resources":"èµ„æº","collection_category.other":"å…¶ä»–","i_have_read_and_accepted_the_terms_and_conditions":"æˆ‘å·²é˜…è¯»å¹¶æŽ¥å— <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a>","app.no_info_provided":"æ— æ›´å¤šä¿¡æ¯","app.congratulations":"æ­å–œ","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"å…³é—­","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"æˆ‘ä»¬å·²ç»æ”¶åˆ°æ‚¨çš„Awwwardså¥–ç”³è¯·","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"å¾ˆè£å¹¸é€šçŸ¥æ‚¨ï¼Œæˆ‘ä»¬å·²æ”¶åˆ°æ‚¨æäº¤çš„æ‹›è˜","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"æ³¨å†Œ/ç™»å½•","app.confirm_your_vote":"ç¡®è®¤æ‚¨çš„è¯„åˆ†","submission.sotm.nominees.thanks":"æ„Ÿè°¢æ‚¨çš„è¯„åˆ†ï¼","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"ç¼–è¾‘ä¿¡æ¯","add_billing_info":"æ·»åŠ è´¦å•ä¿¡æ¯","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"ja":{"app.following":"ãƒ•ã‚©ãƒ­ãƒ¼","app.follow":"ãƒ•ã‚©ãƒ­ãƒ¼","form.description":"èª¬æ˜Ž:","form.name":"æ°å","form.select_category":"ã‚«ãƒ†ã‚´ãƒªãƒ¼ã‚’é¸æŠžã—ã¦ãã ã•ã„...","footer_box.share_collection":"ãƒãƒ¼ãƒ ã§ã‚·ã‚§ã‚¢ã—ã‚ˆã†ï¼","footer_box.edit_collection":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã‚’ç·¨é›†ã™ã‚‹","app.show_filters":"ãƒ•ã‚£ãƒ«ã‚¿ãƒ¼ã‚’è¡¨ç¤ºã™ã‚‹","search.we_found":"æ¤œç´¢çµæžœ","search.placeholder":"ã‚¤ãƒ³ã‚¹ãƒ”ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³æ¤œç´¢ (HTML5, VR, RED, MINIMAL...)ã€‚","app.and":"and","app.for":"for","app.elements":"è¦ç´ |è¦ç´ ","app.jobs":"æ±‚äººåºƒå‘Š|æ±‚äººåºƒå‘Š","app.create":"ä½œæˆã™ã‚‹","app.load_more":"ã‚‚ã£ã¨è¡¨ç¤º","app.loading":"èª­ã¿è¾¼ã¿ä¸­","app.more_info":"è©³ã—ã„æƒ…å ±ã¯ã“ã¡ã‚‰","app.cancel":"ã‚­ãƒ£ãƒ³ã‚»ãƒ«","app.private":"ãƒ—ãƒ©ã‚¤ãƒ™ãƒ¼ãƒˆ","app.save":"ä¿å­˜ã™ã‚‹","app.delete_collection":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã‚’å‰Šé™¤ã™ã‚‹","app.deleting_collection":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã‚’å‰Šé™¤ä¸­...","user.collections.menu.collections":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³|ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³","app.yes":"ã¯ã„","app.no":"No","app.collaborator":"å…±åŒåˆ¶ä½œè€…","app.delete_account":"ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’å‰Šé™¤ã™ã‚‹","app.delete":"å‰Šé™¤","app.are_you_sure":"ç¢ºã‹ã§ã™ã‹ï¼Ÿ","app.add_to_collections":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã«è¿½åŠ ï¼","app.activate_black_option":"ãƒ–ãƒ©ãƒƒã‚¯ãƒ¢ãƒ¼ãƒ‰","app.activate_white_option":"ãƒ›ãƒ¯ã‚¤ãƒˆã‚ªãƒ—ã‚·ãƒ§ãƒ³ã‚’æœ‰åŠ¹åŒ–ã™ã‚‹","app.send_vote":"æŠ•ç¥¨ã‚’é€ä¿¡ã™ã‚‹","app.edit_your_vote":"æŠ•ç¥¨ã‚’ç·¨é›†ã™ã‚‹","app.edit":"ç·¨é›†ã™ã‚‹","app.users":"ãƒ¦ãƒ¼ã‚¶ãƒ¼|ãƒ¦ãƒ¼ã‚¶ãƒ¼","app.judges":"å¯©æŸ»å“¡|å¯©æŸ»å“¡","app.votes":"æŠ•ç¥¨|æŠ•ç¥¨","app.user_type.short.pro":"PRO","app.user_type.short.tribe":"ãƒˆãƒ©ã‚¤ãƒ–","app.user_type.short.chief":"CHIEF","app.user_type.short.jury":"JURY","app.websites":"ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆ|ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆ","app.collections":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³|ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³","app.articles":"è¨˜äº‹|è¨˜äº‹","app.your_vote":"çš†æ§˜ã®æŠ•ç¥¨","login_or_create.header":"ãƒ­ã‚°ã‚¤ãƒ³ã¾ãŸã¯ã‚¢ã‚«ã‚¦ãƒ³ãƒˆç™»éŒ²","login_or_create.not_a_member_yet":"ä¼šå“¡ç™»éŒ²ã¯ãŠæ¸ˆã¿ã§ã™ã‹ï¼Ÿ","login_or_create.register_now":"ä»Šã™ãç™»éŒ²","login_or_create.login_with_your_email":"Eãƒ¡ãƒ¼ãƒ«ã§ãƒ­ã‚°ã‚¤ãƒ³","login_or_create.forgot_your_password":"ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰ã‚’å¿˜ã‚ŒãŸ","login_or_create.login_now":"ä»Šã™ããƒ­ã‚°ã‚¤ãƒ³","login_or_create.connect_with":"ï½žã§ã‚³ãƒã‚¯ãƒˆã™ã‚‹","login_or_create.email_or_username":"Eãƒ¡ãƒ¼ãƒ«ã¾ãŸã¯ãƒ¦ãƒ¼ã‚¶ãƒ¼å","login_or_create.keep_me_logged_in":"ãƒ­ã‚°ã‚¤ãƒ³çŠ¶æ…‹ã‚’ä¿æŒã™ã‚‹","login_or_create.password":"ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰","login_or_create.sign_in_to_continue":"ã‚µã‚¤ãƒ³ã‚¤ãƒ³ã—ã¦ç¶šè¡Œã™ã‚‹","login_or_create.or_sign_in_with":"ï½žã§ã‚µã‚¤ãƒ³ã‚¤ãƒ³ã™ã‚‹","users_like_this":"<Strong>%users%</strong> äººã®ãƒ¦ãƒ¼ã‚¶ãƒ¼ãŒã„ã„ã­ã—ã¾ã—ãŸ|<strong>%users%</strong> äººã®ãƒ¦ãƒ¼ã‚¶ãƒ¼ãŒã„ã„ã­ã—ã¾ã—ãŸ","about.status.privileges.jury.title":"Awwwards ãƒãƒ¼ãƒ ã«ã‚ˆã‚Šã€æ¯Žå¹´é¸æŠœã•ã‚Œã‚‹ã‚¨ã‚­ã‚¹ãƒ‘ãƒ¼ãƒˆé›†å›£ã§ã€ãã®é–¢ä¸Žã¨å°‚é–€çŸ¥è­˜ã¯Awwwards ã®é‹å–¶ã«æ¬ ã‹ã›ã¾ã›ã‚“ã€‚","about.status.privileges.jury.description_1":"å½¼ã‚‰ã®æŠ•ç¥¨ã¯SOTDã€SOTMã€HMã€SOTY ã®æœ€çµ‚çµæžœã‚’æ±ºå®šã¥ã‘ã¾ã™ã€‚","about.status.privileges.jury.description_2":"æ¯Žå¹´ã€ï¼•åã®ãƒˆãƒƒãƒ—ãƒ¦ãƒ¼ã‚¶ãƒ¼ãŒç¿Œå¹´ã®å¯©æŸ»ä¼šã«æ‹›ã‹ã‚Œã¾ã™ã€‚","about.status.privileges.pro.title":"Awwwards ã«æŠ•è³‡ã—ã€ãƒ—ãƒ­ãƒ•ã‚§ã‚·ãƒ§ãƒŠãƒ«ãƒ—ãƒ©ãƒ³ã«ç™»éŒ²ã—ãŸä¸–ç•Œçš„ã«æœ‰åãªã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ã‚·ãƒ¼ã‚„ãƒ‡ã‚¶ã‚¤ãƒŠãƒ¼é›†å›£ã€‚","about.status.privileges.pro.description_1":"SOTD & HM ã¸ã®æŠ•ç¥¨ãŒå¯èƒ½ã§ã™ã€‚","about.status.privileges.pro.description_2":"ãƒ‡ã‚£ãƒ¬ã‚¯ãƒˆãƒªãƒ¼ã®æ¤œç´¢çµæžœã§ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ãŒå¼·èª¿è¡¨ç¤ºã•ã‚Œã¾ã™ã€‚","about.status.privileges.chief.title":"å›°é›£ãªä½œæ¥­ã‚„çŒ®èº«ã§è²¢çŒ®ã—ãŸæ‰èƒ½è±Šã‹ãªãƒ¦ãƒ¼ã‚¶ãƒ¼ã¯ã€1 SOTDã€3 HMs ã¾ãŸã¯5ï¼Œ000 ãƒã‚¤ãƒ³ãƒˆã‚’ç²å¾—ã—ã¾ã—ãŸã€‚","about.status.privileges.chief.description_1":"SOTD & HM ã¸ã®æŠ•ç¥¨ãŒå¯èƒ½ã§ã™ã€‚","about.status.privileges.chief.description_2":"ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ãŒãƒ‡ã‚£ãƒ¬ã‚¯ãƒˆãƒªãƒ¼ã§å…¬é–‹ã•ã‚Œã¾ã™ã€‚","about.status.privileges.tribe.title":"å‚åŠ ã¨çŸ¥è­˜ã®è²¢çŒ®ãŒã€Awwwards ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ã®æ”¹å–„ã‚’ã‚µãƒãƒ¼ãƒˆã™ã‚‹ãƒ™ãƒ¼ã‚·ãƒƒã‚¯ãƒ¦ãƒ¼ã‚¶ãƒ¼ã€‚","about.status.privileges.tribe.description_1":"ãƒ¡ãƒªãƒƒãƒˆãƒ»ãƒ•ã‚©ãƒ¼ãƒ»ã‚³ãƒ¡ãƒ³ãƒ€ãƒ–ãƒ«ãƒ»ã‚µã‚¤ãƒˆè³žçŠ¶ã¸ã®æŠ•ç¥¨ãŒå¯èƒ½ã§ã™ (SOTD ã‚„HM ã¸ã®æŠ•ç¥¨ã¯ä¸å¯ï¼‰ã€‚","about.status.privileges.tribe.description_2":"ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ã¯ãƒ‡ã‚£ãƒ¬ã‚¯ãƒˆãƒªãƒ¼ã§å…¬é–‹ã•ã‚Œã¾ã›ã‚“ã€‚","form.talent.about_us":"Awwwardsã«ã¤ã„ã¦","form.talent.name":"æ°åã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ã‚·ãƒ¼ / ä¼šç¤¾...","form.email":"Eãƒ¡ãƒ¼ãƒ«","form.website":"ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆ","form.talent.message":"ã‚³ãƒ©ãƒœã—ã¾ã›ã‚“ã‹ï¼Ÿ","form.talent.message_description":"å½“ç¤¾ãŒé–¢å¿ƒã‚ã‚‹ã®ã¯ã€æ¬¡ã®åˆ†é‡Žã§ã™â€¦","form.characters_remaining":"æ®‹ã‚Šæ–‡å­—æ•°ã€‚","form.characters_remaining_no_html":"æ®‹ã‚Šæ–‡å­—æ•°ã€‚HTML ã¯ä¸å¯ã€‚","form.add_a_url_with_http":"http://ã€€ä»¥é™ã«URL ã‚’è¿½åŠ ã—ã¦ãã ã•ã„","form.validate.select_less":"%max% æœªæº€ã‚’æŒ‡å®šã—ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“","form.validate.select_at_least":"%min%ä»¥ä¸Šã‚’æŒ‡å®šã—ãªã‘ã‚Œã°ãªã‚Šã¾ã›ã‚“","form.creative_fields.tip":"çš†æ§˜ã®ä½œå“ã®èª¬æ˜Žã¨æœ€ã‚‚ä¸€è‡´ã™ã‚‹ã‚¯ãƒªã‚¨ã‚¤ãƒ†ã‚£ãƒ–åˆ†é‡Žã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚","form.categories.tip":"ã‚«ãƒ†ã‚´ãƒªãƒ¼ã‚’ã„ãã¤ã‹é¸æŠžã—ã¦ãã ã•ã„","form.tags.tip":"ã‚¿ã‚°ã‚’ã„ãã¤ã‹é¸æŠžã—ã¦ãã ã•ã„","form.tags":"ã‚¿ã‚°","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’é€ä¿¡ã™ã‚‹","collection.create_a_new_collection":"æ–°ã—ã„ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã‚’ä½œæˆ","legend_circle.design":"ãƒ‡ã‚¶ã‚¤ãƒ³","legend_circle.usability":"ãƒ¦ãƒ¼ã‚¶ãƒ“ãƒªãƒ†ã‚£","legend_circle.creativity":"ã‚¯ãƒªã‚¨ã‚¤ãƒ†ã‚£ãƒ“ãƒ†ã‚£","legend_circle.content":"ã‚³ãƒ³ãƒ†ãƒ³ãƒ„","search.no_result.title":"æ¤œç´¢ã«å¤±æ•—ã—ã¾ã—ãŸï¼","search.no_result.try_some_different_keywords":"åˆ¥ã®ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰ã§ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚","search.no_result.use_more_general_keywords":"ã‚ˆã‚Šä¸€èˆ¬çš„ãªã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰ã‚’ä½¿ç”¨ã—ã¦ãã ã•ã„ã€‚","payment.processing_payment":"ãŠæ”¯æ‰•ã„ã‚’å‡¦ç†ã—ã¦ã„ã¾ã™","app.notification.changes_saved":"å¤‰æ›´ãŒä¿å­˜ã•ã‚Œã¾ã—ãŸã€‚","legend_circle.responsive_design":"è²¬ä»»ã‚ã‚‹ãƒ‡ã‚¶ã‚¤ãƒ³","legend_circle.animations":"ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³","legend_circle.accessibility":"ã‚¢ã‚¯ã‚»ã‚·ãƒ“ãƒªãƒ†ã‚£","legend_circle.semantics":"ã‚»ãƒžãƒ³ãƒ†ã‚£ãƒƒã‚¯","app.final_score":"æœ€çµ‚å¾—ç‚¹","app.show_all":"å…¨ã¦è¡¨ç¤º","app.notification.collection_created":"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ãŒä½œæˆã•ã‚Œã¾ã—ãŸ","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³","vote_opinion.like.content_architecture":"ã‚³ãƒ³ãƒ†ãƒ³ãƒ„è¨­è¨ˆ","vote_opinion.like.copy_design":"ã‚³ãƒ”ãƒ¼ãƒ‡ã‚¶ã‚¤ãƒ³","vote_opinion.like.interaction":"ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ã‚·ãƒ§ãƒ³","vote_opinion.like.layout":"ã‚®ãƒ£ãƒ©ãƒªãƒ¼","vote_opinion.like.navigation":"ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³","vote_opinion.like.photo_video":"å†™çœŸã¨å‹•ç”»","vote_opinion.like.typography":"ã‚¿ã‚¤ãƒã‚°ãƒ©ãƒ•ã‚£ãƒ¼","vote_opinion.like.ui_design":"UIãƒ‡ã‚¶ã‚¤ãƒ³","vote_opinion.details.menu":"ãƒ¡ãƒ‹ãƒ¥ãƒ¼","vote_opinion.details.about_page":"Aboutãƒšãƒ¼ã‚¸","vote_opinion.details.transitions":"ãƒˆãƒ©ãƒ³ã‚¸ã‚·ãƒ§ãƒ³","vote_opinion.details.header":"ãƒ˜ãƒƒãƒ€ãƒ¼","vote_opinion.details.contact_page":"ãŠå•ã„åˆã‚ã›ãƒšãƒ¼ã‚¸","vote_opinion.details.microinterations":"ãƒžã‚¤ã‚¯ãƒ­ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ã‚·ãƒ§ãƒ³","vote_opinion.details.footer":"ãƒ•ãƒƒã‚¿ãƒ¼","vote_opinion.details.project_page":"ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãƒšãƒ¼ã‚¸","vote_opinion.details.filters_effects":"ãƒ•ã‚£ãƒ«ã‚¿ãƒ¼ã¨ã‚¨ãƒ•ã‚§ã‚¯ãƒˆ","vote_opinion.details.forms":"ãƒ•ã‚©ãƒ¼ãƒ ","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"ã‚¹ãƒˆãƒ¼ãƒªãƒ¼ãƒ†ãƒªãƒ³ã‚°","vote_opinion.details.scrolling":"ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«","vote_opinion.details.404":"404","vote_opinion.details.illustration":"ã‚¤ãƒ©ã‚¹ãƒˆ","collection_category.inspiration":"ã²ã‚‰ã‚ã","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"ã‚¦ã‚§ãƒ–ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼","collection_category.resources":"è³‡æº","collection_category.other":"ãã®ä»–","i_have_read_and_accepted_the_terms_and_conditions":"ç§ã¯åˆ©ç”¨è¦ç´„ã¨ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼ã‚’èª­ã¿ã€ã“ã‚Œã‚‰ã®æ¡ä»¶ã«åŒæ„è‡´ã—ã¾ã—ãŸã€‚","app.no_info_provided":"æƒ…å ±ãŒæä¾›ã•ã‚Œã¦ãŠã‚Šã¾ã›ã‚“ã€‚","app.congratulations":"ãŠã‚ã§ã¨ã†ã”ã–ã„ã¾ã™","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"é–‰ã˜ã‚‹","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Awwwards ã¸ã®æŠ•ç¨¿ã‚’å—ç†ã—ã¾ã—ãŸ","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"æ±‚äººåºƒå‘Šã®æŠ•ç¨¿ã‚’å—ç†ã—ã¾ã—ãŸ","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"ç™»éŒ² / ãƒ­ã‚°ã‚¤ãƒ³","app.confirm_your_vote":"æŠ•ç¥¨ã‚’ç¢ºèªã™ã‚‹","submission.sotm.nominees.thanks":"ã”æŠ•ç¥¨ã‚ã‚ŠãŒã¨ã†ã”ã–ã„ã¾ã—ãŸï¼","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"æƒ…å ±ã‚’ç·¨é›†ã™ã‚‹","add_billing_info":"ãŠæ”¯æ‰•ã„æƒ…å ±ã‚’è¿½åŠ ","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"ru":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Log in or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Log in with your e-mail","login_or_create.forgot_your_password":"Forgot your password?","login_or_create.login_now":"Log in now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following yearâ€™s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the â€œMerit for Commendable Sitesâ€ certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"Your Job Advert is Published!Â ","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"},"pt":{"app.following":"Following","app.follow":"Follow","form.description":"Description","form.name":"Name","form.select_category":"Select category","footer_box.share_collection":"Share with your team!","footer_box.edit_collection":"Edit collection","app.show_filters":"SHOW FILTERS","search.we_found":"We found","search.placeholder":"SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)","app.and":"and","app.for":"for","app.elements":"Element|Elements","app.jobs":"Job|Jobs","app.create":"Create","app.load_more":"Load More","app.loading":"Loading","app.more_info":"More info","app.cancel":"Cancel","app.private":"Private","app.save":"Save","app.delete_collection":"Delete collection","app.deleting_collection":"Deleting collection...","user.collections.menu.collections":"Collection|Collections","app.yes":"Yes","app.no":"No","app.collaborator":"Collaborator","app.delete_account":"Delete account","app.delete":"Delete","app.are_you_sure":"Are you sure?","app.add_to_collections":"Add to collections!","app.activate_black_option":"Enable Dark Mode","app.activate_white_option":"Activate white option","app.send_vote":"Send vote","app.edit_your_vote":"Edit your vote","app.edit":"Edit","app.users":"User|Users","app.judges":"Judge|Judges","app.votes":"Vote|Votes","app.user_type.short.pro":"Pro","app.user_type.short.tribe":"Tribe","app.user_type.short.chief":"Chief","app.user_type.short.jury":"Jury","app.websites":"Website|Websites","app.collections":"Collection|Collections","app.articles":"Article|Articles","app.your_vote":"Your vote","login_or_create.header":"Log in or create account","login_or_create.not_a_member_yet":"Not a member yet?","login_or_create.register_now":"Register now","login_or_create.login_with_your_email":"Log in with your e-mail","login_or_create.forgot_your_password":"Forgot your password?","login_or_create.login_now":"Log in now","login_or_create.connect_with":"Connect with","login_or_create.email_or_username":"Email or Username","login_or_create.keep_me_logged_in":"Keep me logged in","login_or_create.password":"Password","login_or_create.sign_in_to_continue":"Sign in to continue","login_or_create.or_sign_in_with":"Or sign in with","users_like_this":"<strong>%users%</strong> user like this|<strong>%users%</strong> users like this","about.status.privileges.jury.title":"A group of experts selected annually by the Awwwards team, whose involvement and expertise is fundamental for Awwwards to function.","about.status.privileges.jury.description_1":"Their vote determines the final score of SOTD, SOTM, HM & SOTY.","about.status.privileges.jury.description_2":"Every year the top 5 users are invited to join the following yearâ€™s Jury.","about.status.privileges.pro.title":"A group of internationally recognised agencies and designers, who have invested in Awwwards and registered with a Professional Plan.","about.status.privileges.pro.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.pro.description_2":"Profile highlighted in the Directory search results.","about.status.privileges.chief.title":"Talented users who through hard work and commitment have won 1 SOTD, 3 HMs or gained 5000 points.","about.status.privileges.chief.description_1":"Their votes count towards SOTD & HM.","about.status.privileges.chief.description_2":"Profile included in the Directory.","about.status.privileges.tribe.title":"Basic user whose participation and contribution of knowledge helps to improve the Awwwards community.","about.status.privileges.tribe.description_1":"Their votes count towards the â€œMerit for Commendable Sitesâ€ certificate (but not towards SOTD or HM).","about.status.privileges.tribe.description_2":"Profile not present in the Directory.","form.talent.about_us":"About us","form.talent.name":"Name, agency / company...","form.email":"E-mail","form.website":"Website","form.talent.message":"Can we collaborate?","form.talent.message_description":"We are interested in the following...","form.characters_remaining":"characters remaining.","form.characters_remaining_no_html":"characters remaining. No HTML allowed.","form.add_a_url_with_http":"Add a URL with http://","form.validate.select_less":"You must specify %max% or less","form.validate.select_at_least":"You must specify at least %min%","form.creative_fields.tip":"Select the creative fields that best describe your work.","form.categories.tip":"Select some categories","form.tags.tip":"Select some tags","form.tags":"Tags","assert.not_blank.name":"assert.not_blank.name","contact.send_message":"SEND MESSAGE","collection.create_a_new_collection":"Create a new collection","legend_circle.design":"Design","legend_circle.usability":"Usability","legend_circle.creativity":"Creativity","legend_circle.content":"Content","search.no_result.title":"Your search was not successful!","search.no_result.try_some_different_keywords":"Try some different keywords.","search.no_result.use_more_general_keywords":"Use more general keywords.","payment.processing_payment":"Processing payment","app.notification.changes_saved":"Your changes have been saved.","legend_circle.responsive_design":"Responsive design","legend_circle.animations":"Animation","legend_circle.accessibility":"Accessibility","legend_circle.semantics":"Semantics","app.final_score":"Final score","app.show_all":"Show all","app.notification.collection_created":"Your collection has been created","vote_opinion.what_do_you_like":"What do you like about it?","vote_opinion.what_do_you_think":"What do you think about this site?","vote_opinion.think.master_piece":"A masterpiece","vote_opinion.think.sotd":"A SOTD","vote_opinion.think.not_sotd":"It\'s not a SOTD","vote_opinion.like.animation":"Animation","vote_opinion.like.content_architecture":"Content architecture","vote_opinion.like.copy_design":"Copy design","vote_opinion.like.interaction":"Interaction","vote_opinion.like.layout":"Gallery","vote_opinion.like.navigation":"Navigation","vote_opinion.like.photo_video":"Photo & Video","vote_opinion.like.typography":"Typography","vote_opinion.like.ui_design":"UI design","vote_opinion.details.menu":"Menu","vote_opinion.details.about_page":"About page","vote_opinion.details.transitions":"Transitions","vote_opinion.details.header":"Header","vote_opinion.details.contact_page":"Contact page","vote_opinion.details.microinterations":"Microinteractions","vote_opinion.details.footer":"Footer","vote_opinion.details.project_page":"Project page","vote_opinion.details.filters_effects":"Filters & Effects","vote_opinion.details.forms":"Forms","vote_opinion.details.ecommerce":"E-commerce","vote_opinion.details.storytelling":"Storytelling","vote_opinion.details.scrolling":"Scrolling","vote_opinion.details.404":"404","vote_opinion.details.illustration":"Illustration","collection_category.inspiration":"Inspiration","collection_category.ux-ui":"UX/UI","collection_category.web-technology":"Web technology","collection_category.resources":"Resources","collection_category.other":"Other","i_have_read_and_accepted_the_terms_and_conditions":"I have read and accepted the <strong><a href=\\"%href_terms_and_conditions%\\" target=\\"_blank\\">Terms and Conditions</a></strong> and <strong><a href=\\"%href_privacy_policy%\\" target=\\"_blank\\">Privacy Policy</a></strong>","app.no_info_provided":"No info provided","app.congratulations":"Congratulations","welcome_to_the_exclusive_awwwards_directory":"Welcome to the exclusive Awwwards directory!","directory_description":"The directory place where the top web designers, graphic designers, art directors, illustrators, developers and marketers come to play and grow their business.","app.close":"close","we_have_received_your_job_submission":"we_have_received_your_job_submission","payment.submission_received":"Your site has now been submitted to Awwwards for review!","payment.submission_received.description":"Shortly, youâ€™ll receive an email confirmation and in a few days, our team will send your project to our esteemed jury for their evaluation. Best of luck in the competition!","payment.job_submission_received":"Your Job Advert is Published!Â ","payment.submission_job_received.description":"We are checking the details and your job offer will be posted very soon.\\n","your_registration_is_complete":"Your registration is complete!","new_register.received.description":"If you are a freelancer or work for an agency, add your profile to our exclusive directory aimed at web professionals. Meet new clients, recruit top talent, make important business connections. Now is the time!","login_or_register":"Register / Log in","app.confirm_your_vote":"Confirm your vote","submission.sotm.nominees.thanks":"Thanks for your Vote!","explanation_default_credit_card":"This card will be saved for future purchases on awwwards, including yearly subscriptions.","form.edit_information":"Edit Info","add_billing_info":"Add billing info","form.select_technologies.no_results":"If your technology is not in this list, please add it in the field below?","complete_course_to_download_certificate":"In order to download your certificate you must have completed at least 95% of the Course.","certificate_of_completion":"Certificate of completion","courses":"Course|Courses"}}'
      );
      const n = new (class {
        constructor(e) {
          (this._fallbackLocale = "en"),
            (this.translations = e),
            (this.locale = this._getCurrentLocale());
        }
        trans(e, t) {
          if (
            !this.translations.hasOwnProperty(this.locale) ||
            !this.translations[this.locale].hasOwnProperty(e)
          )
            return e;
          var o = this.translations[this.locale][e],
            s = t || {};
          for (var n in s) {
            var i = new RegExp("%" + n + "%", "g");
            o = o.replace(i, s[n]);
          }
          return o;
        }
        transchoice(e, t, o = {}) {
          var s = o.hash,
            n = this.trans(e, s).split("|");
          return 1 == t ? n[0] : n[1];
        }
        _getCurrentLocale() {
          if ("undefined" == typeof document) return this._fallbackLocale;
          let e = document.documentElement.lang.replace("-", "_");
          return "" === e ? this._fallbackLocale : e;
        }
      })(s);
    },
    4518: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = new (class {
        constructor() {
          this.views = {};
        }
        add(e, t, o) {
          this.views.hasOwnProperty(e) || (this.views[e] = {}),
            (this.views[e][t] = o);
        }
        get(e, t) {
          return this.views.hasOwnProperty(e) && this.views[e].hasOwnProperty(t)
            ? this.views[e][t]
            : null;
        }
      })();
    },
    4157: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => i });
      var s = o(6301),
        n = o(2947);
      const i = new (class {
        constructor() {}
        addVisit(e) {
          n.Z.post(s.Z.generate("tv_ajax_add_visit", { slug: e }));
        }
        addBookDownload(e) {
          n.Z.post(s.Z.generate("tv_ajax_add_book_download", { slug: e }));
        }
        add(e, t) {
          n.Z.post(
            s.Z.generate("tv_ajax_add_count", { identifier: e, type: t })
          );
        }
      })();
    },
    4095: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => d });
      var s = o(1928),
        n = o(8333);
      let i = !1;
      const a = s.default.getTech("Tech");
      class r extends a {
        constructor(e, t) {
          super(e, t),
            (function () {
              if (i) return;
              i = !0;
              const e =
                  "\n    .vjs-vimeo iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n  ",
                t = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
              (o.type = "text/css"),
                o.styleSheet
                  ? (o.styleSheet.cssText = e)
                  : o.appendChild(document.createTextNode(e)),
                t.appendChild(o);
            })(),
            this.setPoster(e.poster),
            this.initVimeoPlayer();
        }
        initVimeoPlayer() {
          const e = {
            url: this.options_.source.src,
            byline: !1,
            portrait: !1,
            title: !1,
          };
          this.options_.autoplay && (e.autoplay = !0),
            this.options_.height && (e.height = this.options_.height),
            this.options_.width && (e.width = this.options_.width),
            this.options_.maxheight && (e.maxheight = this.options_.maxheight),
            this.options_.maxwidth && (e.maxwidth = this.options_.maxwidth),
            this.options_.loop && (e.loop = this.options_.loop),
            this.options_.color &&
              (e.color = this.options_.color.replace(/^#/, "")),
            (this._player = new n.Z(this.el(), e)),
            this.initVimeoState(),
            [
              "play",
              "pause",
              "ended",
              "timeupdate",
              "progress",
              "seeked",
            ].forEach((e) => {
              this._player.on(e, (t) => {
                this._vimeoState.progress.duration !== t.duration &&
                  this.trigger("durationchange"),
                  (this._vimeoState.progress = t),
                  this.trigger(e);
              });
            }),
            this._player.on("pause", () => (this._vimeoState.playing = !1)),
            this._player.on("play", () => {
              (this._vimeoState.playing = !0), (this._vimeoState.ended = !1);
            }),
            this._player.on("ended", () => {
              (this._vimeoState.playing = !1), (this._vimeoState.ended = !0);
            }),
            this._player.on(
              "volumechange",
              (e) => (this._vimeoState.volume = e)
            ),
            this._player.on("error", (e) => this.trigger("error", e)),
            this.triggerReady();
        }
        initVimeoState() {
          const e = (this._vimeoState = {
            ended: !1,
            playing: !1,
            volume: 0,
            progress: { seconds: 0, percent: 0, duration: 0 },
          });
          this._player.getCurrentTime().then((t) => (e.progress.seconds = t)),
            this._player.getDuration().then((t) => (e.progress.duration = t)),
            this._player.getPaused().then((t) => (e.playing = !t)),
            this._player.getVolume().then((t) => (e.volume = t));
        }
        createEl() {
          const e = s.default.dom.createEl("div", { id: this.options_.techId });
          return (
            (e.style.cssText =
              "width:100%;height:100%;top:0;left:0;position:absolute"),
            (e.className = "vjs-vimeo"),
            e
          );
        }
        controls() {
          return !0;
        }
        supportsFullScreen() {
          return !0;
        }
        src() {
          return this.options_.source;
        }
        currentSrc() {
          return this.options_.source.src;
        }
        currentTime() {
          return this._vimeoState.progress.seconds;
        }
        setCurrentTime(e) {
          this._player.setCurrentTime(e);
        }
        volume() {
          return this._vimeoState.volume;
        }
        setVolume(e) {
          return this._player.setVolume(e);
        }
        duration() {
          return this._vimeoState.progress.duration;
        }
        buffered() {
          const e = this._vimeoState.progress;
          return s.default.createTimeRange(0, e.percent * e.duration);
        }
        paused() {
          return !this._vimeoState.playing;
        }
        pause() {
          this._player.pause();
        }
        play() {
          this._player.play();
        }
        muted() {
          return 0 === this._vimeoState.volume;
        }
        ended() {
          return this._vimeoState.ended;
        }
        playbackRate() {
          return 1;
        }
      }
      (r.prototype.featuresTimeupdateEvents = !0),
        (r.isSupported = function () {
          return !0;
        }),
        a.withSourceHandlers(r),
        (r.nativeSourceHandler = {}),
        (r.nativeSourceHandler.canPlayType = function (e) {
          return "video/vimeo" === e ? "maybe" : "";
        }),
        (r.nativeSourceHandler.canHandleSource = function (e) {
          return e.type
            ? r.nativeSourceHandler.canPlayType(e.type)
            : e.src
            ? r.nativeSourceHandler.canPlayType(e.src)
            : "";
        }),
        (r.nativeSourceHandler.handleSource = function (e, t) {
          t.src(e.src);
        }),
        (r.nativeSourceHandler.dispose = function () {}),
        r.registerSourceHandler(r.nativeSourceHandler),
        void 0 !== s.default.registerTech
          ? s.default.registerTech("Vimeo", r)
          : s.default.registerComponent("Vimeo", r),
        (r.VERSION = "0.0.1");
      o(2575), o(3514), o(429);
      var l = o(2193),
        c = o(4673);
      o(3023);
      const d = class {
        constructor(e, t) {
          (this.videoDOM = e),
            (this.player = (0, s.default)(
              this.videoDOM,
              Object.assign(
                {
                  controls: !0,
                  techOrder: ["html5", "youtube", "vimeo"],
                  html5: { vhs: { overrideNative: !0 } },
                },
                t || {}
              )
            )),
            (this.isQualitySelectorShown = !1),
            (this.isPlaying = !1),
            this.player.playbackRates([0.5, 1, 1.25, 1.5, 2]);
          var o = this;
          this.player.ready(function () {
            this.hotkeys({
              volumeStep: 0.1,
              seekStep: 5,
              enableModifiersForNumbers: !1,
              enableVolumeScroll: !1,
            });
            var e = l.Z.get(c.XT, "1");
            o.player.defaultPlaybackRate(e);
          }),
            this.player.on("ratechange", function () {
              l.Z.set(c.XT, o.player.playbackRate());
            }),
            this.player.on("touchstart", function (e) {
              if ("VIDEO" === e.target.nodeName)
                if (o.player.paused()) {
                  var t = o.player.play();
                  void 0 !== t &&
                    t
                      .then(function () {
                        o.isPlaying = !0;
                      })
                      .catch(function () {});
                } else o.player.pause();
            });
        }
        getVideoDOM() {
          return this.videoDOM;
        }
        on(e, t) {
          this.player.on(e, t);
        }
        off(e, t) {
          this.player.off(e, t);
        }
        attachSource(e) {
          var t = { type: this.getVideoType(e), src: e };
          this.player.src(t), this.enableQualitySelector();
        }
        enableQualitySelector() {
          if (!this.isQualitySelectorShown) {
            this.player.hlsQualitySelector();
            var e = this.player.qualityLevels();
            e.on("addqualitylevel", function (e) {
              const t = l.Z.get(c._h, "1080");
              var o = e.qualityLevel;
              o.height == t ? (o.enabled = !0) : (o.enabled = !1);
            }),
              e.on("change", function (t) {
                l.Z.set(c._h, e[t.selectedIndex].height);
              }),
              (this.isQualitySelectorShown = !0);
          }
        }
        _generateTracks(e, t) {
          if (e) {
            var o = this;
            this.player.one("loadedmetadata", function () {
              if (
                ([].forEach.call(e, function (e) {
                  o.player.addRemoteTextTrack(
                    {
                      kind: "captions",
                      language: e.code,
                      label: e.label + " [Auto]",
                      src: e.src,
                    },
                    !1
                  );
                }),
                t)
              )
                for (var s = o.player.remoteTextTracks(), n = s.length; n--; )
                  s[n].language == t && (s[n].mode = "showing");
            });
          }
        }
        emtpyTracks() {
          var e = this.player.remoteTextTracks(),
            t = e.length;
          let o = !1;
          for (; t--; )
            "showing" == e[t].mode && (o = e[t].language),
              this.player.removeRemoteTextTrack(e[t]);
          return o;
        }
        changePlaying(e, t) {
          this.changeTo(e.videoUrl),
            this.startAt(e.start),
            this._generateTracks(e.subtitles, t);
        }
        changeTo(e, t) {
          this.player.pause(),
            this.attachSource(e),
            this.player.load(),
            this._generateTracks(t);
          var o = l.Z.get(c.XT, "1");
          this.player.defaultPlaybackRate(o), this.play();
        }
        play() {
          if (!s.default.browser.IS_SAFARI) {
            var e = this,
              t = e.player.play();
            void 0 !== t &&
              t
                .then(function () {
                  e.isPlaying = !0;
                })
                .catch(function () {}),
              this.enableQualitySelector();
          }
        }
        startAt(e) {
          this.player.currentTime(e);
        }
        _startPlayer() {
          this.isPlaying ? this.player.pause() : this.player.play(),
            (this.isPlaying = !this.isPlaying);
        }
        dispose() {
          this.player.dispose();
        }
        getVideoType(e) {
          const t = e.split(/[?#]/)[0];
          return t.indexOf("youtube") > 0
            ? "video/youtube"
            : t.indexOf("vimeo") > 0
            ? "video/vimeo"
            : "application/x-mpegURL";
        }
      };
    },
    8215: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => u });
      o(5449);
      var s = o(2193),
        n = o(4673),
        i = o(6301),
        a = o(3609),
        r = o(8030),
        l = o(9755);
      const c = "utm_campaign";
      class d {
        static getIdentifier() {
          const e = s.Z.get(n.wd);
          return void 0 === e || d.hasUTMCampaign() ? d.createIdentifier() : e;
        }
        static createIdentifier() {
          const e = (function (e) {
            for (
              var t = "",
                o =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                s = 0;
              s < e;
              s++
            )
              t += o.charAt(Math.floor(62 * Math.random()));
            return t;
          })(10);
          return s.Z.set(n.wd, e), e;
        }
        static canLog() {
          if (!a.Z.hasAccepted(r.hp)) return !1;
          return void 0 !== s.Z.get(n.wd) || d.hasUTMCampaign();
        }
        static hasUTMCampaign() {
          return new URLSearchParams(window.location.search).has(c);
        }
        static track() {
          d.canLog() && d.createIdentifier();
        }
        static log(e, t) {
          if (!d.canLog()) return;
          let o = { identifier: d.getIdentifier(), event: e, data: t };
          var s = new URLSearchParams(window.location.search);
          s.has(c) && (o.campaign = s.get(c)),
            l.post({
              url: i.Z.generate("tv_academy_log"),
              data: JSON.stringify(o),
              dataType: "json",
              contentType: "application/json",
            });
        }
      }
      const u = d;
    },
    2931: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(4095);
      const n = class {
        constructor(e) {
          this.videoDOM = e;
          var t = this.videoDOM.hasAttribute("poster");
          (this.player = new s.Z(this.videoDOM, {
            aspectRatio: "16:9",
            autoplay: t,
          })),
            t
              ? ((this.isPlaying = !1),
                void 0 !== window.orientation
                  ? this.player.on("touchstart", this._startPlayer.bind(this))
                  : this.player.on("click", this._startPlayer.bind(this)))
              : this.player.attachSource(this.videoDOM.dataset.trailer);
        }
        _startPlayer(e) {
          this.isPlaying ||
            ((this.isPlaying = !0),
            e.preventDefault(),
            this.player.attachSource(this.videoDOM.dataset.trailer));
        }
      };
    },
    7792: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => r });
      var s = o(5432),
        n = o(2191),
        i = o.n(n),
        a = o(2406);
      const r = class {
        open(e = "", t) {
          this._show("login", { redirect_url: e, extraClass: t });
        }
        register(e = "") {
          this._show("register", { redirect_url: e });
        }
        _show(e, t) {
          let o = new s.Z({
              size: "large",
              add_container: !1,
              extra_class: t.extraClass ?? "",
            }),
            n = document.createElement("div");
          n.classList.add("m-login");
          let r = Object.assign(t, { tab_open: e }),
            l = (0, a.Hk)(i()(r));
          n.appendChild(l), o.show(n);
        }
      };
    },
    2947: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(2861);
      s.Z.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      const n = s.Z;
    },
    3578: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(9482);
      const n = new (class {
        constructor() {}
        sum() {
          this._update(1);
        }
        subtracts() {
          this._update(-1);
        }
        _update(e) {
          var t = document.querySelector(".js-collections-count"),
            o = document.querySelector(".js-collections-name");
          t &&
            ((t.innerHTML = parseInt(t.innerHTML) + e),
            (o.innerHTML = s.Z.transchoice(
              "user.collections.menu.collections",
              t.innerHTML
            )));
        }
      })();
    },
    8030: (e, t, o) => {
      "use strict";
      o.d(t, { Di: () => s, hp: () => i, r$: () => n });
      const s = "preferences",
        n = "marketing",
        i = "analysis";
    },
    3609: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(1746);
      const n = class {
        static hasCookie() {
          return 0 !== Object.keys(s.Z.get()).length;
        }
        static hasAccepted(e) {
          const t = s.Z.get();
          return !!t.hasOwnProperty(e) && "boolean" == typeof t[e] && t[e];
        }
      };
    },
    4766: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = class {
        constructor(e) {
          this.categories = Object.assign(
            { preferences: !1, analysis: !1, marketing: !1 },
            e
          );
        }
        get(e) {
          return !!this.categories.hasOwnProperty(e) && this.categories[e];
        }
        acceptAll() {
          (this.categories.preferences = !0),
            (this.categories.analysis = !0),
            (this.categories.marketing = !0);
        }
        rejectAll() {
          (this.categories.preferences = !1),
            (this.categories.analysis = !1),
            (this.categories.marketing = !1);
        }
        updateSingleConsent(e, t) {
          this.categories.hasOwnProperty(e) &&
            ("boolean" != typeof t && (t = !0), (this.categories[e] = t));
        }
        toJSON() {
          return this.categories;
        }
      };
    },
    1746: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => i });
      var s = o(2193),
        n = o(4673);
      const i = class {
        static get() {
          return s.Z.getJSON(n.ee);
        }
        static set(e) {
          s.Z.set(n.ee, JSON.stringify(e));
        }
      };
    },
    4673: (e, t, o) => {
      "use strict";
      o.d(t, {
        HR: () => a,
        N1: () => n,
        U2: () => i,
        Vy: () => s,
        XT: () => c,
        _h: () => l,
        ee: () => r,
        wd: () => d,
      });
      const s = "__w_lo",
        n = "__w_dc",
        i = "__w_hub",
        a = "__w_dq",
        r = "__w_cc",
        l = "__w_vq",
        c = "__w_vr",
        d = "__w_ac";
    },
    7508: (e, t, o) => {
      "use strict";
      o.d(t, { T: () => r, n: () => l });
      var s = o(5432),
        n = o(2406),
        i = o(6064),
        a = o.n(i);
      function r(e) {
        const [t, o] = e.split(" "),
          [s, n, i] = t.split("-"),
          [a, r, l] = o.split(":");
        let c = new Date(+s, +n - 1, +i, +a, +r, +l);
        return new Date() > c;
      }
      function l(e) {
        new s.Z().show(
          (0, n.Hk)(a()({ annualAwardsYear: e, currentYear: parseInt(e) + 1 }))
        );
      }
    },
    1313: (e, t, o) => {
      "use strict";
      function s(e, t) {
        return n(e.closest(".form-field"), t);
      }
      function n(e, t) {
        let o = e.querySelector(".form-field__msg");
        return o
          ? ((o.innerText = t), o)
          : ((o = document.createElement("div")),
            (o.className = "form-field__msg"),
            (o.innerText = t),
            e.appendChild(o),
            o);
      }
      o.d(t, { X: () => s, f: () => n });
    },
    3987: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => a });
      var s = o(4529),
        n = o.n(s),
        i = o(9482);
      class a {
        static start(e) {
          [].forEach.call(e, (e) => {
            a.createChoices(e);
          });
        }
        static createChoices(e) {
          let t = {
            removeItemButton: e.classList.contains("js-choices-remove-buttons"),
            searchEnabled: !e.classList.contains("js-choices-no-search"),
            shouldSort: !1,
            allowHTML: !0,
          };
          e.dataset.noresults &&
            (t.noResultsText = i.Z.trans(e.dataset.noresults)),
            e.hasAttribute("placeholder") &&
              (t.placeholderValue = e.getAttribute("placeholder")),
            e.dataset.placeholder &&
              (t.placeholderValue = e.dataset.placeholder),
            e.dataset.delimiter && (t.delimiter = e.dataset.delimiter),
            e.dataset.maxItemCount && (t.maxItemCount = e.dataset.maxItemCount),
            a.createChoice(e, t);
        }
        static createChoice(e, t) {
          return new (n())(e, t);
        }
      }
    },
    3290: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => s });
      const s = new (class {
        constructor() {
          (this.zIndex = 10), (this.lightboxes = []);
          var e = this;
          document.addEventListener("keyup", function (t) {
            27 === t.which &&
              e.lightboxes.length > 0 &&
              e.lightboxes[e.lightboxes.length - 1].close();
          });
        }
        add(e) {
          this.lightboxes.push(e),
            (e.el.style.zIndex = this.zIndex),
            10 === this.zIndex && document.body.classList.add("no-scroll"),
            this.zIndex++;
        }
        remove() {
          this.lightboxes.pop(),
            this.zIndex--,
            10 === this.zIndex && document.body.classList.remove("no-scroll");
        }
        closeLatestWithoutCallback() {
          this.lightboxes[this.lightboxes.length - 1].closeWithoutCallback();
        }
        isLightboxOpen() {
          return this.lightboxes.length > 0;
        }
      })();
    },
    5432: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => m });
      var s = o(2316),
        n = o.n(s),
        i = o(3290),
        a = o(9088),
        r = o.n(a),
        l = o(6424),
        c = o.n(l),
        d = o(8837),
        u = o.n(d),
        h = (o(7097), o(9482)),
        p = o(2406);
      const m = n().View.extend({
        className: "modal",
        events: {
          "click .js-modal-close": "close",
          "click ": "_closeFromOutside",
          "click .js-yes": "_confirmationOk",
          "click .yes-no": "close",
        },
        options: {
          close_callback: null,
          add_close_button: !0,
          remove_after_close: !1,
          callback_confirmation: null,
          extra_info: {},
          empty_after_close: !0,
          size: null,
          extra_class: "",
          extra_content_class: "",
          close_it_externally: !0,
          add_container: !0,
        },
        isOpen: !1,
        btnClose: null,
        initialize: function (e) {
          this.options = Object.assign({}, this.options, e);
        },
        _createCloseButton: function () {
          let e = document.createElement("div");
          return (
            e.classList.add("bt-nav", "bt-nav--right", "js-modal-close"),
            (e.innerHTML =
              '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="14.3154" width="20.2454" height="2.38181" rx="1.1909" transform="rotate(-45 0 14.3154)" fill="white"></rect><rect x="1.68555" width="20.2454" height="2.38181" rx="1.1909" transform="rotate(45 1.68555 0)" fill="white"></rect></svg>'),
            e
          );
        },
        openConfirmation: function (e, t, o) {
          if (this.isOpen) return;
          (this.isOpen = !0), (this.options.size = "small");
          var s = r()({ msg: e, button: t });
          this.options.callback_confirmation = o;
          let n = (0, p.Hk)(s);
          this.show(n);
        },
        _confirm: function (e, t, o, s, n, i) {
          var a = o || h.Z.trans("app.are_you_sure"),
            r = t || null,
            l = n || null,
            d = i || !1;
          if (this.isOpen) return;
          (this.isOpen = !0),
            (this.options.size = "small"),
            (this.options.extra_class = "confirm-modal");
          let u = c()({
            title: a,
            description: r,
            textActionButton: s,
            classActionButton: l,
            showCancelButton: d,
          });
          (this.options.callback_confirmation = e), this.show((0, p.Hk)(u));
        },
        confirmOk: function (e, t, o) {
          let s = h.Z.trans("app.yes");
          this._confirm(e, t, o, s);
        },
        showModal: function (e, t, o, s, n, i) {
          this._confirm(e, o, t, s, n, i);
        },
        confirmDelete: function (e, t, o) {
          let s = h.Z.trans("app.delete");
          this._confirm(e, t, o, s, "red");
        },
        getExtraInfo: function () {
          return this.options.extra_info;
        },
        _confirmationOk: function (e) {
          if ((this.close(), this.options.callback_confirmation))
            return this.options.callback_confirmation(e);
        },
        _empty: function () {
          for (; this.el.hasChildNodes(); )
            this.el.removeChild(this.el.firstChild);
        },
        showLoading: function (e) {
          let t = document.createElement("div");
          (t.style.position = "relative"),
            (t.style.height = "700px"),
            (t.style.maxHeight = "100vh");
          let o = document.createElement("div");
          o.classList.add("loading", "loading--white", "is-visible"),
            (o.innerHTML = '<div class="loading__spinner"></div>'),
            t.appendChild(o),
            e.appendChild(t),
            this.show(e);
        },
        show: function (e, t) {
          if (
            (null !== this.options.size &&
              this.el.classList.add("modal--" + this.options.size),
            "" !== this.options.extra_class &&
              this.el.classList.add(this.options.extra_class),
            (this.el.innerHTML = ""),
            this.options.add_close_button)
          ) {
            var o = this._createCloseButton();
            this.el.appendChild(o);
          }
          document.body.appendChild(this.el),
            this.isOpen || i.Z.add(this),
            (this.isOpen = !0),
            t && this._empty();
          let s = document.createElement("div");
          if (
            (s.classList.add("modal__content"),
            "" !== this.options.extra_content_class &&
              s.classList.add(this.options.extra_content_class),
            this.options.add_container)
          ) {
            let t = document.createElement("div");
            t.classList.add("modal__box"), s.appendChild(t), t.appendChild(e);
          } else s.appendChild(e);
          this.el.appendChild(s);
          var n = this;
          setTimeout(function () {
            n.el.classList.add("is-visible");
          }, 100);
        },
        replace: function (e) {
          if (((this.el.innerHTML = ""), this.options.add_close_button)) {
            var t = this._createCloseButton();
            this.el.appendChild(t);
          }
          let o = document.createElement("div");
          o.classList.add("modal__content"),
            o.appendChild(e),
            this.el.appendChild(o);
        },
        showError: function (e) {
          if (!this.isOpen) {
            this.isOpen = !0;
            var t = u()({ msg: e });
            this.show(t);
          }
        },
        closeWithoutCallback: function () {
          this.el.classList.remove("is-visible"),
            (this.isOpen = !1),
            this.options.empty_after_close && this._empty(),
            i.Z.remove();
          var e = this;
          this.options.remove_after_close &&
            setTimeout(function () {
              e.remove();
            }, 500);
        },
        setCloseCallback: function (e) {
          this.options.close_callback = e;
        },
        close: function () {
          this.options.close_callback && this.options.close_callback(),
            this.closeWithoutCallback();
        },
        destroy: function () {
          this.close(), this.remove();
        },
        _closeFromOutside: function (e) {
          this.options.close_it_externally &&
            e.target &&
            e.target.querySelector(".modal__content") &&
            this.close();
        },
      });
    },
    2347: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => y });
      var s = o(2316),
        n = o.n(s),
        i = o(1102),
        a = o(6301),
        r = o(1317),
        l = o(2260),
        c = o(3414),
        d = o(5432),
        u = o(9482),
        h = o(2947);
      const p = class {
        constructor(e) {
          this.dispatcher = e;
        }
        show() {
          let e = document.querySelector(".js-billing-form").cloneNode(!0);
          this.lightBox = new d.Z({
            remove_after_close: !0,
            close_callback: () => {
              let t = document.querySelector(".js-billing-form-container");
              (t.innerHTML = ""), t.appendChild(e);
            },
          });
          let t = document.querySelector(".js-billing-form");
          t.classList.remove("is-hidden"),
            t
              .querySelector(".js-edit-billing-form-submit")
              .addEventListener("click", (e) => {
                e.preventDefault(), this._checkFieldsAndSave(e);
              }),
            this.lightBox.show(t);
        }
        _checkFieldsAndSave(e) {
          let t = e.currentTarget;
          if (i.Z.isLoading(t)) return !1;
          i.Z.addLoading(t);
          let o = document.querySelector(".js-billing-form"),
            s = {
              billing: {
                companyName: o.querySelector(".js-billing-input-companyName")
                  .value,
                companyNumber: o.querySelector(
                  ".js-billing-input-companyNumber"
                ).value,
                address1: o.querySelector(".js-billing-input-address1").value,
                address2: o.querySelector(".js-billing-input-address2").value,
                city: o.querySelector(".js-billing-input-city").value,
                state: o.querySelector(".js-billing-input-state").value,
                zip: o.querySelector(".js-billing-input-zip").value,
                country: o.querySelector(".js-billing-input-country").value,
              },
              vat: o.querySelector(".js-user-vat").value,
            };
          o.querySelectorAll(".is-invalid").forEach((e) => {
            e.classList.remove("is-invalid"),
              (e.querySelector(".form-field__msg").innerHTML = "");
          }),
            h.Z.post(a.Z.generate("tv_payment_billing_check"), {
              billingInfo: s,
            })
              .then((e) => {
                let n = document.querySelector(".js-billing-form-container");
                (n.innerHTML = ""),
                  o.classList.add("is-hidden"),
                  n.appendChild(o),
                  i.Z.removeLoading(t),
                  this.lightBox.closeWithoutCallback(),
                  this._fillInfo(s);
                let a = !e.data.isTaxExempt;
                this.dispatcher.dispatch("change_user_tax", a);
              })
              .catch((e) => {
                let o = e.response.data.error,
                  s = null,
                  n = null,
                  a = null;
                if (
                  (o.vat &&
                    ((s = document.querySelector(".js-user-vat")),
                    (n = s.parentNode),
                    (a = n.querySelector(".form-field__msg")),
                    a ||
                      ((a = document.createElement("div")),
                      (a.className = "form-field__msg"),
                      n.appendChild(a)),
                    (a.textContent = o.vat.join("<br>")),
                    n.classList.add("is-invalid")),
                  o.billing)
                )
                  for (let e in o.billing)
                    (s = document.querySelector(".js-billing-input-" + e)),
                      (n = s.parentNode),
                      (a = n.querySelector(".form-field__msg")),
                      a ||
                        ((a = document.createElement("div")),
                        (a.className = "form-field__msg"),
                        n.appendChild(a)),
                      (a.textContent = o.billing[e]),
                      n.classList.add("is-invalid");
                i.Z.removeLoading(t);
              });
        }
        _fillInfo(e) {
          if (
            document.querySelector(
              ".js-billing-show-info-container .js-billing-info-companyName"
            )
          )
            (document.querySelector(".js-billing-info-companyName").innerText =
              e.billing.companyName),
              (document.querySelector(
                ".js-billing-info-companyNumber"
              ).innerText = e.billing.companyNumber),
              (document.querySelector(".js-billing-info-address_1").innerText =
                e.billing.address1),
              (document.querySelector(".js-billing-info-address_2").innerText =
                e.billing.address2),
              (document.querySelector(".js-billing-info-city").innerText =
                e.billing.city),
              (document.querySelector(".js-billing-info-state").innerText =
                e.billing.state),
              (document.querySelector(".js-billing-info-zip").innerText =
                e.billing.zip),
              (document.querySelector(".js-billing-info-country").innerText =
                e.billing.country);
          else {
            let t = document.querySelector(".js-billing-show-info-container");
            (t.innerHTML = ""),
              this._createAndFill(t, "companyName", e.billing.companyName),
              this._createAndFill(t, "companyNumber", e.billing.companyNumber),
              this._createAndFill(t, "address_1", e.billing.address1),
              this._createAndFill(t, "address_2", e.billing.address2),
              this._createAndFill(t, "city", e.billing.city, !1, !0),
              this._createAndFill(t, "state", e.billing.state),
              this._createAndFill(t, "zip", e.billing.zip),
              this._createAndFill(t, "country", e.billing.country);
          }
          let t = "" === e.vat ? u.Z.trans("app.no_info_provided") : e.vat;
          (document.querySelector(".js-billing-show-vat-container").innerText =
            t),
            document
              .querySelector(".js-billing-info-container")
              .classList.remove("is-hidden");
        }
        _createAndFill(e, t, o, s = !0, n = !1) {
          let i = document.createElement("span");
          if (
            (i.classList.add("js-billing-info-" + t),
            (i.innerText = o),
            e.appendChild(i),
            s)
          ) {
            let t = document.createElement("br");
            e.appendChild(t);
          }
          if (n) {
            let t = document.createTextNode(" ");
            e.appendChild(t);
          }
          "companyName" === t && i.classList.add("text-bold");
        }
      };
      var m = o(9050),
        _ = o(3697),
        g = o(3695),
        v = o(9755),
        f = n().View.extend({
          el: "body",
          events: {
            "click .pay-paypal": "_payWithPaypal",
            "click #show-new-card": "showNewCard",
            "click .js-set-stored-card": "hideAndCheckStoredCard",
            "click #credit_card_box": "_payWithCard",
            "click #js_credit_card_stored": "_payWithStoredCard",
            "click #js_pay_with_free": "_payWithFree",
            "click .js-payment-option": "_selectPaymentMethodHandler",
            "click .js-edit-billing-form": "_editBillingForm",
            "click .js-remove-cart": "_removeFromCart",
          },
          stripe: null,
          card: null,
          paymentType: null,
          initialize: function () {
            this.refreshPaymentOptions(),
              this.renderPaymentButtons(),
              g.Z.addListener("coupon_check", (e) => {
                this.model.checkCoupon(e);
              }),
              g.Z.addListener("coupon_clear", () => {
                this.model.removeCoupon();
              });
          },
          _editBillingForm: function () {
            if (!this.editBilling) {
              let e = new _.Z();
              (this.editBilling = new p(e)),
                e.addListener("change_user_tax", (e) => {
                  this._changeTaxes(e);
                });
            }
            this.editBilling.show();
          },
          _changeTaxes: function (e) {
            this.model.changeUserTax(e);
            let t = document.querySelector(".js-taxes-line"),
              o = document.querySelector(".js-total-price");
            (document.querySelector(".js-edit-billing-form").innerHTML =
              u.Z.trans("form.edit_information")),
              document
                .querySelector(".js-remove-billing-info")
                .classList.remove("is-hidden"),
              document
                .querySelector(".js-icon-edit-billing-info")
                .classList.remove("is-hidden"),
              document
                .querySelector(".js-icon-add-billing-info")
                .classList.add("is-hidden"),
              e
                ? ((o.innerHTML = this.model.getTotalWithCurrency()),
                  t && t.classList.remove("is-hidden"))
                : ((o.innerHTML = this.model.getTotalWithCurrency()),
                  t && t.classList.add("is-hidden"));
          },
          _removeFromCart: function (e) {
            let t = e.currentTarget.dataset.id;
            r.Z.fixed("Updating cart"),
              v
                .post({ url: a.Z.generate("tv_remove_product", { uuid: t }) })
                .done(function () {
                  window.history.replaceState &&
                    window.history.replaceState(
                      null,
                      null,
                      window.location.href
                    ),
                    (window.location = window.location.href);
                });
          },
          refreshPaymentOptions: function () {
            this.setStripeAsDefaultPaymentActived(),
              this.model.isFree() && this.showOnlyFreeMethod();
          },
          setStripeAsDefaultPaymentActived: function () {
            let e = document.querySelector(".js-payment-option.js-stripe");
            (e.querySelector(".js-payment-fake").checked = !0),
              this._selectPaymentMethod(e);
          },
          showOnlyFreeMethod: function () {
            let e = this.el.querySelectorAll(".js-payment-option");
            [].forEach.call(e, function (e) {
              e.classList.add("is-hidden");
            });
            let t = this.el.querySelectorAll(".js-payment-tab");
            [].forEach.call(t, function (e) {
              e.classList.remove("is-active");
            });
            let o = document.querySelector(".js-payment-tab.js-free"),
              s = document.querySelector(".js-payment-option.js-free");
            o &&
              (o.classList.add("is-active"),
              (o.querySelector(".js-payment-radio").checked = !0)),
              s && (s.querySelector(".js-payment-fake").checked = !0);
          },
          renderPaymentButtons: function () {
            this.renderStripe(), this.renderPaypal();
          },
          renderStripe: function () {
            let e = this,
              t = document.querySelector(".js-stripe").dataset.key;
            (this.stripe = Stripe(t, {
              apiVersion: document.querySelector(".js-stripe").dataset.version,
            })),
              document.getElementById("card-element") &&
                (this.card = (0, l.x)(this.stripe)),
              document.getElementById("js_stripe_card_number") &&
                (this.card = (0, l.H)(this.stripe)),
              this._ensureThereIsACreditCardSelected();
            let o = document.getElementById("js_require_action_payment");
            if (o) {
              let t = JSON.parse(o.dataset.extrainfo);
              t.client_secret && e._processStripeChargeRequiresAction(t);
            }
            let s = new URLSearchParams(window.location.search);
            if (s.has("payment_intent")) {
              let t = s.get("payment_intent"),
                o = s.get("payment_intent_client_secret");
              this.stripe.retrievePaymentIntent(o).then(function (s) {
                s.error
                  ? (0, c.O)(
                      "error",
                      "There has been an error with the payment method, please try again or another one"
                    )
                  : ("succeeded" !== s.paymentIntent.status &&
                      "manual" !== s.paymentIntent.confirmation_method) ||
                    null !== s.paymentIntent.last_payment_error ||
                    (e._setParametersPaymentValue({
                      payment_intent_id: t,
                      client_secret: o,
                    }),
                    e._sendForm());
              });
            }
          },
          _processStripeChargeRequiresAction: function (e) {
            r.Z.fixed("Redirecting"),
              e.url
                ? (window.location = e.url)
                : this.stripe
                    .confirmCardPayment(
                      e.client_secret,
                      { return_url: e.return_url },
                      { handleActions: !1 }
                    )
                    .then(function (e) {
                      var t = e.paymentIntent.next_action;
                      t &&
                        "redirect_to_url" === t.type &&
                        (window.location = t.redirect_to_url.url);
                    });
          },
          _showMessageRequireAction: function (e) {
            let t = document.getElementById("js_error_content");
            t.classList.add("error"),
              t.classList.remove("warning"),
              (t.querySelector(".js_error_message").innerHTML = e);
          },
          _createPaypalOrder: function () {
            return fetch(
              a.Z.generate("tv_payment_paypal_order_create_for_cart"),
              {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  description: "Awwwards Academy Purchase",
                  currency: this.model.getCurrency(),
                  total: this.model.getTotal(),
                  has_to_pay_taxes: this.model.hasToPayTaxes(),
                  return_url: window.location.href,
                }),
              }
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return e.orderID;
              });
          },
          renderPaypal: function () {
            "undefined" != typeof paypal &&
              paypal
                .Buttons({
                  createOrder: () => this._createPaypalOrder(),
                  onApprove: (e) => {
                    this._setParametersPaymentValue({ paymentId: e.orderID }),
                      this._sendForm();
                  },
                  onError: function () {
                    (0, c.O)(
                      "error",
                      "There has been an error with PayPal, please try again"
                    );
                  },
                  style: {
                    label: "checkout",
                    height: 40,
                    shape: "rect",
                    color: "gold",
                    tagline: !1,
                  },
                })
                .render("#paypal-button-container");
          },
          _selectPaymentMethodHandler: function (e) {
            this._selectPaymentMethod(e.currentTarget);
          },
          _selectPaymentMethod: function (e) {
            var t = document.querySelector(".payment__tab.is-active");
            t && t.classList.remove("is-active");
            var o = document.querySelector(".payment__tab.js-paypal_v2");
            e.classList.contains("js-stripe")
              ? ((o = document.querySelector(".payment__tab.js-stripe")),
                document.getElementById("stored-payment")
                  ? (this.setPayment("stored"),
                    document.querySelector(".js-set-stored-card").click())
                  : this.setPayment("newcard"))
              : e.classList.contains("js-stock")
              ? ((o = document.querySelector(".payment__tab.js-stock")),
                this.setPayment("stock"))
              : this.setPayment("paypal"),
              o.classList.add("is-active");
          },
          hideAndCheckStoredCard: function () {
            document.getElementById("new-card-div").classList.add("hidden"),
              this.setPayment("stored");
          },
          showNewCard: function () {
            document.getElementById("new-card-div").classList.remove("hidden"),
              this.setPayment("newcard");
          },
          selectPayment: function () {},
          setPayment: function (e) {
            let t = document.getElementById(e + "-payment");
            (this.paymentType = e),
              (t.querySelector(".js-payment-radio").checked = !0),
              this.selectPayment(e);
          },
          _payWithCard: function (e) {
            if ((e.preventDefault(), "stored" == this.paymentType))
              return this._payWithStoredCard(e);
            let t = e.currentTarget;
            if (i.Z.isLoading(t)) return !1;
            i.Z.addLoading(t);
            var o = this;
            this.stripe
              .createPaymentMethod("card", this.card)
              .then(function (e) {
                if (e.error) console.log(e.error);
                else {
                  let t =
                    !!document.getElementById("js_make_default_new_card") &&
                    document.getElementById("js_make_default_new_card").checked;
                  o._setParametersPaymentValue({
                    payment_method_id: e.paymentMethod.id,
                    payment_default: t,
                  }),
                    o._sendForm();
                }
              });
          },
          _payWithStoredCard: function (e) {
            e.preventDefault();
            let t = document.querySelector(".js-credit-card:checked"),
              o =
                !!document.getElementById("js_make_default_new_card") &&
                document.getElementById("js_make_default_new_card").checked;
            this._setParametersPaymentValue({
              payment_method_id: t.value,
              payment_default: o,
            }),
              this._sendForm();
          },
          _payWithFree: function (e) {
            e.preventDefault();
            let t = e.currentTarget;
            if (i.Z.isLoading(t)) return !1;
            i.Z.addLoading(t), this._sendForm();
          },
          _payWithPaypal: function (e) {
            var t = e.currentTarget;
            if (i.Z.isLoading(t)) return !1;
            i.Z.addLoading(t), this._sendForm();
          },
          _ensureThereIsACreditCardSelected: function () {
            var e = document.getElementById("js-last-card"),
              t = document.querySelector(".js-credit-card:checked");
            e &&
              !t &&
              (document.querySelectorAll(
                ".js-credit-card[name=payment_method_id]"
              )[0].checked = !0);
          },
          _sendForm: function () {
            this._showLoading(), v("#laststep").submit();
          },
          _showLoading: function () {
            r.Z.fixed("payment.processing_payment");
          },
          _setParametersPaymentValue: function (e) {
            document.querySelector(".js-parameters-payment").value =
              JSON.stringify(e);
          },
        });
      f.extend = function (e) {
        var t = n().View.extend.apply(this, arguments);
        return (
          (t.prototype.events = m.default.extend(
            {},
            this.prototype.events,
            e.events
          )),
          t
        );
      };
      const y = f;
    },
    4043: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(1928);
      o(3514), o(429);
      function n() {
        let e = document.getElementById("modal-play");
        if (null === e) return;
        let t = document.querySelector(".js-course-trailer"),
          o = document.querySelector(".js-menu-video"),
          n = document.querySelector(".js-menu-video-close"),
          i = document.querySelector("#show-menu-video"),
          a = document.querySelector(".modal__video-presents"),
          r = new s.default("video");
        function l() {
          (e.style.zIndex = "10"),
            document.body.classList.add("no-scroll"),
            e.classList.add("is-visible"),
            a.classList.remove("is-hidden", "fade-out"),
            (a.currentTime = 0),
            a.pause(),
            a.play(),
            setTimeout(function () {
              document
                .querySelector("#modal-play")
                .classList.contains("is-visible") &&
                (a.classList.add("fade-out"), r.currentTime(0), r.play());
            }, 5e3),
            setTimeout(function () {
              a.classList.add("is-hidden");
            }, 6e3);
        }
        function c() {
          o.classList.remove("is-visible"),
            setTimeout(function () {
              o.remove();
            }, 600);
        }
        t.addEventListener("click", function () {
          l();
        }),
          document.querySelectorAll(".modal").forEach(function (t) {
            t.addEventListener("click", function (t) {
              t.target.closest(".modal__content") ||
                (document.body.classList.remove("no-scroll"),
                e.classList.remove("is-visible"),
                (e.style.zIndex = "8"),
                setTimeout(function () {
                  a.pause(), r.pause();
                }, 300));
            });
          }),
          window.addEventListener("scroll", function () {
            window.scrollY > i.offsetTop
              ? o.classList.add("is-visible")
              : o.classList.remove("is-visible");
          }),
          o.addEventListener("click", function (e) {
            e.target.closest(".js-menu-video-close") || (l(), c());
          }),
          n.addEventListener("click", function () {
            c();
          });
      }
    },
    2505: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => l });
      var s = o(5648),
        n = o(3290),
        i = o(1636);
      let a = (0, s.lX)();
      function r(e, t, o) {
        n.Z.isLightboxOpen() || (0, i.Z)(e, t, !1, o);
      }
      a.listen(({ action: e, location: t }) => {
        "PUSH" === e &&
          t.state &&
          t.state.modal &&
          r(
            t.state.modal,
            t.state.request_url || t.state.modal,
            t.state.current_url
          ),
          "POP" === e &&
            t.state &&
            (t.state.current_url &&
              t.state.current_url === t.pathname &&
              (n.Z.isLightboxOpen()
                ? (n.Z.closeLatestWithoutCallback(),
                  console.log("Close latest lightbox"))
                : (window.location.reload(), console.log("reload"))),
            t.state.modal &&
              r(
                t.state.modal,
                t.state.request_url || t.state.modal,
                t.state.current_url
              ));
      });
      const l = a;
    },
    453: (e, t, o) => {
      "use strict";
      var s = o(2192),
        n = o(4150);
      (0, s.x)(o(4692)).register("clipboard", n.Z);
      var i = o(2492),
        a = (o(5449), o(8215));
      window.dataLayer = window.dataLayer || [];
      const r = class {
        constructor() {
          (this.total = 1),
            (this.transaction_id = ""),
            (this.currency = "USD"),
            (this.items = []),
            this.initialize();
        }
        initialize() {
          var e = new URLSearchParams(window.location.search);
          if (!e.has("purchase")) return;
          let t = document.querySelector(".js-transaction-details"),
            o = [];
          if (null !== t && t.dataset.info) {
            var s = JSON.parse(t.dataset.info);
            (this.transaction_id = s.transaction_id),
              (this.total = s.total),
              (this.currency = s.currency),
              (o = s.products);
          } else {
            (this.transaction_id = t ? t.dataset.transaction : ""),
              (this.total = e.get("total")),
              (this.currency = e.get("curr"));
            let s = e.get("pr_id") || "0",
              n = e.get("secc") || "Submission",
              i = e.get("sl"),
              a = t ? JSON.parse(t.dataset.products) : null;
            a
              ? a.forEach((e) => {
                  o.push({
                    item_id: e.id ? e.id : "0",
                    item_name: e.name,
                    price: e.price,
                    item_category: "course" == e.type ? "Courses" : "Webinar",
                    quantity: 1,
                  });
                })
              : (o = [
                  {
                    item_id: s,
                    item_name: i,
                    price: this.total ? this.total : 1,
                    item_category: n,
                    quantity: 1,
                  },
                ]);
          }
          try {
            this.triggerPurchaseCompleted(o);
          } catch (e) {
            console.error("there has been an error", e);
          }
        }
        triggerPurchaseCompleted(e) {
          window.dataLayer.push({
            event: "purchase",
            ecommerce: {
              transaction_id: this.transaction_id,
              currency: this.currency ? this.currency : "USD",
              value: this.total ? this.total : 1,
              items: e,
            },
          }),
            a.Z.log("purchase", {
              transaction_id: this.transaction_id,
              currency: this.currency ? this.currency : "USD",
              value: this.total ? this.total : 1,
              items: e,
            });
        }
      };
      var l = o(3609),
        c = o(8030),
        d = o(2193),
        u = o(4673),
        h = o(1415),
        p = o(1746),
        m = o(3197),
        _ = o.n(m),
        g = o(4766),
        v = o(2406);
      class f {
        static loadScript() {
          f.loadJavascript(function () {
            beTracker.t({ hash: "b1078f896e63bf824a5c7fa40065a5c3" });
          });
        }
        static loadJavascript(e) {
          var t = document.getElementsByTagName("head")[0],
            o = document.createElement("script");
          (o.type = "text/javascript"),
            (o.src = "https://tracker.metricool.com/resources/be.js"),
            (o.onreadystatechange = e),
            (o.onload = e),
            t.appendChild(o);
        }
      }
      const y = f;
      var b = o(5432),
        w = o(6465),
        k = o.n(w);
      const x = [u.Vy, u.N1, u.U2, u.HR];
      const S = class {
        start() {
          l.Z.hasCookie() ? this.onCookiesCreated() : this._createView();
        }
        _createView() {
          let e = p.Z.get(),
            t = new g.Z(e),
            o = k()({
              preferences: t.get("preferences"),
              analysis: t.get("analysis"),
              marketing: t.get("marketing"),
            }),
            s = new b.Z({
              remove_after_close: !0,
              close_it_externally: !1,
              add_close_button: !1,
              id: "modal-cookies",
              className: "modal-cookies modal",
            });
          return s.show((0, v.Hk)(o)), s;
        }
        acceptAll() {
          h.Z.push({ event: "cookie_consent_statistics" }),
            h.Z.push({ event: "cookie_consent_marketing" }),
            y.loadScript();
        }
        onCookiesCreated() {
          l.Z.hasAccepted(c.Di) || this.removePreferenceCookies();
          let e = {};
          l.Z.hasAccepted(c.hp) &&
            (h.Z.push({ event: "cookie_consent_statistics" }),
            (e.analytics_storage = "granted"),
            y.loadScript()),
            l.Z.hasAccepted(c.r$) &&
              (h.Z.push({ event: "cookie_consent_marketing" }),
              (e.ad_storage = "granted"));
        }
        onCookiesUpdated() {
          l.Z.hasAccepted("preferences") || this.removePreferenceCookies();
          let e = {};
          l.Z.hasAccepted(c.hp) &&
            (h.Z.push({ event: "cookie_consent_statistics" }),
            (e.analytics_storage = "granted"),
            y.loadScript()),
            l.Z.hasAccepted(c.r$) &&
              (h.Z.push({ event: "cookie_consent_marketing" }),
              (e.ad_storage = "granted"));
        }
        removePreferenceCookies() {
          x.forEach(function (e) {
            void 0 !== d.Z.get(e) && d.Z.remove(e);
          });
        }
      };
      var j = o(7051);
      class L {
        static init() {
          L.addScript();
        }
        static addScript() {
          let e = document.createElement("script");
          (e.async = !0),
            (e.defer = !0),
            (e.src = "https://accounts.google.com/gsi/client"),
            (e.type = "text/javascript"),
            (
              document.getElementsByTagName("head")[0] ||
              document.getElementsByTagName("body")[0]
            ).appendChild(e);
        }
      }
      const C = L;
      var T = o(9998);
      window.Awwwards = {};
      var E = document.body.dataset.debug || !1;
      document.addEventListener("DOMContentLoaded", function () {
        let e = document.querySelector(".eu-location");
        const t = null !== e && "1" === e.dataset.eu;
        !(function (e) {
          const t = new S();
          if (e) return void t.start();
          t.showCookieBar(), t.acceptAll();
        })(t),
          E || (t && !l.Z.hasAccepted(c.r$)) || new r();
      }),
        (0, i.Z)(),
        !j.Z.isLoggedIn() && l.Z.hasCookie() && C.init();
      let A = document.querySelector(".js-search-input");
      A &&
        (function (e, t) {
          var o = Number(t) || 7.7;
          function s() {
            e.style.width = (e.value.length + 1) * o + "px";
          }
          var n = "keyup,keypress,focus,blur,change".split(",");
          for (var i in n) e.addEventListener(n[i], s, !1);
          s();
        })(A),
        document.querySelector(".js-filter-in") &&
          document
            .querySelector(".js-filter-in")
            .addEventListener("click", function () {
              document
                .querySelector(".search-form__filters")
                .classList.toggle("is-active");
            });
      document.querySelector(".header-main") &&
        document
          .querySelector(".header-main")
          .addEventListener("mouseleave", function () {
            const e = document.querySelector(".search-form__filters");
            e && e.classList.remove("is-active");
          }),
        (0, T.dS)();
      const q = document.querySelector(".js-header-floating");
      q &&
        (function () {
          let e = 0,
            t = 0;
          window.addEventListener("scroll", function () {
            const o = window.scrollY,
              s = new Date().getTime(),
              n = q.classList.contains("is-open"),
              i = Math.abs(o - e) / (s - t) > 1;
            if (o > 300)
              if ((q.classList.add("is-fixed"), o > e && !n)) {
                const e = document.querySelectorAll(".nav-header-main__link");
                Array.from(e).some((e) => e.classList.contains("is-open")) ||
                  q.classList.contains("has-search-focus") ||
                  (q.classList.remove("is-up"), q.classList.add("is-down"));
              } else
                ((o < e && !n) || i) &&
                  (q.classList.remove("is-down"), q.classList.add("is-up"));
            else q.classList.remove("is-fixed");
            (e = o), (t = s);
          });
        })();
    },
    2492: (e, t, o) => {
      "use strict";
      function s(e) {
        let t = e.querySelector(".js-menufloat-progress"),
          o = document.documentElement,
          s = document.body,
          n = window;
        e.classList.contains("modal__sotd-document") &&
          ((o = e), (s = e.querySelector(".modal__sotd-body")), (n = o)),
          (n.onscroll = function () {
            !(function () {
              let e =
                ((s.scrollTop || o.scrollTop) /
                  (o.scrollHeight - o.clientHeight)) *
                100;
              t && (t.style.width = e + "%");
            })();
          });
      }
      function n(e) {
        let t = e || document.body,
          o = t.querySelector(".js-menufloat-show");
        o &&
          setTimeout(function () {
            o.classList.add("is-visible");
          }, 100),
          s(t);
        let n = e || window,
          i = t.querySelectorAll(".js-menu-anchor");
        n.addEventListener("scroll", () => {
          let o = (e ? n.scrollTop : n.scrollY) + 71;
          i.forEach((e) => {
            if (!e.hash) return;
            let s = t.querySelector(e.hash);
            s &&
              (s.offsetTop <= o && s.offsetTop + s.offsetHeight > o
                ? e.classList.add("is-active")
                : e.classList.remove("is-active"));
          });
        });
        let a = t.querySelector(".js-gototop"),
          r = e || window;
        a &&
          (r.addEventListener("scroll", function () {
            (e ? r.scrollTop : window.scrollY) >
            (e ? r.innerHeight : window.innerHeight)
              ? a.classList.remove("is-hidden")
              : a.classList.add("is-hidden");
          }),
          a.addEventListener("click", function () {
            r.scrollTo({ top: 0, behavior: "smooth" });
          }));
      }
      o.d(t, { Z: () => n });
    },
    9998: (e, t, o) => {
      "use strict";
      function s() {
        document.querySelectorAll(".js-circle-note").forEach(function (e) {
          let t = e.dataset.note,
            o = 10 * t;
          (e.querySelector(".circle-note__path").style.strokeDasharray =
            o + ", 100"),
            (e.querySelector(".circle-note__note").textContent = t);
        });
      }
      function n() {
        document.querySelectorAll(".js-card-video").forEach(function (e) {
          e.addEventListener("click", function () {
            let e = this.closest(".card-video").querySelector("video");
            this.querySelector(".play-pause").classList.toggle("is-playing"),
              e.paused ? e.play() : e.pause();
          });
        });
      }
      function i() {
        var e = document.querySelectorAll(
          ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'].join(",")
        );
        if (e.length)
          for (var t = 0; t < e.length; t++) {
            var o = e[t],
              s = o.getAttribute("width"),
              n = o.getAttribute("height") / s,
              i = o.parentNode,
              a = document.createElement("div");
            (a.className = "fit-video"),
              (a.style.paddingBottom = 100 * n + "%"),
              i.insertBefore(a, o),
              o.remove(),
              a.appendChild(o),
              o.removeAttribute("height"),
              o.removeAttribute("width");
          }
      }
      function a() {
        if (window.IntersectionObserver) {
          let e = document.querySelectorAll(".js-video-autoplay"),
            t = new IntersectionObserver(
              function (e) {
                e.forEach((e) => {
                  if (e.isIntersecting) {
                    let t = e.target.play();
                    void 0 !== t && t.then(() => {}).catch(() => {});
                  } else e.target.pause();
                });
              },
              { threshold: 0.8 }
            ),
            o = new IntersectionObserver(
              function (e, o) {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (o.unobserve(e.target), t.observe(e.target));
                });
              },
              { rootMargin: "0px 0px 0px 0px" }
            );
          e.forEach((e) => {
            o.observe(e);
          });
        }
      }
      o.d(t, { FO: () => s, Pj: () => n, bn: () => a, dS: () => i });
    },
    1636: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => d });
      var s = o(2505),
        n = o(5432),
        i = o(2947),
        a = o(2406),
        r = o(4485),
        l = o(4043),
        c = o(2492);
      function d(e, t, o, d) {
        let u = d || window.location.pathname;
        o && s.Z.replace(window.location.pathname, { current_url: u });
        let h = document.createElement("div");
        h.classList.add("modal__sotd-document");
        let p = document.createElement("div");
        p.classList.add("modal__sotd-body"), h.appendChild(p);
        let m = document.createElement("div");
        m.classList.add("loading", "loading--white", "is-visible");
        let _ = document.createElement("div");
        _.classList.add("loading__spinner"), m.appendChild(_), p.appendChild(m);
        let g = new AbortController(),
          v = new n.Z({
            size: "fullscreen--bottom",
            add_container: !1,
            close_callback: () => {
              s.Z.push(u, { from_url: u }), g && g.abort();
            },
          });
        v.show(h);
        let f = t || e;
        i.Z.get(f, { signal: g.signal })
          .then(function (e) {
            return e.data;
          })
          .then(function (n) {
            let i = (0, a.Hk)(n);
            p.appendChild(i),
              m.classList.remove("is-visible"),
              v.replace(h),
              (0, r.Z)(),
              (0, l.Z)(),
              (0, c.Z)(h),
              o && s.Z.push(e, { modal: e, request_url: t, current_url: u });
          })
          .catch(function () {
            v.destroy();
          });
      }
    },
    4485: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => a });
      var s = o(9998),
        n = o(6301),
        i = o(2406);
      function a() {
        (0, s.FO)();
        let e = !1,
          t = 2;
        const o = document.querySelector(".js_user_notes_list");
        function a(a) {
          var r = o.querySelector(".js-bt-loadmore");
          r && (r.style.display = "block"),
            e ||
              fetch(n.Z.generate("tv_site_get_user_votes", { slug: a }))
                .then((e) => e.json())
                .then((r) => {
                  if (
                    ((o.innerHTML = r.items),
                    (e = !0),
                    parseInt(r.items_left) > 0)
                  ) {
                    var l = document.createElement("div");
                    l.classList.add("list-jury-notes__more");
                    var c = document.createElement("span");
                    (c.innerText = "â€¢â€¢â€¢"),
                      c.classList.add(
                        "button",
                        "button--tag",
                        "small",
                        "js-jury-loadmore"
                      ),
                      l.appendChild(c),
                      o
                        .querySelector(".list-jury-notes__item:last-child")
                        .appendChild(l),
                      (0, s.FO)(),
                      l.addEventListener("click", function () {
                        !(function (e, a) {
                          fetch(
                            n.Z.generate("tv_site_get_user_votes", {
                              slug: a,
                              page: t,
                            })
                          )
                            .then((e) => e.json())
                            .then((n) => {
                              var a = (0, i.Hk)(n.items);
                              o.appendChild(a),
                                parseInt(n.items_left) <= 0 &&
                                  (e.style.display = "none"),
                                t++,
                                o
                                  .querySelector(
                                    ".list-jury-notes__item:last-child"
                                  )
                                  .appendChild(e),
                                (0, s.FO)();
                            });
                        })(l, a);
                      });
                  }
                });
        }
        let r = document.getElementById("js-user_vote_tab");
        r &&
          r.addEventListener("click", function (e) {
            a(e.target.dataset.slug);
          }),
          document.querySelectorAll(".js-typo-loadmore").forEach((e) => {
            e.addEventListener("click", (t) => {
              t.preventDefault(),
                e.closest(".grid-typography__more").classList.add("is-visible");
            });
          });
      }
    },
    1252: (e, t, o) => {
      "use strict";
      o.d(t, { c: () => n });
      var s = o(4518);
      function n(e) {
        let t = s.Z.get("submission", e);
        if (null === t) return;
        let o = t.querySelector(".js-container-figure");
        o.querySelector("figure").classList.add("has-hover-active");
        let n = o.querySelector(".js-container-button-vote");
        n.classList.add("has-hover"),
          (n.innerHTML =
            '<span class="button button--white--rounded">YOUR VOTE</span>'),
          document
            .querySelectorAll(".js-container-button-vote")
            .forEach((e) => {
              e.classList.contains("has-hover") || e.remove();
            });
      }
    },
    1415: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      const s = class {
        static isEnabled() {
          return void 0 !== document.body.dataset.debug;
        }
      };
      window.dataLayer = window.dataLayer || [];
      const n = class {
        static gtag() {
          s.isEnabled() && console.log(arguments),
            window.dataLayer.push(arguments);
        }
        static push(e) {
          s.isEnabled() &&
            ((e = Object.assign({ debug_mode: !0 }, e)), console.log(e)),
            window.dataLayer.push(e);
        }
      };
    },
    7051: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = {
        username: "",
        displayName: "",
        id: "",
        isUserLoggedIn: !1,
        initialize: function () {
          this.setUser();
        },
        isLoggedIn: function () {
          return this.isUserLoggedIn;
        },
        isSameUserLoggedIn: function (e) {
          return e > 0 && e == this.id;
        },
        isOneOf: function (e) {
          return e.some((e) => e == this.id);
        },
        setUser: function () {
          var e = document.getElementById("js-user-details");
          if (e) {
            var t = JSON.parse(e.dataset.user);
            (this.username = t.username),
              (this.displayName = t.displayName),
              (this.id = t.id),
              (this.isUserLoggedIn = !0);
          }
        },
      };
      s.initialize();
      const n = s;
    },
    8559: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = o(2157);
      const n = class {
        static createItems(e, t) {
          let o = document.createDocumentFragment();
          for (let n = 0; n < e.length; n++) {
            let i = document.createElement("li");
            i.dataset.action = t;
            let a = document.createElement("img");
            a.classList.add("circle-avatar__img"),
              (a.src = s.Z.thumb(e[n].photo, "thumb_user_70")),
              (a.width = 24),
              (a.height = 24);
            let r = document.createElement("strong");
            (r.textContent = e[n].display_name),
              i.appendChild(a),
              i.appendChild(r),
              (i.dataset.user = JSON.stringify(e[n])),
              o.appendChild(i);
          }
          return o;
        }
      };
    },
    9783: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => m });
      var s = o(5432),
        n = o(791),
        i = o.n(n),
        a = o(6393),
        r = o.n(a),
        l = o(7051),
        c = o(6301),
        d = o(1102),
        u = o(2947);
      const h = class {
        constructor() {
          this.checked = {};
        }
        check(e) {
          if (!l.Z.isLoggedIn()) return;
          let t = this._getUserIds(e),
            o = {};
          0 !== t.length && (o.user = t),
            this.isEmpty(o) ||
              (new FormData().append("keys", o),
              u.Z.post(c.Z.generate("tv_user_check_likes"), { keys: o }).then(
                (t) => {
                  this._updateButtonsLiked(e, t.data);
                }
              ));
        }
        isEmpty(e) {
          for (var t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        }
        _getUserIds(e) {
          var t = [],
            o = this;
          return (
            void 0 === this.checked.user && (this.checked.user = []),
            [].forEach.call(
              e.querySelectorAll(".js-user-following"),
              function (e) {
                o.checked.user.includes(e.dataset.userId) ||
                  (t.push(e.dataset.userId),
                  o.checked.user.push(e.dataset.userId));
              }
            ),
            t
          );
        }
        _updateButtonsLiked(e, t) {
          void 0 !== t.user &&
            t.user.length > 0 &&
            (this.followById(e, t.user), delete t.user);
        }
        followById(e, t) {
          var o = this;
          t.filter((e) => null !== e && "" !== e).forEach((t) => {
            o._updateButtonForUser(
              e.querySelector('.js-user-following[data-user-id="' + t + '"]')
            );
          });
        }
        _updateButtonForUser(e) {
          e &&
            ((0, d.D)(e, 1),
            (e.href = c.Z.generate("tv_user_unfollow", {
              username: e.dataset.username,
            })));
        }
      };
      o(7097);
      var p = o(2406);
      const m = class {
        constructor(e) {
          (this.options = Object.assign(
            {},
            {
              routeToFetch: null,
              total: 0,
              routeParameters: null,
              page: 1,
              title: null,
            },
            e
          )),
            (this.firstLoad = !0),
            (this.userCheck = null),
            (this.loadMoreSelector = ".js-load-more"),
            (this.lightBox = new s.Z({
              remove_after_close: !0,
              size: "small",
            })),
            (this.userCheck = new h());
        }
        show() {
          this._showLoading(), this._fetch();
        }
        _fetch() {
          let e = this.lightBox.el.querySelector(this.loadMoreSelector);
          u.Z.get(
            c.Z.generate(
              this.options.routeToFetch,
              Object.assign(this.options.routeParameters, {
                page: this.options.page,
              })
            )
          ).then((t) => {
            let o = t.data;
            0 !== o.length
              ? (this.options.page++,
                this.render(o),
                e &&
                  (d.Z.isLoading(e) && d.Z.removeLoading(e),
                  o.length < 32 &&
                    this.lightBox.el
                      .querySelector(this.loadMoreSelector)
                      .classList.add("is-hidden")))
              : e.classList.add("is-hidden");
          });
        }
        _showLoading() {
          this.lightBox.show(
            (0, p.Hk)(
              '<div class="box-msg"><div class="box-loading style3 open"><div class="spinner"></div></div></div>'
            )
          );
        }
        render(e) {
          this.firstLoad
            ? (this._renderFirstTime(e), (this.firstLoad = !1))
            : (this.lightBox.el
                .querySelector(".js-user-list")
                .insertAdjacentHTML("beforeend", r()({ users: e })),
              this.userCheck.check(this.lightBox.el));
        }
        _renderFirstTime(e) {
          this.lightBox.show(
            (0, p.Hk)(
              i()({
                total: this.options.total,
                users: e,
                title: this.options.title,
              })
            ),
            !0
          ),
            this.lightBox.el
              .querySelector(this.loadMoreSelector)
              .addEventListener("click", (e) => {
                var t = e.currentTarget;
                d.Z.addLoading(t), this._fetch();
              }),
            this.userCheck.check(this.lightBox.el);
        }
      };
    },
    1102: (e, t, o) => {
      "use strict";
      function s(e, t) {
        var o = "";
        (t = t || 1),
          e.classList.remove("is-loading"),
          (o = e.classList.contains("active")
            ? e.dataset.textStart
            : e.dataset.textEnd),
          setTimeout(function () {
            e.querySelector(".js-bt-content") &&
              (e.querySelector(".js-bt-content").textContent = o),
              e.classList.toggle("active");
          }, t);
      }
      o.d(t, { D: () => s, Z: () => n });
      const n = class {
        static addLoading(e) {
          var t = document.createElement("div");
          t.classList.add("button__spinner"),
            e.appendChild(t),
            e.classList.add("is-loading");
        }
        static addLoadingChangingText(e, t) {
          e.classList.add("is-loading"),
            (e.querySelector(".button__text").textContent = t);
        }
        static addOne(e) {
          if (e.querySelector(".number")) {
            var t = parseInt(e.querySelector(".number").textContent) + 1;
            e.querySelector(".number").textContent = t.toString();
          }
        }
        static subtractOne(e) {
          if (e.querySelector(".number")) {
            var t = parseInt(e.querySelector(".number").textContent) - 1;
            e.querySelector(".number").textContent = t.toString();
          }
        }
        static removeLoading(e) {
          e.classList.remove("is-loading", "active"),
            e.querySelector(".button__spinner").remove();
        }
        static isLoading(e) {
          return e.classList.contains("is-loading");
        }
        static load(e) {
          var t = document.createElement("div");
          if (
            (t.classList.add("bt-load"),
            e.appendChild(t),
            e.classList.add("is-loading"),
            "loading" !== e.dataset.button)
          ) {
            e.classList.contains("active")
              ? setTimeout(function () {
                  e.classList.remove("is-loading"),
                    e.classList.remove("active"),
                    (e.querySelector(".bt-content").textContent =
                      e.dataset.textStart);
                }, 1e3)
              : setTimeout(function () {
                  e.classList.remove("is-loading"),
                    e.classList.add("active"),
                    (e.querySelector(".bt-content").textContent =
                      e.dataset.textEnd);
                }, 1e3);
          }
        }
      };
    },
    2193: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => r });
      var s = o(1955),
        n = {},
        i = { __w_vq: "w.video_quality", __w_hub: "hide_user_bubble" };
      class a {
        static getJSON(e) {
          let t = a.get(e);
          if (void 0 === t) return {};
          try {
            return JSON.parse(t);
          } catch (e) {
            return {};
          }
        }
        static get(e, t = void 0) {
          if (i.hasOwnProperty(e)) {
            var o = a.get(i[e]);
            void 0 !== o && (a.set(e, o), s.Z.remove(i[e]));
          }
          return (
            n.hasOwnProperty(e) || (n[e] = s.Z.get(e)),
            void 0 === n[e] ? t : n[e]
          );
        }
        static set(e, t, o) {
          s.Z.set(
            e,
            t,
            Object.assign({ domain: ".awwwards.com", expires: 730 }, o)
          ),
            (n[e] = t);
        }
        static remove(e, t) {
          s.Z.remove(e, t);
        }
      }
      const r = a;
    },
    2406: (e, t, o) => {
      "use strict";
      function s(e) {
        let t = document.createRange().createContextualFragment(e),
          o = document.createDocumentFragment();
        return o.appendChild(t), o;
      }
      function n(e) {
        (e.style.opacity = 1),
          (function t() {
            (e.style.opacity -= 0.1) < 0
              ? (e.style.display = "none")
              : requestAnimationFrame(t);
          })();
      }
      function i(e) {
        (e.style.opacity = 1),
          (function t() {
            (e.style.opacity -= 0.1) < 0
              ? e.remove()
              : requestAnimationFrame(t);
          })();
      }
      o.d(t, { Hk: () => s, U6: () => n, fm: () => i });
    },
    2157: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      var s = "https://assets.awwwards.com";
      const n = class {
        static asset(e) {
          return e ? s.replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : "";
        }
        static assetTv(e) {
          return e
            ? "string" != typeof e
              ? ""
              : new RegExp("^http", "i").test(e)
              ? e
              : s.replace(/\/$/g, "") + "/awards/" + e.replace(/^\//g, "")
            : "";
        }
        static assetLocal(e) {
          return e ? "/".replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : "";
        }
        static thumb(e, t, o = !1) {
          if (!e) return "";
          var s = e.replace(/^\//g, "");
          let n = "media/cache/" + t + "/" + s;
          return (
            o && (n = "media/cache/resolve/" + t + "/" + s), this.assetTv(n)
          );
        }
        static isAnimated(e) {
          if (!e) return !1;
          var t = this.getExtension(e);
          return -1 != ["gif", "mp4", "m4v", "webm"].indexOf(t);
        }
        static isVideo(e) {
          return (
            e && -1 != ["mp4", "m4v", "webm"].indexOf(this.getExtension(e))
          );
        }
        static typeVideo(e) {
          if (e) {
            var t = this.getExtension(e);
            return "mp4" === t || "m4v" === t ? "video/mp4" : "video/webm";
          }
          return "";
        }
        static getStaticVersion(e) {
          return e.substr(0, e.lastIndexOf(".")) + "_static.jpeg";
        }
        static getExtension(e) {
          return e ? e.toLowerCase().split(".").pop() : "";
        }
        static icon(e, t, o, s) {
          return (
            '<svg class="ico-svg' +
            (s && "string" == typeof s ? " " + s : "") +
            '" viewbox="0 0 ' +
            t +
            " " +
            o +
            '" xmlns="http://www.w3.org/2000/svg"><use xlink:href="' +
            ("/assets/images/sprite-icons.svg#" + e) +
            '" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'
          );
        }
        static redesignIcon(e, t, o) {
          return (
            '<svg class="ico-svg' +
            (o && "string" == typeof o ? " " + o : "") +
            '" viewbox="0 0 20 20" width="' +
            t +
            '" xmlns="http://www.w3.org/2000/svg"><use xlink:href="' +
            ("/assets/redesign/images/sprite-icons.svg#" + e) +
            '" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'
          );
        }
        static getImageInfo(e) {
          return e
            ? {
                static: this.isAnimated(e) ? this.getStaticVersion(e) : e,
                animated: e,
                is_video: this.isVideo(e),
              }
            : { static: null, animated: null, is_video: !1 };
        }
      };
    },
    7022: (e, t, o) => {
      "use strict";
      function s(e) {
        if (e.classList.contains("lazy--loaded")) return;
        let t = e.src;
        e.dataset.src && (e.src = e.dataset.src),
          e.dataset.srcset && (e.srcset = e.dataset.srcset),
          e.classList.add("lazy--hidden"),
          (e.onload = () => {
            e.classList.remove("lazy--hidden"),
              setTimeout(() => {
                e.classList.add("lazy--loaded");
              }, 100);
          }),
          (e.onerror = () => {
            e.srcset && e.removeAttribute("srcset"),
              (e.src = t),
              e.classList.remove("lazy--hidden"),
              e.classList.add("lazy--loaded");
          });
      }
      o.d(t, { Z: () => s });
    },
    3070: (e, t, o) => {
      "use strict";
      function s(e) {
        e.classList.contains("lazy--loaded") ||
          (e.dataset.poster && (e.poster = e.dataset.poster),
          [].forEach.call(e.querySelectorAll("source"), (e) => {
            e.dataset.src && (e.src = e.dataset.src);
          }),
          e.classList.add("lazy--hidden"),
          (e.onloadeddata = () => {
            e.classList.remove("lazy--hidden"),
              setTimeout(() => {
                e.classList.add("lazy--loaded");
              }, 100);
          }),
          e.load());
      }
      o.d(t, { Z: () => s });
    },
    3414: (e, t, o) => {
      "use strict";
      o.d(t, { O: () => r });
      var s = o(3290);
      const n = {
        success:
          '<svg height="30" width="30" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9z" fill-rule="evenodd"/></svg>',
        warning:
          '<svg height="30" width="30" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" fill-rule="evenodd"/></svg>',
        error:
          '<svg height="30" width="30" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm5 13.6L13.6 15 10 11.4 6.4 15 5 13.6 8.6 10 5 6.4 6.4 5 10 8.6 13.6 5 15 6.4 11.4 10l3.6 3.6z" fill-rule="evenodd"/></svg>',
      };
      function i(e, t = 5e3) {
        return setTimeout(function () {
          e.classList.remove("is-visible");
        }, t);
      }
      function a(e, t = 6e3) {
        return setTimeout(function () {
          e.parentNode.removeChild(e);
        }, t);
      }
      function r(e, t) {
        var o,
          r,
          l = document.createElement("div"),
          c = n[e];
        l.classList.add("snackbar", "snackbar--" + e),
          (l.style.zIndex = s.Z.zIndex + 1),
          (l.innerHTML = c + t),
          document.body.appendChild(l),
          setTimeout(function () {
            l.classList.add("is-visible");
          }, 100),
          (o = i(l)),
          (r = a(l)),
          l.addEventListener("mouseover", function () {
            clearTimeout(o), clearTimeout(r);
          }),
          l.addEventListener("mouseout", function () {
            (o = i(l, 2e3)), (r = a(l, 3e3));
          });
      }
    },
    2260: (e, t, o) => {
      "use strict";
      function s(e, t = null) {
        var o = e
            .elements()
            .create("card", {
              style: {
                base: {
                  color: "#32325d",
                  lineHeight: "18px",
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: "antialiased",
                  fontSize: "16px",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#fa755a", iconColor: "#fa755a" },
              },
              hidePostalCode: !0,
            }),
          s = t || "#card-element";
        return (
          o.mount(s),
          o.addEventListener("change", function (e) {
            var t = document.getElementById("card-errors");
            e.error ? (t.textContent = e.error.message) : (t.textContent = "");
          }),
          o
        );
      }
      function n(e) {
        var t = e.elements(),
          o = {
            base: {
              color: "#202121",
              fontSize: "18px",
              fontWeight: 100,
              fontFamily: '"apercu",sans-serif',
              ":focus": { color: "#424770" },
              "::placeholder": { color: "#CFD7DF" },
              ":focus::placeholder": { color: "#CFD7DF" },
            },
            invalid: {
              color: "#D14836",
              ":focus": { color: "#fb6a6a" },
              "::placeholder": { color: "#fb6a6a" },
            },
          },
          s = { focus: "focus", empty: "empty", invalid: "invalid" },
          n = t.create("cardNumber", { style: o, classes: s });
        return (
          n.mount("#js_stripe_card_number"),
          t
            .create("cardExpiry", { style: o, classes: s })
            .mount("#js_stripe_expiry"),
          t.create("cardCvc", { style: o, classes: s }).mount("#js_stripe_cvc"),
          n
        );
      }
      o.d(t, { H: () => n, x: () => s });
    },
    4739: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(2157);
      function n(e, t) {
        return s.Z.thumb(e, t);
      }
    },
    9105: (e, t, o) => {
      "use strict";
      function s(e, t, o, s) {
        if (arguments.length < 3)
          throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        void 0 === s && ((s = o), (o = t), (t = "==="));
        const n = {
          "==": function (e, t) {
            return e == t;
          },
          "===": function (e, t) {
            return e === t;
          },
          "!=": function (e, t) {
            return e != t;
          },
          "!==": function (e, t) {
            return e !== t;
          },
          "<": function (e, t) {
            return e < t;
          },
          ">": function (e, t) {
            return e > t;
          },
          "<=": function (e, t) {
            return e <= t;
          },
          ">=": function (e, t) {
            return e >= t;
          },
          typeof: function (e, t) {
            return typeof e == t;
          },
        };
        if (!n[t])
          throw new Error(
            `Handlerbars Helper 'compare' doesn't know the operator ${t}`
          );
        return n[t](e, o) ? s.fn(this) : s.inverse(this);
      }
      o.r(t), o.d(t, { default: () => s });
    },
    561: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(2157);
      function n(e, t, o) {
        return s.Z.redesignIcon(e, t, o);
      }
    },
    6805: (e, t, o) => {
      "use strict";
      function s(e, t) {
        return "object" == typeof e ? t.fn(this) : t.inverse(this);
      }
      o.r(t), o.d(t, { default: () => s });
    },
    3117: (e, t, o) => {
      "use strict";
      function s(e) {
        return JSON.stringify(e);
      }
      o.r(t), o.d(t, { default: () => s });
    },
    5040: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(6301);
      function n(e, t) {
        return s.Z.generate(e, t.hash);
      }
    },
    8040: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var s = o(9482);
      function n(e, t) {
        return s.Z.trans(e, t);
      }
    },
    7677: function (e, t) {
      var o, s, n;
      !(function (i) {
        ((a = {}).__esModule = !0),
          (a.Routing = a.Router = void 0),
          (r = (function () {
            function e(e, t) {
              (this.context_ = e || {
                base_url: "",
                prefix: "",
                host: "",
                port: "",
                scheme: "",
                locale: "",
              }),
                this.setRoutes(t || {});
            }
            return (
              (e.getInstance = function () {
                return a.Routing;
              }),
              (e.setData = function (t) {
                e.getInstance().setRoutingData(t);
              }),
              (e.prototype.setRoutingData = function (e) {
                this.setBaseUrl(e.base_url),
                  this.setRoutes(e.routes),
                  void 0 !== e.prefix && this.setPrefix(e.prefix),
                  void 0 !== e.port && this.setPort(e.port),
                  void 0 !== e.locale && this.setLocale(e.locale),
                  this.setHost(e.host),
                  void 0 !== e.scheme && this.setScheme(e.scheme);
              }),
              (e.prototype.setRoutes = function (e) {
                this.routes_ = Object.freeze(e);
              }),
              (e.prototype.getRoutes = function () {
                return this.routes_;
              }),
              (e.prototype.setBaseUrl = function (e) {
                this.context_.base_url = e;
              }),
              (e.prototype.getBaseUrl = function () {
                return this.context_.base_url;
              }),
              (e.prototype.setPrefix = function (e) {
                this.context_.prefix = e;
              }),
              (e.prototype.setScheme = function (e) {
                this.context_.scheme = e;
              }),
              (e.prototype.getScheme = function () {
                return this.context_.scheme;
              }),
              (e.prototype.setHost = function (e) {
                this.context_.host = e;
              }),
              (e.prototype.getHost = function () {
                return this.context_.host;
              }),
              (e.prototype.setPort = function (e) {
                this.context_.port = e;
              }),
              (e.prototype.getPort = function () {
                return this.context_.port;
              }),
              (e.prototype.setLocale = function (e) {
                this.context_.locale = e;
              }),
              (e.prototype.getLocale = function () {
                return this.context_.locale;
              }),
              (e.prototype.buildQueryParams = function (e, t, o) {
                var s,
                  n = this,
                  i = new RegExp(/\[\]$/);
                if (t instanceof Array)
                  t.forEach(function (t, s) {
                    i.test(e)
                      ? o(e, t)
                      : n.buildQueryParams(
                          e + "[" + ("object" == typeof t ? s : "") + "]",
                          t,
                          o
                        );
                  });
                else if ("object" == typeof t)
                  for (s in t)
                    this.buildQueryParams(e + "[" + s + "]", t[s], o);
                else o(e, t);
              }),
              (e.prototype.getRoute = function (e) {
                var t,
                  o = [
                    this.context_.prefix + e,
                    e + "." + this.context_.locale,
                    this.context_.prefix + e + "." + this.context_.locale,
                    e,
                  ];
                for (t in o)
                  if (o[t] in this.routes_) return this.routes_[o[t]];
                throw new Error('The route "' + e + '" does not exist.');
              }),
              (e.prototype.generate = function (t, o, s) {
                var n,
                  i = this.getRoute(t),
                  a = o || {},
                  r = Object.assign({}, a),
                  l = "",
                  c = !0,
                  d = "";
                o =
                  void 0 === this.getPort() || null === this.getPort()
                    ? ""
                    : this.getPort();
                if (
                  (i.tokens.forEach(function (o) {
                    if ("text" === o[0] && "string" == typeof o[1])
                      return (
                        (l = e.encodePathComponent(o[1]) + l), void (c = !1)
                      );
                    if ("variable" !== o[0])
                      throw new Error(
                        'The token type "' + o[0] + '" is not supported.'
                      );
                    6 === o.length && !0 === o[5] && (c = !1);
                    var s =
                      i.defaults &&
                      !Array.isArray(i.defaults) &&
                      "string" == typeof o[3] &&
                      o[3] in i.defaults;
                    if (
                      !1 === c ||
                      !s ||
                      ("string" == typeof o[3] &&
                        o[3] in a &&
                        !Array.isArray(i.defaults) &&
                        a[o[3]] != i.defaults[o[3]])
                    ) {
                      var n,
                        d = void 0;
                      if ("string" == typeof o[3] && o[3] in a)
                        (d = a[o[3]]), delete r[o[3]];
                      else {
                        if (
                          "string" != typeof o[3] ||
                          !s ||
                          Array.isArray(i.defaults)
                        ) {
                          if (c) return;
                          throw new Error(
                            'The route "' +
                              t +
                              '" requires the parameter "' +
                              o[3] +
                              '".'
                          );
                        }
                        d = i.defaults[o[3]];
                      }
                      ((!0 === d || !1 === d || "" === d) && c) ||
                        ((n = e.encodePathComponent(d)),
                        (l =
                          o[1] +
                          (n = "null" === n && null === d ? "" : n) +
                          l)),
                        (c = !1);
                    } else s && "string" == typeof o[3] && o[3] in r && delete r[o[3]];
                  }),
                  "" === l && (l = "/"),
                  i.hosttokens.forEach(function (e) {
                    var t;
                    "text" !== e[0]
                      ? "variable" === e[0] &&
                        (e[3] in a
                          ? ((t = a[e[3]]), delete r[e[3]])
                          : i.defaults &&
                            !Array.isArray(i.defaults) &&
                            e[3] in i.defaults &&
                            (t = i.defaults[e[3]]),
                        (d = e[1] + t + d))
                      : (d = e[1] + d);
                  }),
                  (l = this.context_.base_url + l),
                  i.requirements &&
                  "_scheme" in i.requirements &&
                  this.getScheme() != i.requirements._scheme
                    ? ((n = d || this.getHost()),
                      (l =
                        i.requirements._scheme +
                        "://" +
                        n +
                        (-1 < n.indexOf(":" + o) || "" === o ? "" : ":" + o) +
                        l))
                    : void 0 !== i.schemes &&
                      void 0 !== i.schemes[0] &&
                      this.getScheme() !== i.schemes[0]
                    ? ((n = d || this.getHost()),
                      (l =
                        i.schemes[0] +
                        "://" +
                        n +
                        (-1 < n.indexOf(":" + o) || "" === o ? "" : ":" + o) +
                        l))
                    : d &&
                      this.getHost() !==
                        d + (-1 < d.indexOf(":" + o) || "" === o ? "" : ":" + o)
                    ? (l =
                        this.getScheme() +
                        "://" +
                        d +
                        (-1 < d.indexOf(":" + o) || "" === o ? "" : ":" + o) +
                        l)
                    : !0 === s &&
                      (l =
                        this.getScheme() +
                        "://" +
                        this.getHost() +
                        (-1 < this.getHost().indexOf(":" + o) || "" === o
                          ? ""
                          : ":" + o) +
                        l),
                  0 < Object.keys(r).length)
                ) {
                  function u(t, o) {
                    (o =
                      null === (o = "function" == typeof o ? o() : o) ? "" : o),
                      p.push(
                        e.encodeQueryComponent(t) +
                          "=" +
                          e.encodeQueryComponent(o)
                      );
                  }
                  var h,
                    p = [];
                  for (h in r)
                    r.hasOwnProperty(h) && this.buildQueryParams(h, r[h], u);
                  l = l + "?" + p.join("&");
                }
                return l;
              }),
              (e.customEncodeURIComponent = function (e) {
                return encodeURIComponent(e)
                  .replace(/%2F/g, "/")
                  .replace(/%40/g, "@")
                  .replace(/%3A/g, ":")
                  .replace(/%21/g, "!")
                  .replace(/%3B/g, ";")
                  .replace(/%2C/g, ",")
                  .replace(/%2A/g, "*")
                  .replace(/\(/g, "%28")
                  .replace(/\)/g, "%29")
                  .replace(/'/g, "%27");
              }),
              (e.encodePathComponent = function (t) {
                return e
                  .customEncodeURIComponent(t)
                  .replace(/%3D/g, "=")
                  .replace(/%2B/g, "+")
                  .replace(/%21/g, "!")
                  .replace(/%7C/g, "|");
              }),
              (e.encodeQueryComponent = function (t) {
                return e.customEncodeURIComponent(t).replace(/%3F/g, "?");
              }),
              e
            );
          })()),
          (a.Router = r),
          (a.Routing = new r()),
          (a.default = a.Routing);
        var a,
          r = { Router: a.Router, Routing: a.Routing };
        (s = []),
          (o = r.Routing),
          void 0 === (n = "function" == typeof o ? o.apply(t, s) : o) ||
            (e.exports = n);
      })();
    },
    9602: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        1: function (e, t, o, s, n) {
          return " is-visible";
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a,
            r = null != t ? t : e.nullContext || {},
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "<div " +
            (null !=
            (i =
              "function" ==
              typeof (a =
                null !=
                (a = l(o, "attributes") || (null != t ? l(t, "attributes") : t))
                  ? a
                  : e.hooks.helperMissing)
                ? a.call(r, {
                    name: "attributes",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 1, column: 5 },
                      end: { line: 1, column: 23 },
                    },
                  })
                : a)
              ? i
              : "") +
            ' class="js-loading loading loading--white' +
            (null !=
            (i = l(o, "if").call(r, null != t ? l(t, "show") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, n, 0),
              inverse: e.noop,
              data: n,
              loc: {
                start: { line: 1, column: 64 },
                end: { line: 1, column: 96 },
              },
            }))
              ? i
              : "") +
            '">\n    <div class="loading__spinner"></div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    6064: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a = null != t ? t : e.nullContext || {},
            r = e.hooks.helperMissing,
            l = "function",
            c = e.escapeExpression,
            d =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-content-default">\n    <h3 class="heading-x-medium">The Annual Awards voting has ended</h3>\n    <p>The winners of the web ' +
            c(
              typeof (i =
                null !=
                (i =
                  d(o, "annualAwardsYear") ||
                  (null != t ? d(t, "annualAwardsYear") : t))
                  ? i
                  : r) === l
                ? i.call(a, {
                    name: "annualAwardsYear",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 3, column: 30 },
                      end: { line: 3, column: 52 },
                    },
                  })
                : i
            ) +
            " will be announced in mid-February " +
            c(
              typeof (i =
                null !=
                (i =
                  d(o, "currentYear") || (null != t ? d(t, "currentYear") : t))
                  ? i
                  : r) === l
                ? i.call(a, {
                    name: "currentYear",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 3, column: 87 },
                      end: { line: 3, column: 104 },
                    },
                  })
                : i
            ) +
            '.</p>\n    <p><span class="button js-modal-close">ACCEPT</span></p>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    8238: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-content-default">\n    <h2 class="heading-xx-medium">Welcome to the Annual Awards ' +
            e.escapeExpression(
              "function" ==
                typeof (i =
                  null !=
                  (i =
                    a(o, "annualAwardsYear") ||
                    (null != t ? a(t, "annualAwardsYear") : t))
                    ? i
                    : e.hooks.helperMissing)
                ? i.call(null != t ? t : e.nullContext || {}, {
                    name: "annualAwardsYear",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 2, column: 63 },
                      end: { line: 2, column: 85 },
                    },
                  })
                : i
            ) +
            '</h2>\n    <p>Itâ€™s been a pleasure working with you this year, with your help we have recognized the work and effort of the creatives who make the internet a more beautiful and accessible place. Now itâ€™s time to evaluate the excellence, and as always, we need your help to carry out the important task of judging the work of others!</p>\n    <div><a href="#" class="js-start-voting button button-trans">Start Voting</a></div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    4027: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          return '<div class="box-content-default">\n    <h2 class="heading-xx-medium">Jury Access Only</h2>\n    <p>This is the private voting zone for the 2024 Annuals. You can explore the experience as a guest to see what itâ€™s like to be an Awwwards jury member. However, if youâ€™d like your vote to count as a user, <strong><a href="https://annuals.awwwards.com" class="link-underlined" target="_blank">click here</a></strong> to visit the official 2024 Annuals page.</p>\n</div>';
        },
        useData: !0,
      });
    },
    2688: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-content-default">\n    <h2 class="heading-xx-medium">Welcome to the Annual Awards ' +
            e.escapeExpression(
              "function" ==
                typeof (i =
                  null !=
                  (i =
                    a(o, "annualAwardsYear") ||
                    (null != t ? a(t, "annualAwardsYear") : t))
                    ? i
                    : e.hooks.helperMissing)
                ? i.call(null != t ? t : e.nullContext || {}, {
                    name: "annualAwardsYear",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 2, column: 63 },
                      end: { line: 2, column: 85 },
                    },
                  })
                : i
            ) +
            '</h2>\n    <p>Itâ€™s been a pleasure working with you this year, with your help we have recognized the work and effort of the creatives who make the internet a more beautiful and accessible place. Now itâ€™s time to evaluate the excellence, and as always, we need your help to carry out the important task of judging the work of others - please take the time to vote, as in the case of a draw - the Young Jury\'s vote will have the final say!</p>\n    <div><a href="#" class="js-start-voting button button-trans">Start Voting as a Guest</a></div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    7255: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = e.escapeExpression,
            c = null != t ? t : e.nullContext || {},
            d =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-alert__top">\n    <h2 class="m-alert__title">\n        <strong>Share your collection "' +
            l(
              e.lambda(
                null != (r = null != t ? d(t, "collection") : t)
                  ? d(r, "name")
                  : r,
                t
              )
            ) +
            '"</strong>\n    </h2>\n</div>\n\n<div class="m-alert__content">\n    <div class="form-field" style="min-height: 200px;">\n        <style>\n            .field-autocomplete__dropdown {opacity: 1;}\n        </style>\n        <label class="form-field__label">Add collaborators</label>\n        <div class="field-autocomplete" data-controller="collection--collaborators" data-collection--collaborators-model-value="' +
            l(
              n(o(3117)).call(c, null != t ? d(t, "collection") : t, {
                name: "helpers/json",
                hash: {},
                data: a,
                loc: {
                  start: { line: 13, column: 128 },
                  end: { line: 13, column: 159 },
                },
              })
            ) +
            '">\n            <div class="field-autocomplete__wrap">\n                <input\n                  data-collection--collaborators-target="inputSearch"\n                  data-action="keyup->collection--collaborators#searchUser"\n                  type="text"\n                  class="text-input"\n                  placeholder="' +
            l(
              n(o(8040)).call(c, "login_or_create.email_or_username", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 20, column: 31 },
                  end: { line: 20, column: 88 },
                },
              })
            ) +
            '"\n                  autocomplete="off"\n                >\n                <div class="field-autocomplete__dropdown" data-collection--collaborators-target="boxUsers">\n                    <ul id="suggest-list" class="field-autocomplete__list" data-collection--collaborators-target="usersSuggested"></ul>\n                </div>\n                <div class="field-autocomplete__loading js-loading-spinner is-hidden">\n                    <div class="loading__spinner"></div>\n                </div>\n            </div>\n            <div class="field-autocomplete__selected box-users-likes">\n                <ul class="field-autocomplete__avatars list-users" data-collection--collaborators-target="listUsers"></ul>\n            </div>\n        </div>\n    </div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    6424: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        1: function (e, t, s, n, i) {
          return (
            '        <div class="button button--gray button--large--black--rounded js-modal-close">' +
            e.escapeExpression(
              ((a = o(8040)), a && (a.__esModule ? a.default : a)).call(
                null != t ? t : e.nullContext || {},
                "app.cancel",
                {
                  name: "helpers/trans",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 12, column: 86 },
                    end: { line: 12, column: 120 },
                  },
                }
              )
            ) +
            "</div>\n"
          );
          var a;
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a = e.lambda,
            r = e.escapeExpression,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-alert__top">\n    <h2 class="m-alert__title">\n        <strong>' +
            r(a(null != t ? l(t, "title") : t, t)) +
            '</strong>\n    </h2>\n</div>\n<div class="m-alert__content">\n    <p>' +
            r(a(null != t ? l(t, "description") : t, t)) +
            '</p>\n</div>\n<div class="m-alert__bts">\n    <div class="js-yes button button--large--black--rounded ' +
            r(a(null != t ? l(t, "classActionButton") : t, t)) +
            '">' +
            r(a(null != t ? l(t, "textActionButton") : t, t)) +
            "</div>\n" +
            (null !=
            (i = l(o, "if").call(
              null != t ? t : e.nullContext || {},
              null != t ? l(t, "showCancelButton") : t,
              {
                name: "if",
                hash: {},
                fn: e.program(1, n, 0),
                inverse: e.noop,
                data: n,
                loc: {
                  start: { line: 11, column: 4 },
                  end: { line: 13, column: 11 },
                },
              }
            ))
              ? i
              : "") +
            "</div>\n"
          );
        },
        useData: !0,
      });
    },
    9088: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a = null != t ? t : e.nullContext || {},
            r = e.hooks.helperMissing,
            l = "function",
            c = e.escapeExpression,
            d =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-alert__top">\n    <h2 class="m-alert__title">\n        <strong>Are you sure?</strong>\n    </h2>\n</div>\n<div class="m-alert__content">\n    <p>' +
            c(
              typeof (i =
                null != (i = d(o, "msg") || (null != t ? d(t, "msg") : t))
                  ? i
                  : r) === l
                ? i.call(a, {
                    name: "msg",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 7, column: 7 },
                      end: { line: 7, column: 16 },
                    },
                  })
                : i
            ) +
            '</p>\n</div>\n<div class="m-alert__bts">\n    <div class="js-yes button button--large--black--rounded">' +
            c(
              typeof (i =
                null != (i = d(o, "button") || (null != t ? d(t, "button") : t))
                  ? i
                  : r) === l
                ? i.call(a, {
                    name: "button",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 10, column: 61 },
                      end: { line: 10, column: 73 },
                    },
                  })
                : i
            ) +
            "</div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    7428: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = e.lambda,
            c = e.escapeExpression,
            d = null != t ? t : e.nullContext || {},
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-inside">\n    <form action="" class="js-submit-form">\n        <div class="box-content">\n            <div class="form">\n                <div class="form__row">\n                    <h4><strong>About me</strong></h4>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <label class="form-field__label" for="company_name">Company name</label>\n                        <input id="company_name" value="' +
            c(
              l(
                null != (r = null != t ? u(t, "model") : t) ? u(r, "name") : r,
                t
              )
            ) +
            '" type="text" name="contact[name]" class="text-input" placeholder="Name" data-controller="validator--characters" data-validator--characters-max-value="185" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n                <div class="form__row">\n                    <div class="form-field">\n                        <label class="form-field__label" for="e_mail">E-mail</label>\n                        <input id="e_mail" value="' +
            c(
              l(
                null != (r = null != t ? u(t, "model") : t) ? u(r, "email") : r,
                t
              )
            ) +
            '" type="text" name="contact[email]" class="text-input"  data-max="185" placeholder="E-mail"  data-controller="validator--characters" data-validator--characters-max-value="185" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <label for="phone" class="form-field__label">Phone</label>\n                        <input id="phone" value="' +
            c(
              l(
                null != (r = null != t ? u(t, "model") : t) ? u(r, "phone") : r,
                t
              )
            ) +
            '" type="text" name="contact[phone]" class="text-input" placeholder="Phone"  data-controller="validator--characters" data-validator--characters-max-value="50" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <label for="website" class="form-field__label">Website</label>\n                        <input id="website" value="' +
            c(
              l(
                null != (r = null != t ? u(t, "model") : t)
                  ? u(r, "website")
                  : r,
                t
              )
            ) +
            '" type="text" name="contact[website]" class="text-input" placeholder="Website" data-controller="validator--characters" data-validator--characters-max-value="185" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <h4><strong>More info</strong></h4>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <label for="sell_yourself_here" class="form-field__label">Sell yourself here..</label>\n                        <textarea id="sell_yourself_here" name="contact[message]" class="text-input" placeholder="Sell yourself here.." data-controller="validator--characters" data-validator--characters-max-value="1000" data-action="keyup->validator--characters#validate focus->validator--characters#validate">' +
            c(
              l(
                null != (r = null != t ? u(t, "model") : t)
                  ? u(r, "message")
                  : r,
                t
              )
            ) +
            '</textarea>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <div class="input-check">\n                            <input name="contact[termsAndConditions]" type="checkbox" id="contact_termsAndConditions" value="1" />\n                            <label for="contact_termsAndConditions">I have read and accepted the <strong><a target="_blank" href="' +
            c(
              n(o(5040)).call(d, "tv_terms", {
                name: "helpers/path",
                hash: {},
                data: a,
                loc: {
                  start: { line: 51, column: 130 },
                  end: { line: 51, column: 161 },
                },
              })
            ) +
            '">Terms and Conditions</a></strong> and <strong><a href="' +
            c(
              n(o(5040)).call(d, "tv_privacy_policy", {
                name: "helpers/path",
                hash: {},
                data: a,
                loc: {
                  start: { line: 51, column: 218 },
                  end: { line: 51, column: 258 },
                },
              })
            ) +
            '" target="_blank">Privacy Policy</a></strong></label>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <div class="legal-recaptcha">\n                            <script src="https://www.google.com/recaptcha/api.js?render=' +
            c(l(null != t ? u(t, "recaptcha") : t, t)) +
            '"></script>\n                            <input type="hidden" id="contact_recaptcha" name="contact[recaptcha]" value="">\n                            <small>\n                              This site is protected by reCAPTCHA and the Google\n                              <a href="https://policies.google.com/privacy">Privacy Policy</a> and\n                              <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n                            </small>\n                        </div>\n                    </div>\n\n                    <button type="submit" value="SEND MESSAGE" class="button button--rounded js-submit-contact-job-button">\n                      <span class="button__content">SEND MESSAGE</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    7546: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = null != t ? t : e.nullContext || {},
            c = e.escapeExpression,
            d = e.lambda,
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-inside">\n    <form action="" class="js-submit-form">\n        <div class="box-content">\n            <div class="form">\n                <div class="form__row">\n                    <h4><strong>' +
            c(
              n(o(8040)).call(l, "form.talent.about_us", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 6, column: 32 },
                  end: { line: 6, column: 76 },
                },
              })
            ) +
            '</strong></h4>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <input value="' +
            c(
              d(
                null != (r = null != t ? u(t, "model") : t) ? u(r, "name") : r,
                t
              )
            ) +
            '" type="text" name="contact[name]" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "form.talent.name", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 11, column: 121 },
                  end: { line: 11, column: 161 },
                },
              })
            ) +
            '"  data-controller="validator--characters" data-validator--characters-max-value="30" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <input value="' +
            c(
              d(
                null != (r = null != t ? u(t, "model") : t) ? u(r, "email") : r,
                t
              )
            ) +
            '" type="text" name="contact[email]" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "form.email", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 17, column: 123 },
                  end: { line: 17, column: 157 },
                },
              })
            ) +
            '"  data-controller="validator--characters" data-validator--characters-max-value="100" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <input type="text" value="' +
            c(
              d(
                null != (r = null != t ? u(t, "model") : t)
                  ? u(r, "website")
                  : r,
                t
              )
            ) +
            '" name="contact[website]" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "form.website", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 23, column: 127 },
                  end: { line: 23, column: 163 },
                },
              })
            ) +
            '"  data-controller="validator--characters" data-validator--characters-max-value="50" data-action="keyup->validator--characters#validate focus->validator--characters#validate"/>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <h4><strong>' +
            c(
              n(o(8040)).call(l, "form.talent.message", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 28, column: 32 },
                  end: { line: 28, column: 75 },
                },
              })
            ) +
            '</strong></h4>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <textarea name="contact[message]" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "form.talent.message_description", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 33, column: 90 },
                  end: { line: 33, column: 145 },
                },
              })
            ) +
            '"  data-controller="validator--characters" data-validator--characters-max-value="1000" data-action="keyup->validator--characters#validate focus->validator--characters#validate">' +
            c(
              d(
                null != (r = null != t ? u(t, "model") : t)
                  ? u(r, "message")
                  : r,
                t
              )
            ) +
            '</textarea>\n                    </div>\n                </div>\n\n                <div class="form__row">\n                    <div class="form-field">\n                        <div class="input-check">\n                            <input name="contact[termsAndConditions]" type="checkbox" id="contact_termsAndConditions" value="1" />\n                            <label for="contact_termsAndConditions">I have read and accepted the <strong><a target="_blank" href="' +
            c(
              n(o(5040)).call(l, "tv_terms", {
                name: "helpers/path",
                hash: {},
                data: a,
                loc: {
                  start: { line: 41, column: 130 },
                  end: { line: 41, column: 161 },
                },
              })
            ) +
            '">Terms and Conditions</a></strong> and <strong><a href="' +
            c(
              n(o(5040)).call(l, "tv_privacy_policy", {
                name: "helpers/path",
                hash: {},
                data: a,
                loc: {
                  start: { line: 41, column: 218 },
                  end: { line: 41, column: 258 },
                },
              })
            ) +
            '" target="_blank">Privacy Policy</a></strong></label>\n                        </div>\n                    </div>\n                </div>\n\n              <div class="form__row">\n                <div class="form-field">\n                  <div class="legal-recaptcha">\n                    <script src="https://www.google.com/recaptcha/api.js?render=' +
            c(d(null != t ? u(t, "recaptcha") : t, t)) +
            '"></script>\n                    <input type="hidden" id="contact_recaptcha" name="contact[recaptcha]" value="">\n                    <small>\n                      This site is protected by reCAPTCHA and the Google\n                      <a href="https://policies.google.com/privacy">Privacy Policy</a> and\n                      <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n                    </small>\n                  </div>\n                </div>\n\n                <button type="submit" value="' +
            c(
              n(o(8040)).call(l, "contact.send_message", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 59, column: 45 },
                  end: { line: 59, column: 89 },
                },
              })
            ) +
            '" class="button button--rounded js-submit-contact-user-button">\n                  <span class="button__content">' +
            c(
              n(o(8040)).call(l, "contact.send_message", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 60, column: 48 },
                  end: { line: 60, column: 92 },
                },
              })
            ) +
            "</span>\n                </button>\n              </div>\n            </div>\n        </div>\n    </form>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    6465: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        1: function (e, t, o, s, n) {
          return "checked ";
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          var a,
            r,
            l = null != t ? t : e.nullContext || {},
            c =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div data-controller="cookie-manager">\n  <div class="content-tabs" id="t-cookies">\n    <div class="content-tabs__item active" id="cookies-info">\n      <div class="m-cookies">\n        <p class="text-large"><strong>Cookies Policy</strong></p>\n        <div class="text-medium">\n          <p>We use our own cookies, as well as those of third parties, for individual as well as repeated sessions, in order to make the navigation of our website easy and safe for our users.</p>\n          <p>In turn, we use cookies to measure and obtain statistical data about the navigation of the users. You can configure and accept the use of the cookies, and modify your consent options, at any time. You can read more information about our <strong><a href="' +
            e.escapeExpression(
              ((r = o(5040)), r && (r.__esModule ? r.default : r)).call(
                l,
                "tv_cookies_policy",
                {
                  name: "helpers/path",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 8, column: 267 },
                    end: { line: 8, column: 307 },
                  },
                }
              )
            ) +
            '" class="link-underlined">Cookie Policy</a></strong>.</p>\n        </div>\n      </div>\n    </div>\n    <div class="content-tabs__item" id="cookies-settings">\n      <div class="m-cookies">\n        <p class="text-large"><strong>Cookies configuration</strong></p>\n        <div class="text-medium">\n          <p>We use our own cookies, as well as those of third parties, for individual as well as repeated sessions, in order to make the navigation of our website easy and safe for our users.</p>\n        </div>\n        <ul class="m-cookies__list">\n          <li>\n            <div>\n              <strong>Strictly necessary cookies</strong>\n            </div>\n            <div>\n              <strong>Always active</strong>\n            </div>\n          </li>\n          <li>\n            <div>\n              <strong>Visitor preferences</strong>\n            </div>\n            <div class="check-toggle ">\n              <input ' +
            (null !=
            (a = c(s, "if").call(l, null != t ? c(t, "preferences") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, i, 0),
              inverse: e.noop,
              data: i,
              loc: {
                start: { line: 32, column: 21 },
                end: { line: 32, column: 56 },
              },
            }))
              ? a
              : "") +
            '\n                name="preferences"\n                type="checkbox"\n                id="js-cookie-preferences"\n                class="js-cookie-category"\n                data-cookie-manager-target="category"\n                data-action="change->cookie-manager#savePreference"\n              >\n              <label  class="check-toggle__label" for="js-cookie-preferences">\n                <span class="check-toggle__ball"></span>\n              </label>\n            </div>\n          </li>\n          <li>\n            <div>\n              <strong>Analytics cookies</strong>\n            </div>\n            <div class="check-toggle ">\n              <input ' +
            (null !=
            (a = c(s, "if").call(l, null != t ? c(t, "analysis") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, i, 0),
              inverse: e.noop,
              data: i,
              loc: {
                start: { line: 50, column: 21 },
                end: { line: 50, column: 53 },
              },
            }))
              ? a
              : "") +
            '\n                name="analysis"\n                type="checkbox"\n                id="js-cookie-analysis"\n                class="js-cookie-category"\n                data-cookie-manager-target="category"\n                data-action="change->cookie-manager#savePreference"\n              >\n              <label  class="check-toggle__label" for="js-cookie-analysis">\n                <span class="check-toggle__ball"></span>\n              </label>\n            </div>\n          </li>\n          <li>\n            <div>\n              <strong>Advertising cookies</strong>\n            </div>\n            <div class="check-toggle ">\n              <input ' +
            (null !=
            (a = c(s, "if").call(l, null != t ? c(t, "marketing") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, i, 0),
              inverse: e.noop,
              data: i,
              loc: {
                start: { line: 68, column: 21 },
                end: { line: 68, column: 54 },
              },
            }))
              ? a
              : "") +
            '\n                name="marketing"\n                type="checkbox"\n                id="js-cookie-marketing"\n                class="js-cookie-category"\n                data-cookie-manager-target="category"\n                data-action="change->cookie-manager#savePreference"\n              >\n              <label class="check-toggle__label" for="js-cookie-marketing">\n                <span class="check-toggle__ball"></span>\n              </label>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class="m-cookies__bottom" id="button-default">\n    <div>\n      <span\n        class="button button--medium--rounded--extra-pad"\n        data-action="click->cookie-manager#acceptAll"\n      >\n        Accept all\n      </span>\n    </div>\n    <div style="display: flex; gap: 12px; flex-wrap: wrap;">\n      <strong\n        class="link-underlined"\n        data-action="click->cookie-manager#rejectAll"\n      >\n        Reject all\n      </strong>\n      <strong\n        class="link-underlined"\n        data-tab="cookies-settings"\n        data-group="t-cookies"\n        data-action="click->cookie-manager#configure"\n      >\n        Manage Settings\n      </strong>\n    </div>\n  </div>\n\n  <div class="m-cookies__bottom is-hidden" id="button-manage">\n    <div>\n      <span\n        class="button button--medium--rounded--extra-pad"\n        data-action="click->cookie-manager#acceptAll"\n      >\n          Accept all\n      </span>\n    </div>\n    <div style="display: flex; gap: 12px; flex-wrap: wrap;">\n      <strong\n        class="link-underlined"\n        data-action="click->cookie-manager#rejectAll"\n      >\n        Reject all\n      </strong>\n      <strong\n        class="link-underlined"\n        data-id="cookies-config"\n        data-group="t-cookies"\n        data-action="click->cookie-manager#save"\n      >\n          Save Settings\n      </strong>\n    </div>\n  </div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    3197: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          return (
            '<p>This website uses cookies to ensure you get the best experience on our website. <a href="' +
            e.escapeExpression(
              ((a = o(5040)), a && (a.__esModule ? a.default : a)).call(
                null != t ? t : e.nullContext || {},
                "tv_cookies_policy",
                {
                  name: "helpers/path",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 1, column: 92 },
                    end: { line: 1, column: 132 },
                  },
                }
              )
            ) +
            '" class="link-underlined link-underlined--white">Cookies Policy</a></p>\n<span class="button button--small--white--rounded js-accept-cookies">GOT IT</span>'
          );
          var a;
        },
        useData: !0,
      });
    },
    8888: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a) {
          var r = null != t ? t : e.nullContext || {},
            l = e.escapeExpression,
            c =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '        <a href="' +
            l(
              n(o(5040)).call(r, "tv_academy_web_course_certificate", {
                name: "helpers/path",
                hash: {
                  slug: null != t ? c(t, "slug") : t,
                  username: null != t ? c(t, "username") : t,
                },
                data: a,
                loc: {
                  start: { line: 9, column: 17 },
                  end: { line: 9, column: 102 },
                },
              })
            ) +
            '">\n            <svg height="100" width="100" viewBox="0 0 32 32"><path d="M5.5 32h21c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-21c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2zM4 2C4 1.173 4.673.5 5.5.5h21c.827 0 1.5.673 1.5 1.5v28c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5V2z"/><path d="M8.507 24.792h14.986v.5H8.507zM8.507 21.25h14.986v.5H8.507zM7.869 11.272h1.982v2.192h1.012V8.453H9.851v1.971H7.869V8.453H6.857v5.011h1.012zM13.037 13.464h1.011V9.3h1.484v-.847H11.55V9.3h1.487zM17.111 9.519l.992 3.945h.973l.995-3.945v3.945h.941V8.453h-1.518l-.899 3.418-.909-3.418h-1.515v5.011h.94zM25.571 12.62h-2.515V8.494h-1.012v4.97h3.527z"/></svg>\n        </a>\n        <a href="' +
            l(
              n(o(5040)).call(r, "tv_academy_course_certificate", {
                name: "helpers/path",
                hash: { slug: null != t ? c(t, "slug") : t },
                data: a,
                loc: {
                  start: { line: 12, column: 17 },
                  end: { line: 12, column: 79 },
                },
              })
            ) +
            '">\n            <svg height="100" width="100" viewBox="0 0 32 32"><path d="M10.521 11.573h.66c.458 0 .808-.023 1.049-.071a1.48 1.48 0 00.525-.237c.172-.12.313-.284.425-.494s.167-.469.167-.775c0-.399-.097-.725-.291-.977s-.434-.415-.721-.49c-.187-.05-.588-.075-1.203-.075H9.509v5.011h1.012v-1.892zm0-2.273h.489c.365 0 .607.012.728.034.164.029.3.104.407.223a.647.647 0 01.161.451.66.66 0 01-.431.635c-.134.053-.401.079-.8.079h-.554V9.3zM16.974 13.358c.298-.096.536-.229.711-.4.232-.226.411-.521.536-.885.103-.299.154-.654.154-1.066 0-.47-.055-.864-.164-1.185s-.27-.591-.479-.812a1.676 1.676 0 00-.756-.462c-.219-.063-.537-.096-.954-.096h-1.849v5.011h1.904c.375 0 .674-.035.897-.105zm-1.787-.738V9.3h.455c.413 0 .689.016.831.048a.956.956 0 01.468.236c.124.115.219.277.288.484.068.208.103.505.103.893s-.034.693-.103.918-.157.386-.266.483a.93.93 0 01-.408.208 2.73 2.73 0 01-.612.049h-.756zM20.252 11.334h2.092v-.847h-2.092V9.3h2.424v-.847H19.24v5.01h1.012z"/><path d="M5.5 32h21c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-21c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2zM4 2C4 1.173 4.673.5 5.5.5h21c.827 0 1.5.673 1.5 1.5v28c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5V2z"/><path d="M8.507 24.791h14.986v.5H8.507zM8.507 21.25h14.986v.5H8.507z"/></svg>\n        </a>\n'
          );
        },
        3: function (e, t, s, i, a) {
          return (
            "        " +
            e.escapeExpression(
              n(o(8040)).call(
                null != t ? t : e.nullContext || {},
                "complete_course_to_download_certificate",
                {
                  name: "helpers/trans",
                  hash: {},
                  data: a,
                  loc: {
                    start: { line: 16, column: 8 },
                    end: { line: 16, column: 71 },
                  },
                }
              )
            ) +
            "\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = null != t ? t : e.nullContext || {},
            c =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-alert__top">\n    <h2 class="m-alert__title">\n        <strong>' +
            e.escapeExpression(
              n(o(8040)).call(l, "certificate_of_completion", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 3, column: 16 },
                  end: { line: 3, column: 65 },
                },
              })
            ) +
            '</strong>\n    </h2>\n</div>\n<div class="m-alert__content">\n    <p>\n' +
            (null !=
            (r = c(s, "if").call(
              l,
              null != t ? c(t, "certificateAvailableForUser") : t,
              {
                name: "if",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.program(3, a, 0),
                data: a,
                loc: {
                  start: { line: 8, column: 4 },
                  end: { line: 17, column: 11 },
                },
              }
            ))
              ? r
              : "") +
            "    </p>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    8837: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          var i,
            a =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-content-collections size-small">\n    <div class="tab-form" id="tab-delete-confirm" style="display: block;">\n        <div class="content style2">\n            <div class="txt">\n                <p>' +
            e.escapeExpression(
              "function" ==
                typeof (i =
                  null != (i = a(o, "msg") || (null != t ? a(t, "msg") : t))
                    ? i
                    : e.hooks.helperMissing)
                ? i.call(null != t ? t : e.nullContext || {}, {
                    name: "msg",
                    hash: {},
                    data: n,
                    loc: {
                      start: { line: 5, column: 19 },
                      end: { line: 5, column: 28 },
                    },
                  })
                : i
            ) +
            "</p>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    2283: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          return (
            '<div class="m-login__container">\n    <div class="m-login__left">\n        <div class="m-login__inner">\n            <div class="m-login__header">\n                <h3 class="m-login__title">Welcome!</h3>\n            </div>\n            <div class="m-login__content">\n                <div class="m-login__logo">\n                    <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" /></svg>\n                    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M81.09 162.18C125.875 162.18 162.18 125.875 162.18 81.09C162.18 36.3052 125.875 0 81.09 0C36.3052 0 0 36.3052 0 81.09C0 125.875 36.3052 162.18 81.09 162.18Z" fill="#502BD8"/>\n                        <path d="M81.0906 147.041C117.514 147.041 147.041 117.514 147.041 81.0906C147.041 44.6674 117.514 15.1406 81.0906 15.1406C44.6674 15.1406 15.1406 44.6674 15.1406 81.0906C15.1406 117.514 44.6674 147.041 81.0906 147.041Z" stroke="#AAEEC4" stroke-width="8" stroke-miterlimit="1.2"/>\n                        <path d="M103.812 78.3292C108.898 78.3292 113.022 74.1028 113.022 68.8892C113.022 63.6757 108.898 59.4492 103.812 59.4492C98.725 59.4492 94.6016 63.6757 94.6016 68.8892C94.6016 74.1028 98.725 78.3292 103.812 78.3292Z" fill="#AAEEC4"/>\n                        <path d="M58.3584 78.3292C63.445 78.3292 67.5684 74.1028 67.5684 68.8892C67.5684 63.6757 63.445 59.4492 58.3584 59.4492C53.2719 59.4492 49.1484 63.6757 49.1484 68.8892C49.1484 74.1028 53.2719 78.3292 58.3584 78.3292Z" fill="#AAEEC4"/>\n                        <path d="M48.8281 94.8906C52.3781 109.411 65.4681 120.181 81.0781 120.181C96.6881 120.181 109.778 109.411 113.328 94.8906" stroke="#AAEEC4" stroke-width="8" stroke-miterlimit="1.2"/>\n                    </svg>\n                </div>\n            </div>\n            <div class="m-login__footer"></div>\n        </div>\n    </div>\n    <div class="m-login__right">\n        <div class="m-login__inner">\n            <div class="m-login__content">\n                <h3 class="m-login__title"><strong>Forgot your password</strong></h3>\n                <p><strong>We have sent you a verification e-mail.</strong></p>\n                <p>Please verify your account via the link in the e-mail and reset your password.</p>\n                <p>If you don\'t receive an email from us, please check your spam folder or <strong><a href="' +
            e.escapeExpression(
              ((a = o(5040)), a && (a.__esModule ? a.default : a)).call(
                null != t ? t : e.nullContext || {},
                "tv_contact_us",
                {
                  name: "helpers/path",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 28, column: 108 },
                    end: { line: 28, column: 144 },
                  },
                }
              )
            ) +
            '" class="link-underlined green">contact customer support</a></strong>.</p>\n                <p><strong>Awwwards team</strong></p>\n            </div>\n        </div>\n    </div>\n</div>\n'
          );
          var a;
        },
        useData: !0,
      });
    },
    5352: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n) {
          return '<div class="box-content-default size-small">\n    <h3 class="heading-x-small">Credits</h3>\n    <ul class="list-credits">\n        <li>\n            Design and code by<br><strong><a href="https://www.awwwards.com" class="link-underlined white">Awwwards</a></strong>\n        </li>\n        <li>\n            Image Titles Scroll Animation with<br> <strong><a href="https://locomotivemtl.github.io/locomotive-scroll/" target="_blank" class="link-underlined white">Locomotive Scroll</a></strong>\n        </li>\n        <li>\n            Loading Animation<br><strong><a href="https://codepen.io/mikeambrosi" target="_blank" class="link-underlined white">Mike Ambrosi</a></strong>\n        </li>\n        <li>\n            Special Thanks<br><strong><a href="https://tympanus.net/codrops/2020/10/14/scroll-animations-for-image-grids/" target="_blank" class="link-underlined white">Codrops</a></strong>\n        </li>\n    </ul>\n</div>';
        },
        useData: !0,
      });
    },
    4: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        1: function (e, t, o, s, n) {
          var i = e.lambda,
            a = e.escapeExpression,
            r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "data-link=\"https://twitter.com/intent/tweet?text=I've just voted for " +
            a(i(null != t ? r(t, "share_text") : t, t)) +
            " for Site of the Month to win a year in the @Awwwards Directory&amp;url=https://www.awwwards.com" +
            a(i(null != t ? r(t, "share_url") : t, t)) +
            '&amp;hashtags=AwwwardsSOTM"'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          var a,
            r,
            l = e.lambda,
            c = e.escapeExpression,
            d = null != t ? t : e.nullContext || {},
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-award-vote">\n    <div class="m-award-vote__content">\n        <div class="m-award-vote__card">\n            <h3><p>' +
            c(l(null != t ? u(t, "title") : t, t)) +
            '</p></h3>\n            <img src="' +
            c(l(null != t ? u(t, "image") : t, t)) +
            '" class="rounded-normal" />\n        </div>\n        <div class="m-award-vote__desc text-medium">\n            <p><strong>' +
            c(l(null != t ? u(t, "category_name") : t, t)) +
            " Honors</strong></p>\n            <p>" +
            c(l(null != t ? u(t, "description") : t, t)) +
            '</p>\n        </div>\n    </div>\n    <div class="m-award-vote__footer">\n        <span class="button button--large--outline--rounded js-modal-close">' +
            c(
              ((r = o(8040)), r && (r.__esModule ? r.default : r)).call(
                d,
                "app.cancel",
                {
                  name: "helpers/trans",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 13, column: 76 },
                    end: { line: 13, column: 110 },
                  },
                }
              )
            ) +
            '</span>\n        <span class="button button--large--rounded js-yes" ' +
            (null !=
            (a = u(s, "if").call(d, null != t ? u(t, "share_button") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, i, 0),
              inverse: e.noop,
              data: i,
              loc: {
                start: { line: 14, column: 59 },
                end: { line: 14, column: 310 },
              },
            }))
              ? a
              : "") +
            ">\n            " +
            c(l(null != t ? u(t, "text_button") : t, t)) +
            "\n        </span>\n    </div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    1895: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a, r) {
          var l,
            c = null != t ? t : e.nullContext || {},
            d = e.escapeExpression,
            u = e.lambda,
            h =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '                        <a href="' +
            d(
              n(o(5040)).call(c, "tv_honors_category_nominees", {
                name: "helpers/path",
                hash: { slug: null != (l = r[0][0]) ? h(l, "slug") : l },
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 42, column: 33 },
                  end: { line: 42, column: 102 },
                },
              })
            ) +
            '">\n\n                            <li class="' +
            (null !=
            (l = h(s, "if").call(
              c,
              null != (l = r[0][0]) ? h(l, "is_voted") : l,
              {
                name: "if",
                hash: {},
                fn: e.program(2, a, 0, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 44, column: 39 },
                  end: { line: 44, column: 83 },
                },
              }
            ))
              ? l
              : "") +
            '">\n                                <div class="card-awwward-mini card-awwward-mini--small" style="--awwward-color: ' +
            d(u(null != (l = r[0][0]) ? h(l, "color") : l, t)) +
            '">\n                                    <svg class="card-awwward-mini__bg" width="84" height="96" viewBox="0 0 84 96" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path d="M17.027 94.651C16.5705 93.8604 15.4293 93.8604 14.9728 94.651L14.194 96L7.42772 96L6.6489 94.651C6.19242 93.8604 5.05121 93.8604 4.59472 94.651L3.8159 96L0.000236511 96L0.000244904 2.85881e-07L84.0003 7.62939e-06L84.0002 96L80.0716 96L79.2928 94.651C78.8363 93.8604 77.6951 93.8604 77.2386 94.651L76.4598 96L69.6936 96L68.9147 94.651C68.4583 93.8604 67.317 93.8604 66.8606 94.651L66.0817 96L59.3155 96L58.5366 94.651C58.0802 93.8604 56.9389 93.8604 56.4825 94.651L55.7036 96L48.9374 96L48.1586 94.651C47.7021 93.8604 46.5609 93.8604 46.1044 94.651L45.3256 96L38.5593 96L37.7805 94.651C37.324 93.8604 36.1828 93.8604 35.7263 94.651L34.9475 96L28.1839 96L27.4051 94.651C26.9486 93.8604 25.8074 93.8604 25.3509 94.651L24.5721 96L17.8058 96L17.027 94.651Z" />\n                                    </svg>\n                                    <div class="card-awwward-mini__info">\n                                        <svg width="30" height="16" viewBox="0 0 30 16" class="card-awwward-mini__logo"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" /></svg>\n                                        <div class="card-awwward-mini__title">' +
            d(u(null != (l = r[0][0]) ? h(l, "name") : l, t)) +
            "</div>\n                                    </div>\n                                </div>\n                            </li>\n                        </a>\n"
          );
        },
        2: function (e, t, o, s, n) {
          return " is-voted ";
        },
        4: function (e, t, s, i, a) {
          var r,
            l = e.escapeExpression,
            c =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '                <p><a href="' +
            l(
              n(o(5040)).call(
                null != t ? t : e.nullContext || {},
                "tv_honors_category_nominees",
                {
                  name: "helpers/path",
                  hash: {
                    slug:
                      null != (r = null != t ? c(t, "firstCategoryNoVoted") : t)
                        ? c(r, "slug")
                        : r,
                  },
                  data: a,
                  loc: {
                    start: { line: 67, column: 28 },
                    end: { line: 67, column: 109 },
                  },
                }
              )
            ) +
            '" class="button button--large--rounded">Next vote: ' +
            l(
              e.lambda(
                null != (r = null != t ? c(t, "firstCategoryNoVoted") : t)
                  ? c(r, "name")
                  : r,
                t
              )
            ) +
            "</a></p>\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a, r) {
          var l,
            c = e.lambda,
            d = e.escapeExpression,
            u = null != t ? t : e.nullContext || {},
            h =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-award-voted">\n    <div class="m-award-voted__header">\n        <p>Thank you for your participation!</p>\n        <h3 class="heading-5">Love your vote!</h3>\n    </div>\n    <div class="m-award-voted__desc">\n        <p class="text-medium">The power relies on the Awwwards Community. Let\'s celebrate creativity together and elevate the best to the Awwwards Honors!</p>\n    </div>\n    <div class="m-award-voted__info">\n        <div class="m-award-voted__box">\n            <div>\n                <strong>Share your vote with your friends.</strong>\n            </div>\n            <div>\n                <ul class="list-tags" data-controller="share">\n                    <li data-share-target="box">\n                        <a data-action="click->share#link" class="button button--circle--outline" href="https://twitter.com/intent/tweet?text=' +
            d(c(null != t ? h(t, "share_title") : t, t)) +
            " " +
            d(c(null != t ? h(t, "share_url") : t, t)) +
            '&amp;hashtags=Awwwards">\n                            ' +
            (null !=
            (l = n(o(561)).call(u, "twitter", 20, {
              name: "helpers/icon",
              hash: {},
              data: a,
              blockParams: r,
              loc: {
                start: { line: 18, column: 28 },
                end: { line: 18, column: 63 },
              },
            }))
              ? l
              : "") +
            '\n                        </a>\n                    </li>\n                    <li data-share-target="box">\n                        <a data-action="click->share#link" class="button button--circle--outline" href="https://www.facebook.com/sharer.php?u=' +
            d(c(null != t ? h(t, "share_url") : t, t)) +
            '">\n                            ' +
            (null !=
            (l = n(o(561)).call(u, "facebook", 20, {
              name: "helpers/icon",
              hash: {},
              data: a,
              blockParams: r,
              loc: {
                start: { line: 23, column: 28 },
                end: { line: 23, column: 64 },
              },
            }))
              ? l
              : "") +
            '\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class="m-award-voted__box">\n            <div class="hidden-sm"></div>\n            <div>\n                ' +
            (null !=
            (l = n(o(561)).call(u, "add", 24, {
              name: "helpers/icon",
              hash: {},
              data: a,
              blockParams: r,
              loc: {
                start: { line: 32, column: 16 },
                end: { line: 32, column: 47 },
              },
            }))
              ? l
              : "") +
            '\n            </div>\n        </div>\n        <div class="m-award-voted__box">\n            <div>\n                <strong>Check out the other categories.</strong>\n            </div>\n            <div>\n                <ul class="m-award-voted__awwwards">\n' +
            (null !=
            (l = h(s, "each").call(u, null != t ? h(t, "categories") : t, {
              name: "each",
              hash: {},
              fn: e.program(1, a, 1, r),
              inverse: e.noop,
              data: a,
              blockParams: r,
              loc: {
                start: { line: 41, column: 20 },
                end: { line: 56, column: 29 },
              },
            }))
              ? l
              : "") +
            '                </ul>\n            </div>\n        </div>\n\n    </div>\n    <div class="m-award-voted__footer">\n\x3c!--        <p class="text-center"><small>Estimated time all votes: <strong>less 10 min</strong></small></p>--\x3e\n        <div class="m-award-voted__bts">\n            <span class="button button--large--rounded--outline--gray js-modal-close">Close</span>\n' +
            (null !=
            (l = h(s, "if").call(
              u,
              null != t ? h(t, "firstCategoryNoVoted") : t,
              {
                name: "if",
                hash: {},
                fn: e.program(4, a, 0, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 66, column: 12 },
                  end: { line: 68, column: 20 },
                },
              }
            ))
              ? l
              : "") +
            "        </div>\n    </div>\n\n</div>\n"
          );
        },
        useData: !0,
        useBlockParams: !0,
      });
    },
    1695: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, o, s, n) {
          var i = e.lambda,
            a = e.escapeExpression,
            r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "data-link=\"https://twitter.com/intent/tweet?text=I've just voted for " +
            a(i(null != t ? r(t, "share_text") : t, t)) +
            " for Site of the Month to win a year in the @Awwwards Directory&amp;url=https://www.awwwards.com" +
            a(i(null != t ? r(t, "share_url") : t, t)) +
            '&amp;hashtags=AwwwardsSOTM"'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = null != t ? t : e.nullContext || {},
            c = e.escapeExpression,
            d = e.lambda,
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="box-inside">\n\n    <p>\n        <h2>\n            <strong>' +
            c(
              n(o(8040)).call(l, "app.confirm_your_vote", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 5, column: 20 },
                  end: { line: 5, column: 65 },
                },
              })
            ) +
            '.</strong><br>\n        </h2>\n    </p>\n\n    <p>\n        <a href="' +
            c(d(null != t ? u(t, "internal_url") : t, t)) +
            '">\n            <img src="' +
            c(d(null != t ? u(t, "image") : t, t)) +
            '" class="img-block" />\n        </a>\n    </p>\n\n    <p>' +
            (null != (r = d(null != t ? u(t, "by") : t, t)) ? r : "") +
            '</p>\n\n    <div class="c-collect__footer">\n        <div class="c-collect__bts">\n            <span class="button button--large--outline--rounded js-modal-close">' +
            c(
              n(o(8040)).call(l, "app.cancel", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 19, column: 80 },
                  end: { line: 19, column: 114 },
                },
              })
            ) +
            '</span>\n            <span class="button button--large--rounded--full js-vote-tweet js-yes popup text-uppercase" ' +
            (null !=
            (r = u(s, "if").call(l, null != t ? u(t, "share_button") : t, {
              name: "if",
              hash: {},
              fn: e.program(1, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 20, column: 104 },
                end: { line: 20, column: 355 },
              },
            }))
              ? r
              : "") +
            ">\n                " +
            c(d(null != t ? u(t, "text_button") : t, t)) +
            "\n            </span>\n        </div>\n    </div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    791: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a) {
          return (
            '    <div class="text-center" style="margin-top: 2rem">\n      <div class="button button--rounded js-load-more">\n        <span class="button__content">' +
            e.escapeExpression(
              n(o(8040)).call(
                null != t ? t : e.nullContext || {},
                "app.load_more",
                {
                  name: "helpers/trans",
                  hash: {},
                  data: a,
                  loc: {
                    start: { line: 16, column: 38 },
                    end: { line: 16, column: 75 },
                  },
                }
              )
            ) +
            "</span>\n      </div>\n    </div>\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="m-alert__top">\n  <h2 class="m-alert__title">\n    <strong>Followers</strong>\n  </h2>\n</div>\n<div class="m-alert__content">\n  <div class="box-table">\n    <table class="tb-dotteds js-user-list">\n' +
            (null !=
            (r = e.invokePartial(o(6393), t, {
              name: "user_list",
              hash: { users: null != t ? l(t, "users") : t },
              data: a,
              indent: "      ",
              helpers: s,
              partials: i,
              decorators: e.decorators,
            }))
              ? r
              : "") +
            "    </table>\n  </div>\n\n" +
            (null !=
            (r = n(o(9105)).call(
              null != t ? t : e.nullContext || {},
              null != t ? l(t, "total") : t,
              ">",
              6,
              {
                name: "helpers/compare",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: {
                  start: { line: 13, column: 2 },
                  end: { line: 19, column: 25 },
                },
              }
            ))
              ? r
              : "") +
            "</div>\n"
          );
        },
        usePartial: !0,
        useData: !0,
      });
    },
    3032: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = null != t ? t : e.nullContext || {},
            c = e.escapeExpression,
            d = e.lambda,
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="content-tabs__item active js-tab" id="tab-login" data-login-register-target="loginTab">\n    <div class="m-login__container">\n        <div class="m-login__left">\n            <div class="m-login__inner">\n                <div class="m-login__header">\n                    <h3 class="m-login__title">Welcome!</h3>\n                </div>\n                <div class="m-login__content">\n                    <div class="m-login__logo">\n                        <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" /></svg>\n                        <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M81.09 162.18C125.875 162.18 162.18 125.875 162.18 81.09C162.18 36.3052 125.875 0 81.09 0C36.3053 0 0 36.3052 0 81.09C0 125.875 36.3053 162.18 81.09 162.18Z" fill="#AAEEC4"/>\n                            <path d="M81.0906 147.041C117.514 147.041 147.041 117.514 147.041 81.0906C147.041 44.6674 117.514 15.1406 81.0906 15.1406C44.6675 15.1406 15.1406 44.6674 15.1406 81.0906C15.1406 117.514 44.6675 147.041 81.0906 147.041Z" stroke="#502BD8" stroke-width="8" stroke-miterlimit="1.2"/>\n                            <path d="M103.819 78.3292C108.906 78.3292 113.029 74.1028 113.029 68.8892C113.029 63.6757 108.906 59.4492 103.819 59.4492C98.7329 59.4492 94.6094 63.6757 94.6094 68.8892C94.6094 74.1028 98.7329 78.3292 103.819 78.3292Z" fill="#502BD8"/>\n                            <path d="M58.3662 78.3292C63.4528 78.3292 67.5762 74.1028 67.5762 68.8892C67.5762 63.6757 63.4528 59.4492 58.3662 59.4492C53.2797 59.4492 49.1562 63.6757 49.1562 68.8892C49.1562 74.1028 53.2797 78.3292 58.3662 78.3292Z" fill="#502BD8"/>\n                            <path d="M48.8438 94.8906C52.3937 109.411 65.4838 120.181 81.0938 120.181C96.7037 120.181 109.794 109.411 113.344 94.8906" stroke="#502BD8" stroke-width="8" stroke-miterlimit="1.2"/>\n                        </svg>\n                    </div>\n                </div>\n                <div class="m-login__footer">' +
            c(
              n(o(8040)).call(l, "login_or_create.not_a_member_yet", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 20, column: 45 },
                  end: { line: 20, column: 101 },
                },
              })
            ) +
            ' <strong data-action="click->login-register#showRegister" class="link-underlined js-register">' +
            c(
              n(o(8040)).call(l, "login_or_create.register_now", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 20, column: 195 },
                  end: { line: 20, column: 247 },
                },
              })
            ) +
            '</strong></div>\n            </div>\n        </div>\n        <div class="m-login__right">\n            <div class="m-login__inner">\n                <div class="m-login__content">\n                    <h3 class="m-login__title"><strong>Log in</strong></h3>\n                    <div class="form">\n                        <form action="' +
            c(
              n(o(5040)).call(l, "tv_login", {
                name: "helpers/path",
                hash: {},
                data: a,
                loc: {
                  start: { line: 28, column: 38 },
                  end: { line: 28, column: 69 },
                },
              })
            ) +
            '" method="post" novalidate>\n                            <div class="form__row">\n                                <div class="form-field">\n                                    <label class="form-field__label">' +
            c(
              n(o(8040)).call(l, "login_or_create.email_or_username", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 31, column: 69 },
                  end: { line: 31, column: 126 },
                },
              })
            ) +
            '</label>\n                                    <input name="_username" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "login_or_create.email_or_username", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 32, column: 92 },
                  end: { line: 32, column: 149 },
                },
              })
            ) +
            '" type="text">\n                                </div>\n                            </div>\n                            <div class="form__row">\n                                <div class="form-field">\n                                    <label class="form-field__label">' +
            c(
              n(o(8040)).call(l, "login_or_create.password", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 37, column: 69 },
                  end: { line: 37, column: 117 },
                },
              })
            ) +
            '</label>\n                                    <input name="_password" class="text-input" placeholder="' +
            c(
              n(o(8040)).call(l, "login_or_create.password", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 38, column: 92 },
                  end: { line: 38, column: 140 },
                },
              })
            ) +
            '" type="password">\n                                </div>\n                            </div>\n                            <div class="form__row">\n                                <div class="form-field">\n                                    <div class="input-check">\n                                        <input id="remember_me" name="_remember_me" type="checkbox">\n                                        <label for="remember_me">' +
            c(
              n(o(8040)).call(l, "login_or_create.keep_me_logged_in", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 45, column: 65 },
                  end: { line: 45, column: 122 },
                },
              })
            ) +
            '</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="form__row">\n                                <input type="hidden" name="_csrf_token" value="' +
            c(d(null != t ? u(t, "csrf_value") : t, t)) +
            '" />\n                                <input type="hidden" name="_target_path" value="' +
            c(d(null != t ? u(t, "from_url") : t, t)) +
            '" />\n                                <button type="submit" class="button button--large--rounded--full" data-controller="button-loader" ><span class="button__content">' +
            c(
              n(o(8040)).call(l, "login_or_create.login_now", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 52, column: 161 },
                  end: { line: 52, column: 210 },
                },
              })
            ) +
            '</span></button>\n                            </div>\n                            <div class="m-login__forgot">\n                                <strong data-action="click->login-register#showForgotPassword" class="link-underlined js-tab js-forgot-password">' +
            c(
              n(o(8040)).call(l, "login_or_create.forgot_your_password", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 55, column: 145 },
                  end: { line: 55, column: 205 },
                },
              })
            ) +
            '</strong>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class="m-login_bottom">\n                    <p class="m-login__or">' +
            c(
              n(o(8040)).call(l, "login_or_create.or_sign_in_with", {
                name: "helpers/trans",
                hash: {},
                data: a,
                loc: {
                  start: { line: 61, column: 43 },
                  end: { line: 61, column: 98 },
                },
              })
            ) +
            '</p>\n                    <div class="m-login__social">\n                        <a href="/login/google?_destination=' +
            c(d(null != t ? u(t, "from_url") : t, t)) +
            '" class="button button--outline--gray--rounded">\n                            ' +
            (null !=
            (r = n(o(561)).call(l, "google", 15, "ico--left", {
              name: "helpers/icon",
              hash: {},
              data: a,
              loc: {
                start: { line: 64, column: 28 },
                end: { line: 64, column: 74 },
              },
            }))
              ? r
              : "") +
            '\n                            Google\n                        </a>\n                        <a href="/login/facebook?_destination=' +
            c(d(null != t ? u(t, "from_url") : t, t)) +
            '" class="button button--outline--gray--rounded">\n                            ' +
            (null !=
            (r = n(o(561)).call(l, "facebook", 16, "ico--left", {
              name: "helpers/icon",
              hash: {},
              data: a,
              loc: {
                start: { line: 68, column: 28 },
                end: { line: 68, column: 76 },
              },
            }))
              ? r
              : "") +
            '\n                            Facebook\n                        </a>\n                        <a href="/login/twitter?_destination=' +
            c(d(null != t ? u(t, "from_url") : t, t)) +
            '" class="button button--outline--gray--rounded">\n                            ' +
            (null !=
            (r = n(o(561)).call(l, "twitter", 18, "ico--left", {
              name: "helpers/icon",
              hash: {},
              data: a,
              loc: {
                start: { line: 72, column: 28 },
                end: { line: 72, column: 75 },
              },
            }))
              ? r
              : "") +
            "\n                            Twitter\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    2191: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        1: function (e, t, o, s, n) {
          var i =
            e.lookupProperty ||
            function (e, t) {
              if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
            };
          return (
            '    data-login-register-redirect-url-value="' +
            e.escapeExpression(
              e.lambda(null != t ? i(t, "redirect_url") : t, t)
            ) +
            '"\n'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          var a,
            r,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div\n  class="content-tabs"\n  style="position:relative"\n  data-controller="login-register"\n  data-open="' +
            e.escapeExpression(e.lambda(null != t ? l(t, "tab_open") : t, t)) +
            '"\n' +
            (null !=
            (a = ((r = o(9105)), r && (r.__esModule ? r.default : r)).call(
              null != t ? t : e.nullContext || {},
              null != t ? l(t, "redirect_url") : t,
              "!=",
              "",
              {
                name: "helpers/compare",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i,
                loc: {
                  start: { line: 6, column: 2 },
                  end: { line: 8, column: 25 },
                },
              }
            ))
              ? a
              : "") +
            ">\n" +
            (null !=
            (a = e.invokePartial(o(9602), t, {
              name: "_loader",
              hash: {
                attributes: 'data-login-register-target="loading"',
                show: !1,
              },
              data: i,
              indent: "  ",
              helpers: s,
              partials: n,
              decorators: e.decorators,
            }))
              ? a
              : "") +
            "</div>\n"
          );
        },
        usePartial: !0,
        useData: !0,
      });
    },
    8800: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a, r) {
          var l = e.lambda,
            c = e.escapeExpression;
          return (
            '            <div class="grid__col-4">\n                <div class="input-check">\n                    <input type="checkbox" value="' +
            c(l(r[0][1], t)) +
            '" id="think_' +
            c(l(r[0][1], t)) +
            '">\n                    <label for="think_' +
            c(l(r[0][1], t)) +
            '">' +
            c(
              n(o(8040)).call(null != t ? t : e.nullContext || {}, r[0][0], {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 8, column: 47 },
                  end: { line: 8, column: 73 },
                },
              })
            ) +
            "</label>\n                </div>\n            </div>\n"
          );
        },
        3: function (e, t, s, i, a, r) {
          var l = e.lambda,
            c = e.escapeExpression;
          return (
            '            <div class="grid__col-4">\n                <div class="input-check">\n                    <input type="checkbox" value="' +
            c(l(r[0][1], t)) +
            '" id="like_' +
            c(l(r[0][1], t)) +
            '">\n                    <label for="like_' +
            c(l(r[0][1], t)) +
            '">' +
            c(
              n(o(8040)).call(null != t ? t : e.nullContext || {}, r[0][0], {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 20, column: 46 },
                  end: { line: 20, column: 72 },
                },
              })
            ) +
            "</label>\n                </div>\n            </div>\n"
          );
        },
        5: function (e, t, s, i, a, r) {
          var l = e.lambda,
            c = e.escapeExpression;
          return (
            '            <div class="grid__col-4">\n                <div class="input-check">\n                    <input type="checkbox" value="' +
            c(l(r[0][1], t)) +
            '" id="details_' +
            c(l(r[0][1], t)) +
            '">\n                    <label for="details_' +
            c(l(r[0][1], t)) +
            '">' +
            c(
              n(o(8040)).call(null != t ? t : e.nullContext || {}, r[0][0], {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 31, column: 49 },
                  end: { line: 31, column: 75 },
                },
              })
            ) +
            "</label>\n                </div>\n            </div>\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a, r) {
          var l,
            c = null != t ? t : e.nullContext || {},
            d = e.escapeExpression,
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="form" style="margin-bottom: 40px;">\n    <p><strong>' +
            d(
              n(o(8040)).call(c, "vote_opinion.what_do_you_think", {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 2, column: 15 },
                  end: { line: 2, column: 69 },
                },
              })
            ) +
            '</strong></p>\n    <div class="grid js-think" style="--grid-gutter: 0">\n' +
            (null !=
            (l = u(s, "each").call(
              c,
              null != (l = null != t ? u(t, "opinions") : t)
                ? u(l, "think")
                : l,
              {
                name: "each",
                hash: {},
                fn: e.program(1, a, 2, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 4, column: 8 },
                  end: { line: 11, column: 17 },
                },
              }
            ))
              ? l
              : "") +
            '    </div>\n    <hr class="form__hr form__hr--small">\n    <p><strong>' +
            d(
              n(o(8040)).call(c, "vote_opinion.what_do_you_like", {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 14, column: 15 },
                  end: { line: 14, column: 68 },
                },
              })
            ) +
            '</strong></p>\n    <div class="grid js-like" style="--grid-gutter: 0">\n' +
            (null !=
            (l = u(s, "each").call(
              c,
              null != (l = null != t ? u(t, "opinions") : t) ? u(l, "like") : l,
              {
                name: "each",
                hash: {},
                fn: e.program(3, a, 2, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 16, column: 8 },
                  end: { line: 23, column: 17 },
                },
              }
            ))
              ? l
              : "") +
            '    </div>\n    <hr class="form__hr form__hr--small">\n    <div class="grid js-details" style="--grid-gutter: 0">\n' +
            (null !=
            (l = u(s, "each").call(
              c,
              null != (l = null != t ? u(t, "opinions") : t)
                ? u(l, "details")
                : l,
              {
                name: "each",
                hash: {},
                fn: e.program(5, a, 2, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 27, column: 8 },
                  end: { line: 34, column: 17 },
                },
              }
            ))
              ? l
              : "") +
            "    </div>\n</div>\n"
          );
        },
        useData: !0,
        useBlockParams: !0,
      });
    },
    7267: (e, t, o) => {
      var s = o(202);
      e.exports = (s.default || s).template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, n, i) {
          return (
            '<div class="m-login__container">\n    <div class="m-login__left">\n        <div class="m-login__inner">\n            <div class="m-login__header">\n                <h3 class="m-login__title">Welcome!</h3>\n            </div>\n            <div class="m-login__content">\n                <div class="m-login__logo">\n                    <svg width="30" height="16" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" /></svg>\n                    <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M81.09 162.18C125.875 162.18 162.18 125.875 162.18 81.09C162.18 36.3052 125.875 0 81.09 0C36.3052 0 0 36.3052 0 81.09C0 125.875 36.3052 162.18 81.09 162.18Z" fill="#502BD8"/>\n                        <path d="M81.0906 147.041C117.514 147.041 147.041 117.514 147.041 81.0906C147.041 44.6674 117.514 15.1406 81.0906 15.1406C44.6674 15.1406 15.1406 44.6674 15.1406 81.0906C15.1406 117.514 44.6674 147.041 81.0906 147.041Z" stroke="#AAEEC4" stroke-width="8" stroke-miterlimit="1.2"/>\n                        <path d="M103.812 78.3292C108.898 78.3292 113.022 74.1028 113.022 68.8892C113.022 63.6757 108.898 59.4492 103.812 59.4492C98.725 59.4492 94.6016 63.6757 94.6016 68.8892C94.6016 74.1028 98.725 78.3292 103.812 78.3292Z" fill="#AAEEC4"/>\n                        <path d="M58.3584 78.3292C63.445 78.3292 67.5684 74.1028 67.5684 68.8892C67.5684 63.6757 63.445 59.4492 58.3584 59.4492C53.2719 59.4492 49.1484 63.6757 49.1484 68.8892C49.1484 74.1028 53.2719 78.3292 58.3584 78.3292Z" fill="#AAEEC4"/>\n                        <path d="M48.8281 94.8906C52.3781 109.411 65.4681 120.181 81.0781 120.181C96.6881 120.181 109.778 109.411 113.328 94.8906" stroke="#AAEEC4" stroke-width="8" stroke-miterlimit="1.2"/>\n                    </svg>\n                </div>\n            </div>\n            <div class="m-login__footer"></div>\n        </div>\n    </div>\n    <div class="m-login__right">\n        <div class="m-login__inner">\n            <div class="m-login__content">\n                <h3 class="m-login__title"><strong>Congratulations</strong></h3>\n                <p><strong>We have sent you a verification e-mail.</strong></p>\n                <p>Please verify your account via the link in the e-mail and complete registration.</p>\n                <p>If you don\'t receive an email from us, please check your spam folder or <strong><a href="' +
            e.escapeExpression(
              ((a = o(5040)), a && (a.__esModule ? a.default : a)).call(
                null != t ? t : e.nullContext || {},
                "tv_contact_us",
                {
                  name: "helpers/path",
                  hash: {},
                  data: i,
                  loc: {
                    start: { line: 28, column: 108 },
                    end: { line: 28, column: 144 },
                  },
                }
              )
            ) +
            '" class="link-underlined green">contact customer support</a></strong>.</p>\n                <p><strong>Awwwards team</strong></p>\n            </div>\n        </div>\n    </div>\n</div>\n'
          );
          var a;
        },
        useData: !0,
      });
    },
    2211: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a) {
          var r,
            l = e.lambda,
            c = e.escapeExpression,
            d =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "        <li>\n            <div>\n" +
            (null !=
            (r = n(o(9105)).call(
              null != t ? t : e.nullContext || {},
              null != (r = null != t ? d(t, "discount") : t) ? d(r, "type") : r,
              "!=",
              "stock",
              {
                name: "helpers/compare",
                hash: {},
                fn: e.program(2, a, 0),
                inverse: e.noop,
                data: a,
                loc: {
                  start: { line: 22, column: 14 },
                  end: { line: 24, column: 37 },
                },
              }
            ))
              ? r
              : "") +
            '              <strong id="js-discount-code-applied">' +
            c(
              l(
                null != (r = null != t ? d(t, "discount") : t)
                  ? d(r, "name")
                  : r,
                t
              )
            ) +
            '</strong>\n            </div>\n            <div><span id="js-discount-money-applied">' +
            c(
              l(
                null != (r = null != t ? d(t, "discount") : t)
                  ? d(r, "price")
                  : r,
                t
              )
            ) +
            "</span></div>\n        </li>\n"
          );
        },
        2: function (e, t, o, s, n) {
          return "                DISCOUNT\n";
        },
        4: function (e, t, o, s, n) {
          var i,
            a = e.lambda,
            r = e.escapeExpression,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '        <li class="js-taxes-line">\n            <span> ' +
            r(
              a(
                null != (i = null != t ? l(t, "vat_shipping_amount") : t)
                  ? l(i, "name")
                  : i,
                t
              )
            ) +
            "</span>\n            <i>" +
            r(
              a(
                null != (i = null != t ? l(t, "vat_shipping_amount") : t)
                  ? l(i, "price")
                  : i,
                t
              )
            ) +
            "</i>\n        </li>\n"
          );
        },
        6: function (e, t, o, s, n) {
          var i,
            a = e.lambda,
            r = e.escapeExpression,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '        <li class="js-taxes-line">\n            <span> ' +
            r(
              a(null != (i = null != t ? l(t, "vat") : t) ? l(i, "name") : i, t)
            ) +
            "</span>\n            <i>" +
            r(
              a(
                null != (i = null != t ? l(t, "vat") : t) ? l(i, "price") : i,
                t
              )
            ) +
            "</i>\n        </li>\n"
          );
        },
        8: function (e, t, o, s, n) {
          return " is-open";
        },
        10: function (e, t, o, s, n) {
          return " is-apply";
        },
        12: function (e, t, o, s, n) {
          return " is-hidden";
        },
        14: function (e, t, s, i, a) {
          var r,
            l =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '           <div class="box-coupon__code">\n                <div>Code: <strong>' +
            e.escapeExpression(
              e.lambda(
                null != (r = null != t ? l(t, "discount") : t)
                  ? l(r, "name")
                  : r,
                t
              )
            ) +
            '</strong></div>\n               <button\n                 type="submit"\n                 class="box-coupon__remove button js-remove-coupon"\n                 data-action="click->purchase--coupon#clear"\n               >\n                   ' +
            (null !=
            (r = n(o(561)).call(
              null != t ? t : e.nullContext || {},
              "remove",
              15,
              {
                name: "helpers/icon",
                hash: {},
                data: a,
                loc: {
                  start: { line: 67, column: 19 },
                  end: { line: 67, column: 53 },
                },
              }
            ))
              ? r
              : "") +
            "\n               </button>\n            </div>\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, a) {
          var r,
            l = e.lambda,
            c = e.escapeExpression,
            d = null != t ? t : e.nullContext || {},
            u =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<ul class="box-cart__list-products">\n    <li>\n        <div class="box-cart__item">\n            <div class="box-cart__item">\n                <div class="box-cart__thumb">\n                    <a href="#">\n                        <strong>' +
            c(
              l(
                null != (r = null != t ? u(t, "shortName") : t)
                  ? u(r, "name")
                  : r,
                t
              )
            ) +
            '</strong>\n                    </a>\n                </div>\n                <div class="box-cart__title">\n                    <span>' +
            c(
              l(
                null != (r = null != t ? u(t, "subtotal") : t)
                  ? u(r, "name")
                  : r,
                t
              )
            ) +
            "</span>\n                    <span>" +
            c(
              l(
                null != (r = null != t ? u(t, "subtotal") : t)
                  ? u(r, "price")
                  : r,
                t
              )
            ) +
            '</span>\n                </div>\n            </div>\n        </div>\n    </li>\n</ul>\n<ul class="box-cart__list-total">\n' +
            (null !=
            (r = n(o(9105)).call(
              d,
              null != t ? u(t, "discount") : t,
              "!=",
              null,
              {
                name: "helpers/compare",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a,
                loc: {
                  start: { line: 19, column: 4 },
                  end: { line: 29, column: 27 },
                },
              }
            ))
              ? r
              : "") +
            (null !=
            (r = n(o(9105)).call(
              d,
              null != t ? u(t, "vat_shipping_amount") : t,
              "!=",
              null,
              {
                name: "helpers/compare",
                hash: {},
                fn: e.program(4, a, 0),
                inverse: e.noop,
                data: a,
                loc: {
                  start: { line: 30, column: 4 },
                  end: { line: 35, column: 27 },
                },
              }
            ))
              ? r
              : "") +
            (null !=
            (r = n(o(9105)).call(d, null != t ? u(t, "vat") : t, "!=", null, {
              name: "helpers/compare",
              hash: {},
              fn: e.program(6, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 36, column: 4 },
                end: { line: 41, column: 27 },
              },
            }))
              ? r
              : "") +
            "    <li>\n        <span>" +
            c(
              l(
                null != (r = null != t ? u(t, "total") : t) ? u(r, "name") : r,
                t
              )
            ) +
            '</span>\n        <span class="box-cart__total js-total-price">' +
            c(
              l(
                null != (r = null != t ? u(t, "total") : t) ? u(r, "price") : r,
                t
              )
            ) +
            '</span>\n    </li>\n</ul>\n\n<div data-controller="purchase--coupon" class="box-coupon' +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "show_box_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(8, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 48, column: 57 },
                end: { line: 48, column: 96 },
              },
            }))
              ? r
              : "") +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "has_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(10, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 48, column: 96 },
                end: { line: 48, column: 132 },
              },
            }))
              ? r
              : "") +
            '">\n    <div\n        class="box-coupon__text' +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "show_box_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(12, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 50, column: 31 },
                end: { line: 50, column: 72 },
              },
            }))
              ? r
              : "") +
            '"\n        id="discount_msg"\n        data-purchase--coupon-target="message"\n    >\n        Do you have a coupon? click <strong data-action="click->purchase--coupon#open" class="link-underlined link-underlined--white">here</strong>\n    </div>\n    <div class="box-coupon__form">\n        <label class="form-field__label">Coupon Code</label>\n\n' +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "has_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(14, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 59, column: 8 },
                end: { line: 70, column: 16 },
              },
            }))
              ? r
              : "") +
            '\n        <div class="form-field' +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "has_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(12, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 72, column: 30 },
                end: { line: 72, column: 66 },
              },
            }))
              ? r
              : "") +
            '">\n            <input\n              data-purchase--coupon-target="code"\n              data-action="keypress->purchase--coupon#check"\n              type="text"\n              id="cart_discount"\n              name="cart_discount"\n              required="required"\n              class="text-input js-coupon-code-sidebar"\n              placeholder="Write code here..."\n            >\n            <div\n              data-purchase--coupon-target="formMessage"\n              class="form-field__msg"\n            >' +
            c(l(null != t ? u(t, "error_coupon") : t, t)) +
            '</div>\n        </div>\n        <div class="box-coupon__bts ' +
            (null !=
            (r = u(s, "if").call(d, null != t ? u(t, "has_coupon") : t, {
              name: "if",
              hash: {},
              fn: e.program(12, a, 0),
              inverse: e.noop,
              data: a,
              loc: {
                start: { line: 88, column: 36 },
                end: { line: 88, column: 73 },
              },
            }))
              ? r
              : "") +
            '">\n            <span\n              data-purchase--coupon-target="applyButton"\n              data-action="click->purchase--coupon#apply"\n              class="box-coupon__apply button button--small--rounded js-coupon-apply"\n              id="js-submit-coupon"\n            >\n              <span class="button__content">Apply</span>\n            </span>\n        </div>\n    </div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    6393: (e, t, o) => {
      var s = o(202);
      function n(e) {
        return e && (e.__esModule ? e.default : e);
      }
      e.exports = (s.default || s).template({
        1: function (e, t, s, i, a, r) {
          var l,
            c = null != t ? t : e.nullContext || {},
            d = e.escapeExpression,
            u = e.lambda,
            h =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '  <tr>\n    <td align="left">\n      <div class="text-default">\n        <div class="users-credits">\n          <ul class="users-credits__details">\n            <li>\n              <div class="users-credits__item">\n                <figure class="circle-avatar ">\n                  <a href="' +
            d(
              n(o(5040)).call(c, "tv_user_homepage", {
                name: "helpers/path",
                hash: {
                  username: null != (l = r[0][0]) ? h(l, "username") : l,
                },
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 10, column: 27 },
                  end: { line: 10, column: 89 },
                },
              })
            ) +
            '"><img class="circle-avatar__img" src="' +
            d(
              n(o(4739)).call(
                c,
                null != (l = r[0][0]) ? h(l, "image") : l,
                "thumb_user_70",
                {
                  name: "helpers/asset_thumb",
                  hash: {},
                  data: a,
                  blockParams: r,
                  loc: {
                    start: { line: 10, column: 128 },
                    end: { line: 10, column: 182 },
                  },
                }
              )
            ) +
            '" width="50" height="50" alt="' +
            d(u(null != (l = r[0][0]) ? h(l, "displayName") : l, t)) +
            '"></a>\n                </figure>\n                <div class="users-credits__name">\n                  <a class="text-bold" href="' +
            d(
              n(o(5040)).call(c, "tv_user_homepage", {
                name: "helpers/path",
                hash: {
                  username: null != (l = r[0][0]) ? h(l, "username") : l,
                },
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 13, column: 45 },
                  end: { line: 13, column: 107 },
                },
              })
            ) +
            '">\n                    ' +
            d(u(null != (l = r[0][0]) ? h(l, "displayName") : l, t)) +
            "\n                  </a>\n" +
            (null !=
            (l = h(s, "if").call(
              c,
              null != (l = r[0][0]) ? h(l, "country") : l,
              {
                name: "if",
                hash: {},
                fn: e.program(2, a, 0, r),
                inverse: e.noop,
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 16, column: 18 },
                  end: { line: 24, column: 25 },
                },
              }
            ))
              ? l
              : "") +
            '                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </td>\n    <td align="left">\n      <a\n        href="' +
            d(
              n(o(5040)).call(c, "tv_user_follow", {
                name: "helpers/path",
                hash: {
                  username: null != (l = r[0][0]) ? h(l, "username") : l,
                },
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 34, column: 14 },
                  end: { line: 34, column: 74 },
                },
              })
            ) +
            '"\n        class="button button--outline--rounded js-user-following"\n        data-controller="follow-user"\n        data-action="click->follow-user#follow"\n        data-username="' +
            d(u(null != (l = r[0][0]) ? h(l, "username") : l, t)) +
            '"\n        data-user-id="' +
            d(u(r[0][1], t)) +
            '"\n        data-text-start="' +
            d(
              n(o(8040)).call(c, "app.follow", {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 40, column: 25 },
                  end: { line: 40, column: 59 },
                },
              })
            ) +
            '"\n        data-text-end="' +
            d(
              n(o(8040)).call(c, "app.following", {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 41, column: 23 },
                  end: { line: 41, column: 60 },
                },
              })
            ) +
            '"\n      >\n        <span class="js-bt-content">' +
            d(
              n(o(8040)).call(c, "app.follow", {
                name: "helpers/trans",
                hash: {},
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 43, column: 36 },
                  end: { line: 43, column: 70 },
                },
              })
            ) +
            "</span>\n      </a>\n    </td>\n  </tr>\n"
          );
        },
        2: function (e, t, s, i, a, r) {
          var l,
            c =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '                    <div class="row">\n' +
            (null !=
            (l = n(o(6805)).call(
              null != t ? t : e.nullContext || {},
              null != (l = r[1][0]) ? c(l, "country") : l,
              {
                name: "helpers/ifObject",
                hash: {},
                fn: e.program(3, a, 0, r),
                inverse: e.program(5, a, 0, r),
                data: a,
                blockParams: r,
                loc: {
                  start: { line: 18, column: 22 },
                  end: { line: 22, column: 45 },
                },
              }
            ))
              ? l
              : "") +
            "                    </div>\n"
          );
        },
        3: function (e, t, o, s, n, i) {
          var a,
            r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "                        " +
            e.escapeExpression(
              e.lambda(
                null != (a = null != (a = i[2][0]) ? r(a, "country") : a)
                  ? r(a, "name")
                  : a,
                t
              )
            ) +
            "\n"
          );
        },
        5: function (e, t, o, s, n, i) {
          var a,
            r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            "                        " +
            e.escapeExpression(
              e.lambda(null != (a = i[2][0]) ? r(a, "country") : a, t)
            ) +
            "\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, o, s, n, i) {
          var a,
            r =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return null !=
            (a = r(o, "each").call(
              null != t ? t : e.nullContext || {},
              null != t ? r(t, "users") : t,
              {
                name: "each",
                hash: {},
                fn: e.program(1, n, 2, i),
                inverse: e.noop,
                data: n,
                blockParams: i,
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 47, column: 9 },
                },
              }
            ))
            ? a
            : "";
        },
        useData: !0,
        useBlockParams: !0,
      });
    },
    5893: () => {},
  },
]);
