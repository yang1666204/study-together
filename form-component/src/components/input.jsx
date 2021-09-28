export default function Input({ onChange , value }){
    return  <input className="input"  onChange={ (e)=> onChange && onChange(e.target.value) } value={value}  />
}
Input.displayName = 'input'