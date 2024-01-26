

export function IconPoints({ style1 ,style2, colorF, colorL }) {
    return (
        <div style={style1 ? style1 : {width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <svg style={style2 ? style2 : {}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill={colorF} width="100%" height="100%" /><circle fill={colorL} stroke={colorL} strokeWidth="18" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill={colorL} stroke={colorL} strokeWidth="18" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill={colorL} stroke={colorL} strokeWidth="18" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>


        </div>

    )
}

