import{$ as p,A as S,Aa as fe,Ba as _e,Ca as ve,D as ie,E as b,Ea as k,Ga as ge,H as oe,Ha as Ee,I as c,J as s,Ja as A,K as n,Ka as Ce,L as v,La as ye,M as J,N as Y,Na as O,O as D,Oa as Fe,P as f,Pa as q,Q as h,Qa as $,R as I,Ra as G,S as M,Sa as Se,T as w,Ta as be,U as l,Ua as P,V as u,W as x,Y as ne,Z as V,Za as j,_ as d,_a as xe,aa as ae,ab as ee,ca as Z,cb as g,db as H,eb as Te,fb as Q,gb as Ie,h as te,hb as U,ia as R,ib as Me,j as C,ja as N,jb as X,kb as we,l as B,lb as K,mb as Ae,nb as z,o as y,ob as Le,p as F,sa as se,ta as le,ua as ce,va as de,wa as pe,x as re,xa as me,ya as ue,z as o,za as he}from"./chunk-HY2C4NKM.js";function Re(a,T){a&1&&(J(0),s(1,"p"),l(2,'First time users of this form cannot select a file to load and must create an XML file by completing all the required fields below and clicking on the "Generate XML" button at the bottom of this form. For subsequent uses of this form, you can either upload a file by clicking on the "Choose file" button and selecting the .hcsc file or .xml file or you can complete the required fields below to generate a .xml file.'),v(3,"br"),l(4,' If you partially complete the form and click on the "Save Working Copy" button at the bottom of the form it will save a copy on the local workstation for completion at a later time. The file will be saved in the .hcsc file format. If you are using a previously submitted .xml file, please update the appropriate fields and verify that the details are accurate for the current transaction prior to filing. '),v(5,"br"),l(6," Note: The working copies (files with extension .hcsc) should never be sent to Health Canada."),n(),Y())}function Ne(a,T){a&1&&(J(0),s(1,"p"),l(2,"Les nouveaux utilisateurs du formulaire ne peuvent pas s\xE9lectionner et t\xE9l\xE9charger un fichier. Ceci \xE9tant dit, ils doivent cr\xE9er un fichier XML en remplissant les champs obligatoires ci-dessous et en cliquant sur le bouton \xABG\xE9n\xE9rer le XML\xBB au bas du formulaire."),v(3,"br"),l(4," Pour les utilisations ult\xE9rieures de ce formulaire, vous pouvez soit t\xE9l\xE9charger un fichier en cliquant sur le bouton \xABChoisir un fichier\xBB et en s\xE9lectionnant le fichier en format .hcsc ou .xml, soit remplir les champs obligatoires ci-dessous afin de g\xE9n\xE9rer un fichier .xml."),v(5,"br"),l(6,"Si vous remplissez partiellement le formulaire et souhaiter proc\xE9der ult\xE9rieurement, cliquez sur le bouton \xABEnregistrer la copie de travail\xBB au bas du formulaire. Une copie sera enregistr\xE9e sur le poste de travail en format .hcsc. Si vous utilisez un fichier .xml pr\xE9c\xE9demment soumis, veuillez mettre \xE0 jour les champs appropri\xE9s et v\xE9rifier que les d\xE9tails sont exacts pour la transaction actuelle avant de d\xE9poser le formulaire."),v(7,"br"),l(8," Remarque : les copies de travail (fichiers portant l'extension .hcsc) ne doivent jamais \xEAtre envoy\xE9es \xE0 Sant\xE9 Canada."),n(),Y())}var Be=(()=>{class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=B({type:a,selectors:[["app-filereader-instruction"]],inputs:{lang:"lang"},standalone:!0,features:[V],decls:4,vars:2,consts:[[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[4,"ngIf"]],template:function(r,t){r&1&&(s(0,"div",0)(1,"div",1),b(2,Re,7,0,"ng-container",2)(3,Ne,9,0,"ng-container",2),n()()),r&2&&(o(2),c("ngIf",t.lang==="en"),o(),c("ngIf",t.lang==="fr"))},dependencies:[N,R],encapsulation:2})}}return a})();var W=(()=>{class a{constructor(e,r,t,i,m,_,L,E){this._regulatoryInfoService=e,this._addressDetailsService=r,this._contactDetailsService=t,this._feeService=i,this._certificationService=m,this._entityBaseService=_,this._utilsService=L,this._globalService=E}getReactiveModel(e){return e?e.group({notApplicable:[!1,[]],contactInfoConfirm:[!1,de.requiredTrue]}):null}getEmptyEnrol(){return{TRANSACTION_ENROL:this.getEmptyTransactionEnrol()}}getEmptyMasterFileFeeModel(){return{are_there_access_letters:null,number_of_access_letters:"",who_responsible_fee:"",account_number:"",cra_business_number:""}}getEmptyAddressDetailsModel(){return{company_name:"",street_address:"",city:"",country:void 0,province_lov:void 0,province_text:"",postal_code:""}}getEmptyContactModel(){return{given_name:"",surname:"",language_correspondance:void 0,job_title:"",phone_num:"",phone_ext:"",fax_num:"",email:""}}getEmptyTransactionEnrol(){return{template_type:"PHARMA",date_saved:void 0,software_version:"",form_language:"",check_sum:"",ectd:this.getEmptyEctd(),contact_info:this.getEmptyContactInfo(),fee_details:this.getEmptyMasterFileFeeModel(),certify_accurate_complete:!1,full_name:"",submit_date:void 0,consent_privacy:!1}}getEmptyEctd(){return{company_id:"unassigned",dossier_id:"",dossier_type:{_id:"D25"},product_name:"",product_protocol:"",lifecycle_record:this.getEmptyLifecycleRecord()}}getEmptyLifecycleRecord(){return{control_number:"000000",master_file_number:"",master_file_use:void 0,regulatory_activity_lead:{_id:"B14-20160301-07"},regulatory_activity_type:void 0,sequence_description_value:void 0,sequence_from_date:void 0,transaction_description:void 0,requester_of_solicited_information:"",revise_trans_desc_request:"",revised_trans_desc:void 0}}getEmptyContactInfo(){return{holder_name_address:this.getEmptyAddressDetailsModel(),holder_contact:this.getEmptyContactModel(),agent_not_applicable:void 0,agent_name_address:this.getEmptyAddressDetailsModel(),agent_contact:this.getEmptyContactModel(),contact_info_confirm:!1}}mapDataModelToFormModel(e,r){r.controls.notApplicable.setValue(this._utilsService.toBoolean(e.agent_not_applicable))}mapRequiredFormsToOutput(e,r,t){this._regulatoryInfoService.mapFormModelToDataModel(r,e.ectd),this._certificationService.mapFormModelToDataModel(t,e)}mapAddressFormContactFormToOutput(e,r,t){if(e.agent_not_applicable){let i=r.filter(_=>_.addrType===g.HOLDER)[0];i?this._addressDetailsService.mapFormModelToDataModel(i.value,e.holder_name_address):console.error("mapAddressFormContactFormToOutput ~ No holder address found"),e.agent_name_address=null;let m=t.filter(_=>_.contactType===g.HOLDER)[0];m?this._contactDetailsService.mapFormModelToDataModel(m.value,e.holder_contact):console.error("mapAddressFormContactFormToOutput ~ No holder contact found"),e.agent_contact=null}else r.forEach(i=>{i.addrType===g.HOLDER?this._addressDetailsService.mapFormModelToDataModel(i.value,e.holder_name_address):i.addrType===g.AGENT&&this._addressDetailsService.mapFormModelToDataModel(i.value,e.agent_name_address)}),t.forEach(i=>{i.contactType===g.HOLDER?this._contactDetailsService.mapFormModelToDataModel(i.value,e.holder_contact):i.contactType===g.AGENT&&this._contactDetailsService.mapFormModelToDataModel(i.value,e.agent_contact)})}mapFeeFormToOutput(e,r){this._feeService.mapFormModelToDataModel(r,e)}static{this.\u0275fac=function(r){return new(r||a)(C(Te),C(we),C(Ae),C(Me),C(Ie),C(O),C(A),C(H))}}static{this.\u0275prov=te({token:a,factory:a.\u0275fac})}}return a})();function Pe(a,T){if(a&1&&(v(0,"control-messages",49),d(1,"formControl")),a&2){let e=h(2);c("showError",e.showErrors)("control",p(1,2,e.masterFileForm.controls.notApplicable))}}function je(a,T){if(a&1){let e=D();s(0,"app-address-details",28),f("errorList",function(t){y(e);let i=h(2);return F(i.processAgentAddressErrors(t))}),n()}if(a&2){let e=h(2);c("showErrors",e.showErrors)("addressModel",e.agentAddressModel)("addrType",e.agent)("addrGroupLabelKey","label.agent")}}function He(a,T){if(a&1){let e=D();s(0,"section",24)(1,"header",7)(2,"h3",8),l(3),d(4,"translate"),n()(),s(5,"div",12)(6,"app-contact-details",29),f("errorList",function(t){y(e);let i=h(2);return F(i.processAgentContactErrors(t))}),n()()()}if(a&2){let e=h(2);o(3),u(p(4,5,"heading.agent.contact")),o(3),c("showErrors",e.showErrors)("contactDetailsModel",e.agentContactModel)("contactType",e.agent)("contactGroupLabelKey","label.agent")}}function Qe(a,T){if(a&1&&(v(0,"control-messages",50),d(1,"formControl")),a&2){let e=h(2);c("showError",e.showErrors)("control",p(1,2,e.masterFileForm.controls.contactInfoConfirm))}}function Ue(a,T){if(a&1){let e=D();s(0,"div")(1,"section",6)(2,"header",7)(3,"h2",8),l(4),d(5,"translate"),n()(),s(6,"div",12)(7,"section",24)(8,"header",25)(9,"h3",8),l(10),d(11,"translate"),s(12,"sup",26)(13,"a",27)(14,"span",11),l(15),d(16,"translate"),n(),l(17),n()()()(),s(18,"div",12)(19,"app-address-details",28),f("errorList",function(t){y(e);let i=h();return F(i.processAddressErrors(t))}),n()()(),s(20,"section",24)(21,"header",7)(22,"h3",8),l(23),d(24,"translate"),n()(),s(25,"div",12)(26,"app-contact-details",29),f("errorList",function(t){y(e);let i=h();return F(i.processContactErrors(t))}),n()()(),s(27,"section",24)(28,"header",25)(29,"h3",8),l(30),d(31,"translate"),s(32,"sup",30)(33,"a",31)(34,"span",11),l(35),d(36,"translate"),n(),l(37),n()()()(),s(38,"div",12)(39,"div",32)(40,"div",33)(41,"div",34)(42,"label",35),b(43,Pe,2,4,"control-messages",36),s(44,"input",37),d(45,"formControl"),d(46,"translate"),f("change",function(){y(e);let t=h();return F(t.agentInfoOnChange())}),n(),s(47,"span",38)(48,"b"),l(49),d(50,"translate"),n()()()()()(),b(51,je,1,4,"app-address-details",39),n()(),b(52,He,7,7,"section",40),s(53,"div",41)(54,"div",42)(55,"label",43)(56,"input",44),d(57,"formControl"),f("blur",function(){y(e);let t=h();return F(t.processErrors())})("change",function(t){y(e);let i=h();return F(i.onChanged(t,"contactInfoConfirm"))}),n(),s(58,"span")(59,"b"),l(60),d(61,"translate"),n()(),s(62,"strong",45),l(63),d(64,"translate"),s(65,"sup",46)(66,"a",47)(67,"span",11),l(68),d(69,"translate"),n(),l(70),n()()(),b(71,Qe,2,4,"control-messages",48),n()()()()()()}if(a&2){let e=h();o(4),u(p(5,28,"panel.title.contactInfo")),o(6),x("",p(11,30,"heading.holder.address")," "),o(5),u(p(16,32,"instruction")),o(2),u(e.helpIndex.holderAddrIndx),o(2),c("showErrors",e.showErrors)("addressModel",e.holderAddressModel)("addrType",e.holder)("addrGroupLabelKey","label.holder"),o(4),u(p(24,34,"heading.holder.contact")),o(3),c("showErrors",e.showErrors)("contactDetailsModel",e.holderContactModel)("contactType",e.holder)("contactGroupLabelKey","label.holder"),o(4),x("",p(31,36,"heading.agent.address")," "),o(5),u(p(36,38,"instruction")),o(2),u(e.helpIndex.agentAddrIndx),o(6),c("ngIf",e.masterFileForm.controls.notApplicable.invalid),o(),c("formControl",p(45,40,e.masterFileForm.controls.notApplicable)),oe("aria-label",p(46,42,"agent.not.applicable")),o(5),u(p(50,44,"not.applicable")),o(2),c("ngIf",!e.notApplicable),o(),c("ngIf",!e.notApplicable),o(4),c("formControl",p(57,46,e.masterFileForm.controls.contactInfoConfirm)),o(4),u(p(61,48,"info.confirmation")),o(3),x("",p(64,50,"commmon.required.bracket")," "),o(5),u(p(69,52,"instruction")),o(2),u(e.helpIndex.confmValidIndx),o(),c("ngIf",e.masterFileForm.controls.contactInfoConfirm.invalid)}}function Xe(a,T){if(a&1){let e=D();s(0,"div")(1,"section",6)(2,"header",7)(3,"h2",8),l(4),d(5,"translate"),n()(),s(6,"div",12)(7,"app-master-file-fee",51),f("errorList",function(t){y(e);let i=h();return F(i.processTransFeeErrors(t))}),n()()()()}if(a&2){let e=h();o(4),u(p(5,3,"panel.title.fees")),o(3),c("showErrors",e.showErrors)("dataModel",e.transFeeModel)}}var Mt=(()=>{class a{constructor(e,r,t,i,m,_,L,E){this._fb=e,this.cdr=r,this._baseService=t,this._globalService=i,this._utilsService=m,this.fileServices=_,this._versionService=L,this._checkSumService=E,this._regulatoryInfoErrors=[],this._transFeeErrors=[],this._addressErrors=[],this._contactErrors=[],this._agentAddressErrors=[],this._agentContactErrors=[],this._contactConfirmError=[],this._certficationErrors=[],this.errorList=[],this.headingLevel="h2",this.rootTagText=j,this.versionTagPath=xe,this.startCheckSumVersionNum=2,this.notApplicable=!1,this.holder=g.HOLDER,this.agent=g.AGENT,this.noContactTxDescs=["12","14"],this.noFeeTxDescs=["1","3","5","8","9","12","14","20"],this.selectedTxDescSignal=ie(""),this.showContact=Z(()=>this.selectedTxDescSignal()===""?!0:!this.noContactTxDescs.includes(this.selectedTxDescSignal())),this.showFee=Z(()=>this.selectedTxDescSignal()===""?!0:!this.noFeeTxDescs.includes(this.selectedTxDescSignal())),this.showContactFlag=!0,this.showFeeFlag=!0,this.showErrors=!1}ngOnInit(){this.masterFileForm||(this.masterFileForm=this._baseService.getReactiveModel(this._fb));try{this._globalService.enrollment?this.enrollModel=this._globalService.enrollment:(this.enrollModel=this._baseService.getEmptyEnrol(),this._globalService.enrollment=this.enrollModel),this.transactionEnrollModel=this.enrollModel[this.rootTagText],this._initModels(this.transactionEnrollModel),this.lang=this._globalService.currLanguage,this.helpIndex=this._globalService.helpIndex,this.devEnv=this._globalService.devEnv,this.byPassCheckSum=this._globalService.byPassChecksum}catch(e){console.error(e)}}ngAfterViewInit(){document.location.href="#def-top",this.msgList.changes.subscribe(e=>{let r=[];this._updateErrorList(e),this.processErrors()}),this.msgList.notifyOnChanges()}_updateErrorList(e){let r=[];e&&e.forEach(t=>{t.label==="info.confirmation"&&r.push(t)}),this._contactConfirmError=r}processErrors(){this.errorList=[],this.errorList=this.errorList.concat(this._regulatoryInfoErrors),this.showContact()&&(this.errorList=this.errorList.concat(this._addressErrors.concat(this._contactErrors)),this.notApplicable||(this.errorList=this.errorList.concat(this._agentAddressErrors.concat(this._agentContactErrors))),this.errorList=this.errorList.concat(this._contactConfirmError)),this.showFee()&&(this.errorList=this.errorList.concat(this._transFeeErrors)),this.errorList=this.errorList.concat(this._certficationErrors),this.cdr.detectChanges()}processRegulatoryInfoErrors(e){this._regulatoryInfoErrors=e,this.processErrors()}processContactErrors(e){this._contactErrors=e,this.processErrors()}processTransFeeErrors(e){this._transFeeErrors=e,this.processErrors()}processCertificationErrors(e){this._certficationErrors=e,this.processErrors()}processAddressErrors(e){this._addressErrors=e,this.processErrors()}processAgentAddressErrors(e){this._agentAddressErrors=e,this.processErrors()}processAgentContactErrors(e){this._agentContactErrors=e,this.processErrors()}hideErrorSummary(){return this.showErrors&&this.errorList&&this.errorList.length>0}saveXmlFile(){this.showErrors=!0,this.processErrors(),this._saveXML()}saveWorkingCopyFile(){let e=this._prepareForSaving(!1),r=this._generateFileName(e[j]);this.fileServices.saveJsonToFile(e,r,null)}processFile(e){e.data!==null&&(this.transactionEnrollModel=e.data.TRANSACTION_ENROL,this._initModels(this.transactionEnrollModel),this.setSelectedTxDesc(this.ectdModel.lifecycle_record?.sequence_description_value?._id),this._baseService.mapDataModelToFormModel(this.transactionEnrollModel.contact_info,this.masterFileForm),this.agentInfoOnChange())}_initModels(e){this.ectdModel=e.ectd,e.contact_info!=null&&(this.holderAddressModel=e.contact_info.holder_name_address,this.holderContactModel=e.contact_info.holder_contact,this.agentAddressModel=e.contact_info.agent_name_address,this.agentContactModel=e.contact_info.agent_contact),e.fee_details!=null&&(this.transFeeModel=e.fee_details)}preload(){}setSelectedTxDesc(e){this.selectedTxDescSignal.set(e),this.showContact()||(this.holderAddressModel=this._baseService.getEmptyAddressDetailsModel(),this.holderContactModel=this._baseService.getEmptyContactModel(),this.agentAddressModel=this._baseService.getEmptyAddressDetailsModel(),this.agentContactModel=this._baseService.getEmptyContactModel(),this._addressErrors=[],this._agentAddressErrors=[],this._contactErrors=[],this._agentContactErrors=[]),this.showFee()||(this.transFeeModel=this._baseService.getEmptyMasterFileFeeModel(),this._transFeeErrors=[]),this.processErrors()}unloadNotification(e){e.returnValue=!0}_saveXML(){if(this.errorList&&this.errorList.length<1){let e=this._prepareForSaving(!0),r=this._generateFileName(e[j]),t=this._versionService.getApplicationMajorVersionWithUnderscore(this._globalService.appVersion),i=ee.toUpperCase()+"_RT_"+t+".xsl";this.fileServices.saveXmlToFile(e,r,!0,i);return}document.location.href="#topErrorSummaryId"}_prepareForSaving(e){let r=this._baseService.getEmptyTransactionEnrol(),t=this.regulatoryInfoComponent.getFormValue(),i=this.certificationComponent.getFormValue();if(this._baseService.mapRequiredFormsToOutput(r,t,i),this.showContact()){r.contact_info.agent_not_applicable=this.masterFileForm.controls.notApplicable.value,r.contact_info.contact_info_confirm=this.masterFileForm.controls.contactInfoConfirm.value,console.log(r.contact_info.agent_not_applicable,r.contact_info.contact_info_confirm);let _=this.addressComponents.map(E=>({addrType:E.addrType,value:E.getFormValue()})),L=this.contactDetailsComponents.map(E=>({contactType:E.contactType,value:E.getFormValue()}));this._baseService.mapAddressFormContactFormToOutput(r.contact_info,_,L)}else r.contact_info=null;if(this.showFee()){let _=this.feeComponent.getFormValue();this._baseService.mapFeeFormToOutput(r.fee_details,_)}else r.fee_details=null;r.date_saved=this._utilsService.getFormattedDate("yyyy-MM-dd-hhmm"),r.software_version=this._globalService.appVersion,r.form_language=this._globalService.currLanguage;let m={TRANSACTION_ENROL:r};return e&&(m.TRANSACTION_ENROL[$]="",m.TRANSACTION_ENROL[$]=this._checkSumService.createHash(m)),console.log("_prepareForSaving ~ output",JSON.stringify(m,null,2)),m}_generateFileName(e){return ee+"-"+e.ectd.dossier_id+"-"+e.date_saved}agentInfoOnChange(){this.notApplicable=this.masterFileForm.controls.notApplicable.value,this.notApplicable&&(this.agentAddressModel=this._baseService.getEmptyAddressDetailsModel(),this.agentContactModel=this._baseService.getEmptyContactModel(),this._agentAddressErrors=null,this._agentContactErrors=null),this.processErrors()}onChanged(e,r){e?.target?.checked===!1&&this.masterFileForm.controls[r].reset()}checkDateValidity(e){this._utilsService.checkInputValidity(e,this.masterFileForm.get("submitDate"),"invalidDate")}static{this.\u0275fac=function(r){return new(r||a)(S(_e),S(ae),S(W),S(H),S(A),S(q),S(P),S(G))}}static{this.\u0275cmp=B({type:a,selectors:[["app-form-base"]],viewQuery:function(r,t){if(r&1&&(I(Q,5),I(X,5),I(U,5),I(k,5),I(K,5),I(z,5)),r&2){let i;M(i=w())&&(t.regulatoryInfoComponent=i.first),M(i=w())&&(t.feeComponent=i.first),M(i=w())&&(t.certificationComponent=i.first),M(i=w())&&(t.msgList=i),M(i=w())&&(t.addressComponents=i),M(i=w())&&(t.contactDetailsComponents=i)}},hostBindings:function(r,t){r&1&&f("beforeunload",function(m){return t.unloadNotification(m)},!1,re)},standalone:!0,features:[ne([q,A,P,G,Fe,O,W]),V],decls:53,vars:38,consts:[[1,"container-fluid","wb-frmvld","wb-init","wb-frmvld-inited"],["name","MasterFileForm","novalidate","",3,"formGroup"],[1,"row","mrgn-tp-md"],[1,"col-md-12"],[1,"text-right"],["id","securityInfo",1,"fa","fa-shield","fa-sm"],[1,"panel","panel-primary","mrgn-tp-lg"],[1,"panel-heading","clearfix"],[1,"panel-title"],["id","tr1-rf"],["href","#tr1",1,"fn-lnk","mrgn-tp-md"],[1,"wb-inv"],[1,"panel-body"],[3,"complete","rootTag","lang","versionTagPath","startCheckSumVersion","byPassCheckSum","devEnv"],["fileUploadInstruction","",3,"lang"],["id","topErrorSummaryId"],["headingPreamble","errorSummary.masterfile",3,"hiddenSummary","errorList","headingLevel"],[3,"errorList","trDescUpdated","showErrors","dataModel"],[4,"ngIf"],[3,"errorList","showErrors"],[1,"row","btn-group-sm"],[1,"form-group","col-md-4"],["type","button",1,"btn","btn-default","btn-lg","active",3,"click"],["type","button",1,"btn","btn-primary","btn-lg","active",3,"click"],[1,"panel","panel-default"],[1,"panel-heading","clearfix","group-beside"],["id","tr3-rf"],["href","#tr3",1,"fn-lnk","mrgn-tp-md"],[3,"errorList","showErrors","addressModel","addrType","addrGroupLabelKey"],[3,"errorList","showErrors","contactDetailsModel","contactType","contactGroupLabelKey"],["id","tr4-rf"],["href","#tr4",1,"fn-lnk","mrgn-tp-md"],[1,"row","rep-margin-left"],[1,"col-xs-12"],[1,"checkbox"],["for","notApplicableId"],["parentId","mfDetails","controlId","notApplicableId","label","notApplicable",3,"showError","control",4,"ngIf"],["name","notApplicableName","type","checkbox","id","notApplicableId",3,"change","formControl"],["aria-hidden","true"],[3,"showErrors","addressModel","addrType","addrGroupLabelKey","errorList",4,"ngIf"],["class","panel  panel-default",4,"ngIf"],[1,"col-xs-12","full-width"],[1,"checkbox","required"],["for","contactInfoConfirmId"],["name","contactInfoConfirmName","type","checkbox","id","contactInfoConfirmId",3,"blur","change","formControl"],[1,"required"],["id","tr5-rf"],["href","#tr5",1,"fn-lnk"],["parentId","mfContactInfoConfirm","controlId","contactInfoConfirmId","label","info.confirmation",3,"showError","control",4,"ngIf"],["parentId","mfDetails","controlId","notApplicableId","label","notApplicable",3,"showError","control"],["parentId","mfContactInfoConfirm","controlId","contactInfoConfirmId","label","info.confirmation",3,"showError","control"],[3,"errorList","showErrors","dataModel"]],template:function(r,t){r&1&&(s(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5)(6,"strong"),l(7),d(8,"translate"),n()()()()(),s(9,"div")(10,"section",6)(11,"header",7)(12,"h2",8),l(13),d(14,"translate"),s(15,"sup",9)(16,"a",10)(17,"span",11),l(18),d(19,"translate"),n(),l(20),n()()()(),s(21,"div",12)(22,"lib-file-reader",13),f("complete",function(m){return t.processFile(m)}),v(23,"app-filereader-instruction",14),n()()()(),s(24,"div",15),v(25,"lib-error-summary",16),n(),s(26,"div")(27,"section",6)(28,"header",7)(29,"h2",8),l(30),d(31,"translate"),n()(),s(32,"div",12)(33,"app-regulatory-information",17),f("errorList",function(m){return t.processRegulatoryInfoErrors(m)})("trDescUpdated",function(m){return t.setSelectedTxDesc(m)}),n()()(),b(34,Ue,72,54,"div",18)(35,Xe,8,5,"div",18),n(),s(36,"div")(37,"section",6)(38,"header",7)(39,"h2",8),l(40),d(41,"translate"),n()(),s(42,"div",12)(43,"app-certification",19),f("errorList",function(m){return t.processCertificationErrors(m)}),n()()()(),s(44,"div",20)(45,"div",21)(46,"button",22),f("click",function(){return t.saveWorkingCopyFile()}),l(47),d(48,"translate"),n()(),s(49,"div",21)(50,"button",23),f("click",function(){return t.saveXmlFile()}),l(51),d(52,"translate"),n()()()()()),r&2&&(o(),c("formGroup",t.masterFileForm),o(6),x("\xA0",p(8,24,"PROTECTED_B"),""),o(6),x("",p(14,26,"load.file")," "),o(5),u(p(19,28,"instruction")),o(2),u(t.helpIndex.loadFileIndx),o(2),c("rootTag",t.rootTagText)("lang",t.lang)("versionTagPath",t.versionTagPath)("startCheckSumVersion",t.startCheckSumVersionNum)("byPassCheckSum",t.byPassCheckSum)("devEnv",t.devEnv),o(),c("lang",t.lang),o(2),c("hiddenSummary",t.hideErrorSummary())("errorList",t.errorList)("headingLevel",t.headingLevel),o(5),u(p(31,30,"panel.title.regulatoryInfo")),o(3),c("showErrors",t.showErrors)("dataModel",t.ectdModel),o(),c("ngIf",t.showContact()),o(),c("ngIf",t.showFee()),o(5),u(p(41,32,"panel.title.certification")),o(3),c("showErrors",t.showErrors),o(4),x(" ",p(48,34,"save.working.copy")," "),o(4),x(" ",p(52,36,"generate.final")," "))},dependencies:[N,R,le,se,ve,ue,ce,pe,me,he,fe,be,Se,ye,ge,k,Ce,Ee,Le,Q,K,z,X,U,Be],encapsulation:2})}}return a})();export{Mt as FormBaseComponent};
