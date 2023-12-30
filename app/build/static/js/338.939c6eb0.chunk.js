"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[338],{338:(e,a,t)=>{t.a(e,(async(e,r)=>{try{t.r(a),t.d(a,{default:()=>m});var s=t(2791),l=t(97),n=t(5721),o=t(1946),i=t(1741),d=t(9016),c=t(184),u=e([o]);o=(u.then?(await u)():u)[0];const m=()=>{const[e,a]=(0,s.useState)(!1),[t,r]=(0,s.useState)(""),[u,m]=(0,s.useState)([{}]),[p,x]=(0,s.useState)([]),[h,f]=(0,s.useState)([]),[g,b]=(0,s.useState)(!0),[y,j]=(0,s.useState)(!1),[v]=(0,s.useState)(10),[w,N]=(0,s.useState)(1),[k,_]=(0,s.useState)(null),[C,S]=(0,s.useState)(!1),P=(0,s.useRef)();(0,s.useEffect)((()=>{b(!0),D()}),[w,!0===y]);const D=async()=>{const e=await o.Z.get("/company/?page=".concat(w,"&page_size=").concat(v));x(e),b(!1)};let Z=[];!g&&p.data&&(Z=p.data.rows.filter((e=>null===e||void 0===e?void 0:e.company_name.includes(t))));const q=()=>{S(!1),_(null)};return(0,c.jsx)("div",{className:"h-full w-full",children:(0,c.jsxs)("div",{className:"h-[90vh] justify-around flex gap-2  p-5 bg-secondary",children:[(0,c.jsxs)("div",{id:"data",className:"flex  gap-2 h-full w-full flex-1 flex-col bg-secondary ".concat(e?"hidden":""),children:[C&&(0,c.jsx)(i.Z.DeleteModal,{handleCloseModal:q,handleConfirmDelete:async()=>{j(!0);await o.Z.delete("company/?company_id=".concat(k));j(!1),q()}}),(0,c.jsxs)("div",{className:"w-full flex justify-between px-5 bg-primary p-3 ",children:[(0,c.jsxs)("div",{className:"rounded-md border dark:bg-gray-900",children:[(0,c.jsx)("label",{htmlFor:"table-search",className:"sr-only",children:"Search"}),(0,c.jsxs)("div",{className:"relative mt-1",children:[(0,c.jsx)("div",{className:"absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,c.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,c.jsx)("input",{type:"text",id:"table-search",className:"block ps-10 text-md text-gray-900 border border-secondary rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for Company",value:t,onChange:e=>r(e.target.value)})]})]}),(0,c.jsx)("button",{onClick:()=>(a(!e),m([{}]),void f([])),children:e?"Cancel":"Register New"})]}),(0,c.jsx)("div",{className:"p-3 h-full bg-primary",children:!g&&(0,c.jsx)(l.Z,{handleDelete:e=>{_(e),S(!0)},filteredSites:Z})}),(0,c.jsxs)("div",{className:"w-full h-[3rem] bg-primary flex flex-1 justify-between px-5 p-3 ",children:[!g&&(0,c.jsx)("button",{className:"underline",onClick:()=>w>1?N(w-1):"",children:"Prevous Page"}),!g&&(0,c.jsx)("button",{className:"underline",onClick:()=>p.data.count/v>w?N(w+1):"",children:"Next Page"})]})]}),(0,c.jsx)("div",{id:"table",className:"flex overflow-y-scroll ".concat(e?"":"hidden"," bg-primary w-[50rem] p-5"),children:(0,c.jsxs)("form",{onSubmit:e=>(async e=>{e.preventDefault(),j(!0);const a=await P.current.handleSaveClick(),t={company_name:h.company_name,address:h.address,file_upload:null===a||void 0===a?void 0:a.filename,sites:u};await o.Z.post("/company",t),j(!1),m([{}])})(e),className:"w-[40rem] mx-auto m-5 gap-3",children:[(0,c.jsx)(n.Z,{sites:u,handleInputChange:(e,a,t)=>{f({...h,[a]:t})},handleSiteInputChange:(e,a,t)=>{m((r=>r.map((r=>r.id===e?{...r,[a]:t}:r))))},removeSite:e=>{m((a=>a.filter((a=>a.id!==e))))},addNewSite:()=>{m((e=>[...e,{id:Date.now(),phone:"",company:""}]))}}),(0,c.jsx)(d.Z,{ref:P}),(0,c.jsx)("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5",children:"Save"}),(0,c.jsx)("a",{onClick:()=>a(!1),href:"#",className:"text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5",children:"Cancel"})]})})]})})};r()}catch(m){r(m)}}))},1741:(e,a,t)=>{t.d(a,{Z:()=>n});t(2791);var r=t(3494),s=t.n(r),l=t(184);const n={DeleteModal:e=>{let{handleConfirmDelete:a,handleCloseModal:t}=e;return(0,l.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,l.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,l.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,l.jsx)("div",{className:"sm:flex sm:items-start",children:(0,l.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,l.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:"Confirm Deletion"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this item?"})})]})})}),(0,l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,l.jsx)("button",{type:"button",onClick:a,className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",children:"Confirm"}),(0,l.jsx)("button",{type:"button",onClick:t,className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]})]})]})})},PreviewModal:e=>{let{handleDownloadFile:a,handleCloseModal:t,ext:r,path:n,file:o}=e;return(0,l.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen h-40 pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,l.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75",onClick:t})}),(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-[90vh]",children:[(0,l.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 !important",children:(0,l.jsx)(s(),{fileType:r,filePath:n})}),(0,l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,l.jsx)("button",{type:"button",onClick:t,className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"}),(0,l.jsx)("a",{href:"http://localhost:8009/milestone/api/v1/file/download/".concat(o),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Download"})]})]})]})})}}},9016:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(2791),s=t(5294),l=t(184);const n=(0,r.forwardRef)(((e,a)=>{const[t,n]=(0,r.useState)(null),o=async()=>{if(t){const a=new FormData;a.append("file",t);const r={method:"post",maxBodyLength:1/0,url:"http://localhost:8009/milestone/api/v1/file/upload",headers:{"Content-Type":"multipart/form-data"},data:a};try{return(await s.Z.request(r)).data}catch(e){}}};return(0,r.useImperativeHandle)(a,(()=>({handleSaveClick:o}))),(0,l.jsxs)("div",{className:"mt-5 flex-col gap-1 flex",children:[(0,l.jsx)("label",{children:"Upload File:"}),(0,l.jsx)("input",{type:"file",className:"bg-yellow-200",onChange:e=>{const a=e.target.files[0];if(a){["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(a.type)?n(a):(alert("Please select a valid file type (PDF or DOCX)"),e.target.value=null)}}})]})}))},97:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(2791),s=t(184);const l=e=>{let{node:a}=e;const[t,l]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"cursor-pointer",onClick:()=>{l(!t)},children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)("div",{className:"text-sm font-medium text-gray-900",children:a.site_address})}),t&&(0,s.jsxs)("div",{className:"ml-8",children:[(0,s.jsxs)("p",{children:["Contact Person: ",a.contact_person]}),(0,s.jsxs)("p",{children:["Phone #: ",a.phone]}),(0,s.jsxs)("p",{children:["Position: ",a.position]}),(0,s.jsxs)("p",{children:["Structure: ",a.structure]}),(0,s.jsxs)("p",{children:["Certification: ",a.certification]}),(0,s.jsxs)("p",{children:["Goal: ",a.goal]})]})]})},n=e=>{let{data:a}=e;return a.length>0&&(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("div",{className:"-my-2 sm:-mx-6 lg:-mx-8",children:(0,s.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,s.jsx)("table",{className:"min-w-full divide-y divide-gray-200",children:(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:a.map((e=>(0,s.jsx)("tr",{children:(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap  hover:bg-gray-100",children:(0,s.jsx)(l,{node:e})})},e.id)))})})})})})})};t(3494);var o=t(1741);const i=e=>{let{file:a}=e;const[t,l]=(0,r.useState)(!1);if(!a)return null;const[n,i]=a.split("."),d="http://localhost:8009/milestone/api/v1/file/read/".concat(a);return(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"",onClick:()=>{l(!0)},children:(0,s.jsx)("p",{className:"text-blue-500 hover:underline",children:a})}),t&&(0,s.jsx)(o.Z.PreviewModal,{ext:i,file:a,path:d,handleDownloadFile:async e=>{},handleCloseModal:()=>{l(!1)}})]})},d=e=>{let{filteredSites:a,handleDelete:t}=e;return(0,s.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg p-5",children:(0,s.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,s.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Company name"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Address"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Sites"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"File"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),(0,s.jsx)("tbody",{children:a.map((e=>(0,s.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600",children:[(0,s.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.company_name}),(0,s.jsx)("td",{className:"px-6 py-4",children:e.address}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap ",children:(0,s.jsx)(n,{data:e.sites})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap h-10 w-10",children:(0,s.jsx)(i,{file:e.file_upload})}),(0,s.jsxs)("td",{className:"flex flex-row px-6 py-4 gap-2 items-center align-center justify-center",children:[(0,s.jsx)("a",{href:"#",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"}),(0,s.jsx)("a",{onClick:()=>t(e.company_id),href:"#",className:"font-medium text-red-500 dark:text-blue-500 hover:underline",children:"Delete"})]})]},e.id)))})]})})}},5721:(e,a,t)=>{t.d(a,{Z:()=>l});t(2791);var r=t(184);const s=e=>{let{site:a,index:t,handleInputChange:s,removeSite:l}=e;return(0,r.jsx)("div",{className:"grid md:grid-cols-1 md:gap-6 mt-5 bg-secondary",children:(0,r.jsxs)("div",{className:"relative z-0 w-full pb-4 group bg-primary",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("h1",{children:["Site ",t+1]}),t>0&&(0,r.jsx)("a",{href:"#",onClick:()=>l(a.id),children:"Remove"})]}),(0,r.jsxs)("div",{className:"flex-col grid md:grid-cols-2 md:gap-6",children:[(0,r.jsx)("input",{type:"text",name:"floating_contactPerson_".concat(a.id),id:"floating_contactPerson_".concat(a.id),value:a.contactPerson,onChange:e=>s(a.id,"contact_person",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"Contact Person",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_site_address_".concat(a.id),id:"floating_contactPerson_".concat(a.id),value:a.site_address,onChange:e=>s(a.id,"site_address",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"Site Location",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_phone_".concat(a.id),id:"floating_phone_".concat(a.id),value:a.phone,onChange:e=>s(a.id,"phone",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"Phone Number",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_position_".concat(a.id),id:"floating_position_".concat(a.id),value:a.position,onChange:e=>s(a.id,"position",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"Title/Position",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_structure_".concat(a.id),id:"floating_structure_".concat(a.id),value:a.structure,onChange:e=>s(a.id,"structure",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"organisation structure",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_certification_".concat(a.id),id:"floating_certification_".concat(a.id),value:a.certification,onChange:e=>s(a.id,"certification",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"Certification",required:!0}),(0,r.jsx)("input",{type:"text",name:"floating_goal_".concat(a.id),id:"floating_goal_".concat(a.id),value:a.goal,onChange:e=>s(a.id,"goal",e.target.value),className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"strategic goals",required:!0})]})]},a.id)})},l=e=>{let{sites:a,handleInputChange:t,handleSiteInputChange:l,removeSite:n,addNewSite:o}=e;return(0,r.jsxs)("div",{className:"w-full gap-5 flex flex-col",children:[(0,r.jsx)("h1",{children:"Create New Company"}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-6",children:[(0,r.jsxs)("div",{className:"relative z-0 w-full mb-5 group",children:[(0,r.jsx)("input",{type:"text",name:"floating_first_name",id:"floating_company_name",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",onChange:e=>t("floating_company_name","company_name",e.target.value),required:!0}),(0,r.jsx)("label",{htmlFor:"floating_company_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Company name"})]}),(0,r.jsxs)("div",{className:"relative z-0 w-full mb-5 group",children:[(0,r.jsx)("input",{type:"text",name:"floating_last_name",id:"floating_address_name",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",onChange:e=>t("floating_address_name","address",e.target.value),required:!0}),(0,r.jsx)("label",{htmlFor:"floating_address_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Address 1"})]})]}),a.map(((e,a)=>(0,r.jsx)(s,{site:e,index:a,handleInputChange:l,removeSite:n},e.id))),(0,r.jsx)("span",{onClick:o,className:"cursor-pointer w-[80px] text-center bg-blue-400 p-2 text-[10px] rounded-lg text-white",children:"New Site"})]})}}}]);
//# sourceMappingURL=338.939c6eb0.chunk.js.map