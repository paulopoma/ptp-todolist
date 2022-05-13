import moment from 'moment'

class TodoList {
  constructor({
    date = moment(),
    description = '',
    id = 0,
    initials = '',
    name = '',
  }) {
    this.date = date
    this.description = description
    this.id = id
    this.initials = initials
    this.name = name
    this.data = moment(this.date).format('DD/MM/YYYY')
    this.hora = moment(this.date).format('HH:mm')
  }

  toJson() {
    return {
      id: this.id,
      date: moment(`${this.data} ${this.hora}`, 'DD/MM/YYYY HH:mm').format(
        'YYYY-MM-DDTHH:mm:ss'
      ) + "Z",
      description: this.description,
      initials: this.initials,
      name: this.name,
    }
  }
}

export { TodoList }
