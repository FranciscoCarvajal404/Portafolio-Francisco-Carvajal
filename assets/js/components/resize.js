function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    console.log(this.scrollHeight);
}

export default autoResize;