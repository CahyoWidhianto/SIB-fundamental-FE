// Fungsi untuk mendapatkan data lengkap Pokemon dari API berdasarkan nama
async function getPokemonDetails() {
    const pokemonNameInput = document.getElementById('pokemon-name');
    const pokemonName = pokemonNameInput.value.toLowerCase();

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = response.data;

        const pokemonDetailsContainer = document.getElementById('pokemon-details');
        pokemonDetailsContainer.innerHTML = `
                <div class="card">
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="card-img-top pokemon-image">
                    <div class="card-body">
                        <h5 class="card-title">${pokemonData.name}</h5>
                        <div class="card-text">
                            <h6 class="card-subtitle mb-2 text-muted">Abilities:</h6>
                            <ul class="list-unstyled">
                                ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                            </ul>
                            <h6 class="card-subtitle mb-2 text-muted">Stats:</h6>
                            <ul class="list-unstyled">
                                ${pokemonData.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                            </ul>
                            <h6 class="card-subtitle mb-2 text-muted">Types:</h6>
                            <ul class="list-unstyled">
                                ${pokemonData.types.map(type => `<li>${type.type.name}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
    } catch (error) {
        console.log(error);
    }
}