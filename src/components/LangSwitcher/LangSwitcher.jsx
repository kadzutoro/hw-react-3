export const LangSwitcher = ( {lang, onChange} ) => {
    return (
        <select value={lang} onChange={(e) => onChange(e.target.value)}>
             <option value='uk'>UK</option>
             <option value='en'>EN</option>
             <option value='pl'>PL</option>
        </select>
    )
}
