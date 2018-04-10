class RequestFormMultipleChoiceField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    if (this.answer.choice)
      return `${this.field.title}: ${this.answer.choice.label}`
    else
      return `${this.field.title}: ${this.answer.choices.labels.join(', ')}`

  }
}
export default RequestFormMultipleChoiceField;
