export const SAVE_FUEL_SAVINGS = 'SAVE_FUEL_SAVINGS';
export const CALCULATE_FUEL_SAVINGS = 'CALCULATE_FUEL_SAVINGS';

export function saveFuelSavings(settings) {
  return {type: SAVE_FUEL_SAVINGS, settings};
}

export function calculateFuelSavings(settings, fieldName, value) {
  return {type: CALCULATE_FUEL_SAVINGS, settings, fieldName, value};
}
