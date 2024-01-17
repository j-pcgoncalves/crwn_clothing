import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
    H2,
    P
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage style={{ 
                backgroundImage: `url(${imageUrl})` 
            }} />
            <Body>
                <H2>{title}</H2>
                <P>Shop Now</P>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;