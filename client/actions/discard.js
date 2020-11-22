export function saveCardToDiscardState (currentCard) {
    return {
        type: 'DISCARD_CARD',
        currentCard: currentCard
    }
}