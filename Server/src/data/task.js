class Task {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this done = 0;
	}

	function getId() {
		return this.id;
	}

  function setId(id) {
    this.id = id;
  }

	function getName() {
		return this.name;
	}

  function setName(name) {
    this.name = name;
  }

	function getDone() {
		return this.done;
	}

  function setDone(done) {
    this.done = done;
  }
  
}
