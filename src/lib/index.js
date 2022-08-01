class MarkKeyword {
  /**
   * 初始化
   * @param {
   *  dNode: any
   *  keywords: string[]
   *  backgroundColor: string
   * } options 
   */
  constructor (options) {
    this.dNode = options.dNode
    this.keywords = options.keywords
    this.backgroundColor = options.backgroundColor || 'red'
  }

  getHighlightHtml = () => {
    const newNode = this.searchNode(this.dNode)
    return newNode.innerHtml
  }

  searchNode = (Node) => {
    if (Node.nodeType === 3) {
      const r = new RegExp(this.keywords.join('|'), 'g')
      const newHTML = Node.nodeValue
        .replace(
          r,
          '<span style="background-color: ' + this.backgroundColor + '">$&</span>'
        )
        console.log("newHTML =======: ", newHTML)
        Node.parentElement.innerHtml = newHTML
    }
    Node.childNodes && Node.childNodes.forEach(childNode => {
      this.searchNode(childNode)
    })
    return Node
  }
}

export default MarkKeyword