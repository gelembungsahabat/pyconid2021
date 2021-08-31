(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6,7,8],{245:function(t,e,n){"use strict";n.r(e);var r={components:{}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-info-800"},[n("div",{staticClass:"mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"},[n("div",{staticClass:"w-full"},[n("h2",{staticClass:"text-4xl text-center font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t._v("\n        Sponsorship Plans\n      ")]),t._v(" "),n("p",{staticClass:"mt-5 text-xl text-center text-gray-200"},[t._v("\n        Benefit & Pricing can be seen in the table below\n      ")])])])])}],!1,null,null,null);e.default=component.exports},246:function(t,e,n){"use strict";n.r(e);var r={components:{},data:function(){return{}},computed:{tiers:function(){return[{name:"Platinum",href:"mailto:pycon@python.or.id?subject=Apply%20Platinum%20Sponsorhip%20PYCON%202021",price:"50.000.000",description:""},{name:"Gold",href:"mailto:pycon@python.or.id?subject=Apply%20Gold%20Sponsorhip%20PYCON%202021",price:"30.000.000",description:""},{name:"Silver",href:"mailto:pycon@python.or.id?subject=Apply%20Silver%20Sponsorhip%20PYCON%202021",price:"15.000.000",description:""}]},sections:function(){return[{features:[{name:"Free Tickets",tiers:{Platinum:"15",Gold:"10",Silver:"5"}}]},{name:"Event Day Exposure",features:[{name:"Main Stage Pitching on Opening before Keynote",tiers:{Platinum:"10 minutes"}},{name:"Virtual Booth",tiers:{Platinum:"Large",Gold:"Medium",Silver:"Small"}},{name:"Dedicated Talk Session",tiers:{Platinum:"2",Gold:"1"}},{name:"Recruitment Session",tiers:{Platinum:!0,Gold:!0,Silver:!0}},{name:"Dedicated Longue Session",tiers:{Platinum:"3",Gold:"1"}},{name:"Special Booth Tour",tiers:{Platinum:"5 minutes",Gold:"5 minutes",Silver:"3 minutes"}},{name:"Logo on Virtual Background",tiers:{Platinum:"Large",Gold:"Small"}},{name:"Video ads between sessions",tiers:{Platinum:"60 seconds",Gold:"30 seconds",Silver:"15 seconds"}}]},{name:"Digital Exposure",features:[{name:"Logo on Website",tiers:{Platinum:"Large",Gold:"Medium",Silver:"Small"}},{name:"Dedicated Main Banner",tiers:{Platinum:"Large",Gold:"Medium",Silver:"Small"}},{name:"Dedicated Website Page",tiers:{Platinum:!0}},{name:"Logo on Publication Media",tiers:{Platinum:"Large",Gold:"Medium",Silver:"Small"}},{name:"Logo on Merchandise",tiers:{Platinum:"Large (T-shirt, Pouch, Stickers, Letter)",Gold:"Medium (Pouch, Stickers, Letter)",Silver:"Small (Pouch, Stickers, Letter)"}}]}]}}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white"},[n("div",{staticClass:"max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8"},[n("div",{staticClass:"max-w-2xl mx-auto space-y-16 lg:hidden"},t._l(t.tiers,(function(e,r){return n("section",{key:e.name},[t._l(t.sections,(function(section){return n("table",{key:section.name,staticClass:"w-full"},[section.name?n("caption",{staticClass:"bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"},[t._v("\n            "+t._s(section.name)+"\n          ")]):t._e(),t._v(" "),t._m(0,!0),t._v(" "),n("tbody",{staticClass:"divide-y divide-gray-200"},t._l(section.features,(function(r){return n("tr",{key:r.name,staticClass:"border-t border-gray-200"},[n("th",{staticClass:"py-5 px-4 text-sm font-normal text-gray-500 text-left",attrs:{scope:"row"}},[t._v("\n                "+t._s(r.name)+"\n              ")]),t._v(" "),n("td",{staticClass:"py-5 pr-4"},["string"==typeof r.tiers[e.name]?n("span",{staticClass:"block text-sm text-gray-700 text-right"},[t._v(t._s(r.tiers[e.name]))]):[!0===r.tiers[e.name]?n("svg",{staticClass:"ml-auto h-5 w-5 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]):n("svg",{staticClass:"ml-auto h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(!0===r.tiers[e.name]?"Yes":"No"))])]],2)])})),0)])})),t._v(" "),n("table",{staticClass:"w-full"},[n("tbody",{staticClass:"divide-y divide-gray-200"},[n("tr",[n("th",{staticClass:"py-5 px-4 text-sm font-medium text-gray-900  text-left",attrs:{scope:"row"}},[t._v("\n                Pricing\n              ")]),t._v(" "),n("td",{staticClass:"py-5 pr-4"},[n("span",{staticClass:"block text-sm text-3xl font-extrabold text-gray-800 text-right"},[t._v(t._s(e.price)+" IDR")])])])])]),t._v(" "),n("div",{class:[r<t.tiers.length-1?"py-5 border-b":"pt-5","border-t border-gray-200 px-4"]},[n("a",{staticClass:"block w-full bg-info-800 border border-info-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-info-900",attrs:{href:e.href}},[t._v("Buy "+t._s(e.name))])])],2)})),0),t._v(" "),n("div",{staticClass:"hidden lg:block"},[n("table",{staticClass:"w-full h-px table-fixed"},[n("caption",{staticClass:"sr-only"},[t._v("\n          Pricing plan comparison\n        ")]),t._v(" "),n("thead",[n("tr",[t._m(1),t._v(" "),t._l(t.tiers,(function(e){return n("th",{key:e.name,staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-center",attrs:{scope:"col"}},[t._v("\n              "+t._s(e.name)+"\n            ")])}))],2)]),t._v(" "),n("tbody",{staticClass:"border-t border-gray-200 divide-y divide-gray-200"},[t._l(t.sections,(function(section){return[section.name?n("tr",{key:section.name},[n("th",{staticClass:"bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left",attrs:{colspan:"4",scope:"colgroup"}},[t._v("\n                "+t._s(section.name)+"\n              ")])]):t._e(),t._v(" "),t._l(section.features,(function(e){return n("tr",{key:e.name},[n("th",{staticClass:"py-5 px-6 text-sm font-normal text-gray-500 text-left",attrs:{scope:"row"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),t._l(t.tiers,(function(r){return n("td",{key:r.name,staticClass:"py-5 px-6"},["string"==typeof e.tiers[r.name]?n("span",{staticClass:"flex justify-center text-sm text-gray-700"},[t._v(t._s(e.tiers[r.name]))]):[!0===e.tiers[r.name]?n("svg",{staticClass:"ml-auto mr-auto h-5 w-5 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]):n("svg",{staticClass:"ml-auto mr-auto h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(!0===e.tiers[r.name]?"Included":"Not included")+" in "+t._s(r.name))])]],2)}))],2)}))]})),t._v(" "),n("tr",[n("th",{staticClass:"py-8 px-6 text-sm font-medium text-gray-900 text-left align-top",attrs:{scope:"row"}},[t._v("\n              Pricing\n            ")]),t._v(" "),t._l(t.tiers,(function(e){return n("td",{key:e.name,staticClass:"h-full py-8 px-6 align-top"},[n("div",{staticClass:"relative h-full table"},[n("p",[n("span",{staticClass:"text-3xl font-extrabold text-gray-800"},[t._v(t._s(e.price)+" IDR")])]),t._v(" "),n("p",{staticClass:"mt-4 mb-16 text-sm text-gray-500"},[t._v("\n                  "+t._s(e.description)+"\n                ")]),t._v(" "),n("a",{staticClass:"absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900",attrs:{href:e.href}},[t._v("Apply "+t._s(e.name))])])])}))],2)],2)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"sr-only",attrs:{scope:"col"}},[t._v("\n                Feature\n              ")]),t._v(" "),n("th",{staticClass:"sr-only",attrs:{scope:"col"}},[t._v("\n                Included\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"pb-4 px-6 text-sm font-medium text-gray-900 text-left",attrs:{scope:"col"}},[n("span",{staticClass:"sr-only"},[t._v("Feature by")]),t._v(" "),n("span",[t._v("Plans")])])}],!1,null,null,null);e.default=component.exports},247:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{contents:[{title:"Recruiting.",subtitle:"What better place to find Python developers than a gathering of 250 of them? If you’re hiring, PyCon is the place to be. The conference has long been a great way to find the talented developers so many companies are searching for, so much that we added on-site Job Fair to make it even easier."},{title:"Branding.",subtitle:"It is an opportunity to appeal that your company is technology-oriented organization. The posting of the logo will be recorded by movie and will be broadcasted on the web-media afterwards, leading to branding of the company and products. Continuous exposure of names and logos of companies, products, and services can generate many merits even after this conference, such as appeal to participants, topicality and exciting experience."},{title:"Marketing.",subtitle:"It is a great chance to advertise your products and introduce detailed usages directly to Python engineers and Python users. Specifically, it is possible to have more interaction to participants by having a booth and directly explaining, having a talk session, and by distributing leaflets and goods."},{title:"Visibility.",subtitle:"The conference hall is the place to be seen. Many organizations do product demos, hand out coupons and t-shirts, and engage their visitors by talking tech and sharing their experiences with Python. Some companies like to use their booth to interview PyCon’s talented attendees right then and there."},{title:"Audience.",subtitle:"PyCon’s ever diversifying audience puts your organization in front of a wide variety of people. From beginners to experts, PyCon draws attendees from those with zero experience all the way through a significant group of the contributors to the language itself. We also see people of all levels from many industries. From developers to managers, executives to owners, startups to big businesses, PyCon draws attendees from all sorts of places. Some organizations send entire teams, and in the case of many startups, the entire company may be there."},{title:"Flexibility.",subtitle:"If you want to help PyCon, we want to help you construct a sponsorship package that fits your needs. If a small booth would work better than a large one, perhaps we can swap it in exchange for another benefit that works better for your organization. For some organizations, a booth is not practical at all, but adding another conference pass may work better."},{title:"Other.",subtitle:"Sponsoring can show your gratitude for Python community. It is one of CSR activity that supports technology companies and engineers community."}]}}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-info-800"},[n("div",{staticClass:"mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"},[n("div",{staticClass:"w-full"},[n("h2",{staticClass:"text-4xl text-center font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"},[t._v("\n        Prospect & Benefit\n      ")]),t._v(" "),n("p",{staticClass:"mt-5 text-xl text-center text-gray-200"},[t._v("\n        Sponsor Prospect & Benefit\n      ")]),t._v(" "),n("div",{staticClass:"mx-8 my-4 lg:mx-24 lg:my-12"},t._l(t.contents,(function(content){return n("p",{key:content.title,staticClass:"text-justify text-gray-200 text-md my-6"},[n("span",{staticClass:"font-semibold text-white"},[t._v(t._s(content.title))]),t._v(" "+t._s(content.subtitle)+"\n        ")])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);var r=n(245),o=n(246),l=n(247),c={components:{Header:r.default,Table:o.default,Prospect:l.default}},d=n(22),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Table"),t._v(" "),n("Prospect")],1)}),[],!1,null,null,null);e.default=component.exports}}]);