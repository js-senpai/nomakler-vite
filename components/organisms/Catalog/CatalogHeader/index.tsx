import "./CatalogHeader.sass";
import SearchButton from "../../../molecules/General/Button/SearchButton";
import FilterButton from "../../../molecules/General/Button/FilterButton";
import { useMemo, useState } from "preact/hooks";
import ButtonPrimary from "../../../atoms/Button/ButtonPrimary";
import { CatalogHeaderProps } from "./CatalogHeader.props";
import getQueryString from "../../../../helpers/getQueryString";
import { PageContext } from "../../../../renderer/types";
import { usePageContext } from "../../../../renderer/usePageContext";
import { navigate } from "vite-plugin-ssr/client/router";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default ({
  statusList = [],
  typeList = [],
  extendedList = [],
  className = "",
}: CatalogHeaderProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pageContext: PageContext = usePageContext();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getQueries = useMemo(
    () => pageContext?.urlParsed?.search || {},
    [pageContext?.urlParsed?.search]
  );
  const [searchText, setSearch] = useState("");
  const [status, setStatus] = useState(
    getQueries.status
      ? { key: "Status", value: getQueries.status }
      : { key: "Status", value: "not_set" }
  );
  const [type, setType] = useState(
    getQueries.type
      ? { key: "Type", value: getQueries.type }
      : { key: "Type", value: "not_set" }
  );
  const [extended, setExtended] = useState(
    getQueries.extended
      ? { key: "Extended", value: getQueries.extended }
      : { key: "Extended", value: "not_set" }
  );
  const submitFilters = () => {
    let url = `${pageContext.urlPathname}${
      Object.keys(getQueries).length
        ? `?${getQueryString({
            url: getQueries,
            filterKey: ["status", "type"],
          })}`
        : "?"
    }`;
    if (searchText) {
      url += `q=${searchText}&`;
    }
    if (type.value && type.value !== "not_set") {
      url += `type=${type.value}&`;
    }
    if (status.value && status.value !== "not_set") {
      url += `status=${type.value}`;
    }
    navigate(url, { keepScrollPosition: true });
  };
  return (
    <div className={`catalog-header ${className}`}>
      <SearchButton onText={setSearch} text={searchText} />
      {statusList.length ? (
        <FilterButton
          list={statusList}
          chooseData={setStatus}
          currentData={status}
        />
      ) : null}
      {typeList.length ? (
        <FilterButton list={typeList} chooseData={setType} currentData={type} />
      ) : null}
      {extendedList.length ? (
        <FilterButton
          list={extendedList}
          chooseData={setExtended}
          currentData={extended}
          icon={faFilter}
        />
      ) : null}
      <ButtonPrimary
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        onClick={() => submitFilters()}
      >
        Find
      </ButtonPrimary>
    </div>
  );
};
