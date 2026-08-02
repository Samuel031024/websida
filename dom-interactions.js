function highlightNav(element) {
    element.style.setProperty('color', '#007bff', 'important');
    element.style.setProperty('background-color', '#eaeaea', 'important');
}

function resetNav(element) {
    element.style.setProperty('color', '#000000', 'important');
    element.style.setProperty('background-color', 'transparent', 'important');
}

function focusField(element) {
    element.style.setProperty('background-color', '#e6f2ff', 'important');
    element.style.setProperty('border', '2px solid #007bff', 'important');
}

function blurField(element) {
    element.style.setProperty('background-color', '#ffffff', 'important');
    element.style.setProperty('border', '1px solid #ddd', 'important');
}