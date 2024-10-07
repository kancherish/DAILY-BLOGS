
function Button({
    children,
    bgcolor="bg-[#FAF7F0]",
    text_color="text-slate-50",
    className='',
    ...props
}) {
  return (
    <button className={`${bgcolor} ${text_color} ${className} rounded-xl bg-gray-800 p-2`} {...props}>
        {children}
    </button>
  )
}

export default Button