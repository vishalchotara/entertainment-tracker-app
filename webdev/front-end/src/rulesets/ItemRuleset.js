export const ItemRuleSet = function (object) {
    const { name, type } = object
    const ruleset = {
        'name': {
            valid: name != null && name.trim().length > 0
        },
        'type': {
            valid: type != null && type.trim().length
        },
    }
    return ruleset
}
export const ItemRequiredFields = ['name', 'type']