export function selectCatgory(category) {
    const allCategories = [
        { value: '', name: 'Select Category' },
        { value: 'tv-show', name: 'TV Show' },
        { value: 'animation', name: 'Animation' },
        { value: 'movie', name: 'Movie'},
        { value: 'documentary', name: 'Documentary'},
        { value: 'short-film', name: 'Short Film'},
    ];

    allCategories.forEach(c => { c.selected = c.value === category });
    return allCategories;
}