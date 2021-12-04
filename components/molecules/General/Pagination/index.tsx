import {faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useMemo, useState} from "preact/hooks";
import {PaginationProps} from "./Pagination.props";
import {Link} from "../../../atoms/Link/Link";
import {PageContext} from "../../../../renderer/types";
import {usePageContext} from "../../../../renderer/usePageContext";
import styles from './Pagination.module.sass'
import { navigate } from "vite-plugin-ssr/client/router";
import getQueryString from "../../../../helpers/getQueryString";
const Pagination = ({total = 1, className = ''}:PaginationProps):JSX.Element => {
  // @ts-ignore
  const pageContext:PageContext = usePageContext();
  // @ts-ignore
  const getQueries = useMemo(() => pageContext?.urlParsed?.search || {},[pageContext?.urlParsed?.search])
  const [navValue,setNavigation] = useState(getQueries.page || 1)
  const pageValue = useMemo(() => {
      setNavigation(getQueries.page || 1)
      return navValue
  },[navValue,getQueries.page])
  const navPrev = async () => {
      const url = `${pageContext.urlPathname}${Object.keys(getQueries).length?`?${getQueryString({url:getQueries,filterKey: 'page'})}`:'?'}`
      if(+pageValue > 1) {
          await setNavigation(+pageValue - 1)
          await navigate(`${url}page=${+pageValue - 1}`, { keepScrollPosition: true })
      }
  }
  const navNext = async () => {
      const url = `${pageContext.urlPathname}${Object.keys(getQueries).length?`?${getQueryString({url:getQueries,filterKey: 'page'})}`:'?'}`
      if(+pageValue < total){
          await setNavigation(+pageValue + 1)
          await navigate(`${url}page=${+pageValue + 1}`, { keepScrollPosition: true })
      }
  }
  const getTotal = useMemo(() => Array.from({ length: total }, (x,y) => y+1),[total])
  return (
      <div className={`${styles.pagination}`}>
          <button className={`${styles.pagination__item}`} onClick={() => navPrev()}>
              <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {
              total >= 1 ? getTotal.map((e,i) =>(
                  e > 1? <Link  className={`${styles.pagination__item} ${+e === +pageValue ? `${styles.pagination__item__active}`: ''}`} href={`${pageContext.urlPathname}?page=${e}`} key={e}>{e}</Link>:<Link  className={`${styles.pagination__item} ${+e === +pageValue ?`${styles.pagination__item__active}`: ''}`}  href={`${pageContext.urlPathname}`} key={e}>{e}</Link>
              )) : null
          }
          <button className={`${styles.pagination__item}`} onClick={() => navNext()}>
              <FontAwesomeIcon icon={faAngleRight} />
          </button>
      </div>
  )
}
export default Pagination
