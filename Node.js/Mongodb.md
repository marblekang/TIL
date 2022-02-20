## 1.NoSQL
- “Non Relational Operation Database SQL” 의 줄임말로써 “관계형 데이터베이스가 아닌 SQL”  이다. 일반적인 관계형 데이터베이스에서는 데이터의 중복을 제거하고 무결성을 보장하기 위해서 정규화를 하게 되는데 이러한 정규화가 과도한 JOIN으로 인해 성능 저하가 있을 수 있다. 하지만 NoSQL은 아래의 그림 처럼
중첩데이터 형태를 띔으로써 불필요한 JOIN 을 최소화시킨다.

<image src="https://t1.daumcdn.net/cfile/tistory/991B8B3359DB7A6505">

## 2.NoSQL의 장점

 1 ) 불필요한 Join의 최소화
 
 2 ) 유연성있는 서버 구조 제공

 3 ) 비정형 데이터 구조로 설계비용 감소
 
 4 ) Read/Write가 빠르며 빅데이터 처리가 가능
 * 일반적인 관계형 데이터베이스가 빠른 경우도 많다. 그리고 비정형 데이터로 인해 관계형 데이터베이스보다 1.5배정도 용량을 많이 차지한다.

 5 ) 저렴한 비용으로 분산처리 및 병렬처리 가능

## 3. NoSQL의 종류 및 대표모델

1 ) KEY-VALUE - Redis , Memcached          
2 ) COLUMN - Hbase, Casandra       
3 ) DOCUMENT - MongoDB       
4 ) GRAPH - GraphDB


## 4. Mongo DB
- Json 타입의 Document 방식의 NoSQL 이다. 특징은 다음과 같다.

1) JSON 형식의 데이터구조
2) CRUD위주의 다중 트랜잭션 처리 가능
3) Sharding(분산) / Replica(복제) 기능 제공
4) Memory Mapping기술을 기반으로 빅데이터 처리에 성능이 탁월
5) SQL 문법과 복잡한 자료형을 몰라도 사용 가능
6) 무료 호스팅 서비스 제공



