(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{268:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("cf52d23a",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n(268)},271:function(t,e,n){var r=n(59)(!1);r.push([t.i,".spinner[data-v-55981fbe]{-webkit-animation:rotate-data-v-55981fbe 2s linear infinite;animation:rotate-data-v-55981fbe 2s linear infinite;max-height:60%;height:40px;margin:0 auto}.spinner .path[data-v-55981fbe]{stroke:#93bfec;stroke-linecap:round;-webkit-animation:dash-data-v-55981fbe 1.5s ease-in-out infinite;animation:dash-data-v-55981fbe 1.5s ease-in-out infinite}@-webkit-keyframes rotate-data-v-55981fbe{to{transform:rotate(1turn)}}@keyframes rotate-data-v-55981fbe{to{transform:rotate(1turn)}}@-webkit-keyframes dash-data-v-55981fbe{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}@keyframes dash-data-v-55981fbe{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}",""]),t.exports=r},273:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isLoading:!1}}},o=(n(270),n(23)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 50 50"}},[e("circle",{staticClass:"path",attrs:{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"}})])}),[],!1,null,"55981fbe",null);e.default=component.exports},282:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("d0f7c56a",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";e.a={methods:{formatDate:function(t){var e=new Date(0);return e.setSeconds(t),e.toISOString().substr(11,8)}}}},287:function(t,e,n){"use strict";n(282)},288:function(t,e,n){var r=n(59)(!1);r.push([t.i,".item[data-v-333f5983]{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-radius:4px;border:1px solid #f2f2f2;background:#fff;margin-bottom:6px;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.2)}.item[data-v-333f5983]:last-of-type{margin-bottom:0}.item__name[data-v-333f5983]{font-weight:600}.item__logo[data-v-333f5983]{width:34px;margin-right:20px}.item__status[data-v-333f5983]{text-transform:capitalize;font-weight:600}.item__main-info[data-v-333f5983]{display:flex;align-items:center}.item__time span[data-v-333f5983]{display:inline-block;margin-left:20px;font-weight:700}.time__item[data-v-333f5983]{white-space:nowrap;width:100%;display:flex;align-items:center;justify-content:space-between}.status_active[data-v-333f5983]{color:#699452}.status_passive[data-v-333f5983]{color:red}",""]),t.exports=r},295:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(61),n(284)),c=n(273),_={mixins:[o.a],components:{Spinner:c.default},props:{data:{type:Object}},data:function(){return{time:{all_time_spent_sec:null,last_30_days_spent_sec:null,this_month_spent_sec:null}}},created:function(){this.loadTime()},methods:{checkStatus:function(t){switch(t){case 1:return"active";case 0:return"passive"}},loadTime:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,_,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id_project:t.data.id},e.prev=1,e.next=4,t.$axios.get("/stats-bugtracker/issues-bugs-times",n);case 4:r=e.sent,o=r.data.task,c=o.all_time_spent_sec,_=o.last_30_days_spent_sec,f=o.this_month_spent_sec,t.time.all_time_spent_sec=t.formatDate(c),t.time.last_30_days_spent_sec=t.formatDate(_),t.time.this_month_spent_sec=t.formatDate(f),t.$emit("updateTime",t.time),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()}}},f=(n(287),n(23)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"item"},[t.data&&null!==t.time.all_time_spent_sec?[n("div",{staticClass:"item__main-info"},[n("img",{staticClass:"item__logo",attrs:{src:t.data.logo_url,alt:"company logo"}}),t._v(" "),n("span",{staticClass:"item__name"},[t._v(" "+t._s(t.data.name)+" ")])]),t._v(" "),n("div",{staticClass:"item__status",class:"status_"+t.checkStatus(t.data.is_active)},[t._v(t._s(t.checkStatus(t.data.is_active)))]),t._v(" "),n("div",{staticClass:"item__time"},[n("div",{staticClass:"time__item"},[t._v("\n        time this week\n        "),n("span",[t._v(t._s(t.time.last_30_days_spent_sec))])]),t._v(" "),n("div",{staticClass:"time__item"},[t._v("\n        this month\n        "),n("span",[t._v(t._s(t.time.this_month_spent_sec))])]),t._v(" "),n("div",{staticClass:"time__item"},[t._v("\n        total\n        "),n("span",[t._v(t._s(t.time.all_time_spent_sec))])])])]:n("Spinner")],2):t._e()}),[],!1,null,"333f5983",null);e.default=component.exports}}]);