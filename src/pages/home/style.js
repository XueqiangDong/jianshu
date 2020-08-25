import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin-left: 15px;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  margin-left: 18px;
  margin-bottom: 18px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;  
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: right;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const WriterItem = styled.div`
	width: 278px;
	height: 47px;
	line-height: 20px;
	margin-top: 15px;
	.writer-avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
	}
	.name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
	}
	.desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
	}
`;