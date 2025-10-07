export function selectCatgory(category) {
    const allCategories = [
        { value: 'tv-show', name: 'TV Show', selected: false },
        { value: 'animation', name: 'Animation', selected: false },
        { value: 'movie', name: 'Movie', selected: false },
        { value: 'documentary', name: 'Documentary', selected: false },
        { value: 'short-film', name: 'Short Film', selected: false },
    ];

    allCategories.forEach(c => { c.selected = c.value === category });
    return allCategories;
}