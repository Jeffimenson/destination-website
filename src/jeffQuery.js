// Dom manipulation
function query(selector, parent = document) {
    return parent.querySelector(selector);
}

function queryAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

function getNextSeparator(start, selector) {
    const nextHash = selector.indexOf('#', start);
    const nextDot = selector.indexOf('.', start);

    if (nextHash === -1) {
        return nextDot;
    }
    if (nextDot === -1) {
        return nextHash;
    }
    return nextHash > nextDot ? nextDot : nextHash;
}

function make(selector, parent) {
    let lastInd = getNextSeparator(0, selector);

    const correctedLastInd = lastInd > -1 ? lastInd : selector.length;
    const type = selector.slice(0, correctedLastInd);

    const classes = [];
    let id;
    while (lastInd > -1) {
        const ind = getNextSeparator(lastInd + 1, selector);
        const correctedInd = ind > -1 ? ind : selector.length;
        const subStr = selector.slice(lastInd + 1, correctedInd);

        if (subStr.length === 0) {
            throw console.error(
                'Usage error: Tried to use two symbols for class and/or id in a row.'
            );
        }
        const sym = selector.at(lastInd);
        if (sym === '.') {
            classes.unshift(subStr);
        } else if (id === undefined) {
            id = subStr;
        } else {
            throw console.error(
                "Argument error: elements can't have multiple ids"
            );
        }

        lastInd = ind;
    }

    const newElement = document.createElement(type);
    for (let i = 0; i < classes.length; i += 1) {
        const cls = classes[i];
        newElement.classList.add(cls);
    }
    if (id) newElement.setAttribute('id', id);
    if (parent) parent.append(newElement);
    return newElement;
}

function toggleClass(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Object stuff
const Factory = {
    produce(proto, publicObj = {}) {
        return Object.assign(Object.create(proto), publicObj);
    },
};

// export statement
export { make, query, queryAll, Factory, toggleClass, insertAfter };
