export const server = import.meta.env.VITE_APP_SERVER
export const openUrlInNewTab = (url: string) => window.open(url, "_blank", "noreferrer")
export const openHibidLink = () => openUrlInNewTab('https://ccpowerdeals.hibid.com/auctions')
export const openGoogleMapLink = () => openUrlInNewTab('https://maps.app.goo.gl/GYhDrRQgC8NSvP9t6')
export const openFacebookLink = () => openUrlInNewTab('https://www.facebook.com/p/CC-Power-Deals-Auction-100076175228245/')
export const isObjectsEqual = (a: Object, b: Object) => JSON.stringify(a) === JSON.stringify(b)
export const nullCheckObject = (object: Object) => Object.values(object).some(x => { x.length === 0 })