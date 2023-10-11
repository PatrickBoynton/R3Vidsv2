import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { IconStyles } from '../../utils/styles'
import Icon from './Buttons/Icon'
import { useGetVideosQuery } from '../../slices/videoApiSlice'
import useVideoManegment from '../../hooks/useVideoManegment'



const SearchBox = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')
  const { data: videos, isFetching, refetch } = useGetVideosQuery({ keyword });

  const submitHandler = (e: any, keyword=''): void => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search?title=${keyword}`)
      setKeyword('')
      refetch()
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={e => submitHandler(e, keyword)}>
      <TextField
        id="search"
        label="Search for a Video"
        variant="outlined"
        value={keyword}
        placeholder="Search"
        onChange={e => setKeyword(e.target.value)}
        size="small"
      />
      <Icon  icon={<SearchIcon sx={IconStyles} />}  type="submit"/>
      <Icon icon={<ClearIcon sx={IconStyles} />} onClick={submitHandler} />
    </form>
  )
}

export default SearchBox
