import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // todo: show fighter info (image, name, health, etc.)
    if(fighter) {
        const fighterImg = createFighterImage(fighter);
        const fighterName = createElement({ tagName: 'h4' });
        const fighterDetails = createElement({
          tagName: 'div',
          className: 'fighter-details'
        });
        const fighterDetailsWrapper = createElement({
          tagName: 'div',
          className: 'fighter-details-wrapper'
        });
        fighterDetails.innerHTML = `
          <div>
            <p>
            Holaa + ${fighter.attack}</p>
          </div>
          <div>
          <p>${fighter['defense']}</p>
          </div>
          <div>
            <p>
            ${fighter['health']}</p>
          </div>
        `;
        console.log('fighter.name '+ fighter['name'])
        fighterName.innerText = fighter['name'];
        fighterDetailsWrapper.append(fighterName, fighterDetails);
        fighterElement.append(fighterImg, fighterDetailsWrapper);
      }

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
