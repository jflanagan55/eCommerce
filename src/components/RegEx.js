

export const cvvCheck = new RegExp(/^\d{3,4}$/)

export const zipCheck = new RegExp(/^\d{5}$/)

export const cardCheck = new RegExp(/^\d{13,19}$/)

export const phoneNumberCheck = new RegExp(/^\d{10}$/)

export const emailCheck = new RegExp (/^\S+@\S+\.\S+[a-z]$/)

export const firstNameCheck = new RegExp(/^[A-z](?!.*--)(?!.*'')(?!.*-')(?!.*'-)(?!.* ')(?!.*' )(?!.*- )(?!.* -)(?!.*  )[A-z- ']+[A-z]$/)

export const lastNameCheck = new RegExp(/^[A-z](?!.*--)(?!.*'')(?!.*-')(?!.*'-)(?!.*- )(?!.* -)(?!.*  )(?!.*  )(?!.*\. ')(?!.*\. -)(?!.*\. \.)(?!.*' ')[A-z- '.]+[A-z]$/)

export const cityCheck = new RegExp(/^[A-z](?!.*--)(?!.*'')(?!.*-')(?!.*'-)(?!.*- )(?!.* -)(?!.*  )(?!.*  )(?!.*\. ')(?!.*\. -)(?!.*\. \.)(?!.*' ')[A-z- '.]+[A-z]$/)

export const streetAddressCheck = new RegExp(/^[0-9]+(?!.*--)(?!.*'')(?!.*-')(?!.*'-)(?!.*- )(?!.* -)(?!.*  )(?!.*  )(?!.*\. ')(?!.*\. -)(?!.*\. \.)(?!.*' ')[A-z- '.]+[A-z]$/)
