import styled from 'styled-components'
import { SITE_CONTENT_LAYOUT } from '../../../common/constants/global'

export default styled.div`
    margin: 0 auto;
    max-width: ${SITE_CONTENT_LAYOUT.MAX_WIDTH};
    padding: ${SITE_CONTENT_LAYOUT.SIDE_PADDING};
    padding-top: ${SITE_CONTENT_LAYOUT.TOP_PADDING};
    padding-bottom: ${SITE_CONTENT_LAYOUT.BOTTOM_PADDING};
    width: 100%;
`
