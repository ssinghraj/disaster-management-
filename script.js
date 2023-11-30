function listSafetyTips() {
    const safetyTips = [
        'Prepare a kit with essential items like food, water, first aid supplies, etc.',
        'Know your evacuation route and gather important documents',
        'Maintain a weather radio for updated alerts',
        'Build a emergency supply stash with items like bottled water, canned food, etc.',
        'Keep a backup battery-powered radio handy in case of power outages',
        'Stay informed and be ready to evacuate at a moment’s notice',
    ];

    const safetyTipList = document.getElementById('safety-tip-list');

    safetyTips.forEach((tip) => {
        const listItem = document.createElement('li');
        listItem.textContent = tip;
        safetyTipList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', listSafetyTips);