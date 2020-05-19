import styled from "styled-components";
import {
    StyledFontLightBig,
    StyledFontRegularBig
} from "../../../../styled-component/mixins/SyledFonts";
import { StyledMainColor } from "../../../../styled-component/StylesColors";

export const StyledShopCollectionsPreviewItem = styled.div``;

export const StyledShopCollectionsPreviewItemImageWrapper = styled.div`
    display: flex;
    position: relative;
`;

export const StyledShopCollectionsPreviewItemImage = styled.img`
    width: 300px;
    height: 350px;
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`;

export const StyledShopCollectionsPreviewItemButton = styled.button`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: 260px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;
    ${StyledFontRegularBig}
    color: ${StyledMainColor};
    text-align: center;
    cursor: pointer;
    outline: none;

    ${StyledShopCollectionsPreviewItemImageWrapper}:hover & {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        background-color: ${StyledMainColor};
        color: white;
    }
`;

export const StyledShopCollectionsPreviewItemPrice = styled.div`
    display: flex;
    justify-content: space-between;
    ${StyledFontLightBig}
`;

export const StyledShopCollectionsPreviewItemPriceName = styled.div``;
export const StyledShopCollectionsPreviewItemPriceValue = styled.div``;
