import { appConfig } from '../../../config'

export default class RequestFormDecorator {

  constructor(requestForm){
    this.requestForm = requestForm;
  }

  decorate(formType) {
    return this.getMap(formType).map((block) => {
      let blockData = block.items.map((item)=>{
        return `*${item}*${block.rowSeparator}${this.requestForm.getFieldValueByName(item)}\r\n`
      }).join('')
      return `${blockData}${block.separator}`
    }).join('');
  }

  getMap(formType) {
    let map = appConfig.forms[formType]
    if(!map) { throw new Error(`Unrecognized form type: ${formType}`)}
    return map;
  }
}
