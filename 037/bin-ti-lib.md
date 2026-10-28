# bin-ti-lib

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `config/application-example.properties`
2. `pom.xml`
3. `src/main/java/com/nuamx/bus/NuamSampleBusApp.java`
4. `src/main/java/com/nuamx/bus/kafka/NuamConsumerInterceptor.java`
5. `src/main/java/com/nuamx/bus/kafka/NuamKafkaConfig.java`
6. `src/main/java/com/nuamx/bus/kafka/NuamKafkaProperties.java`
7. `src/main/java/com/nuamx/bus/kafka/NuamProducerInterceptor.java`
8. `src/main/java/com/nuamx/bus/utils/GsonUtils.java`
9. `src/main/java/com/nuamx/bus/utils/NuamMessageUtils.java`
10. `src/main/java/com/nuamx/bus/utils/NuamTranslationUtils.java`
11. `src/main/java/com/nuamx/bus/utils/config/ApplicationContextProvider.java`
12. `src/main/java/com/nuamx/bus/utils/config/ConfigurationInterface.java`
13. `src/main/java/com/nuamx/bus/utils/config/ConfigurationUtils.java`
14. `src/main/java/com/nuamx/bus/utils/testing/TestKafkaConfig.java`
15. `src/main/java/com/nuamx/bus/utils/testing/TestKafkaProtobufSerdes.java`
16. `src/main/java/com/nuamx/bus/utils/time/TradingTime.java`
17. `src/main/java/com/nuamx/bus/utils/time/TradingTimer.java`
18. `src/main/java/com/nuamx/bus/utils/time/TradingTimerEntry.java`

## config/application-example.properties

```properties
# nuamx - Bus de Integración - Bilbioteca base
# Ejemplo de archivo de configuración

spring.kafka.nuam.bootstrap-servers=localhost:9092
spring.kafka.nuam.consumer.group-id=test-group
spring.kafka.nuam.consumer.auto-offset-reset=earliest
spring.kafka.nuam.properties.schema.registry.url=http://localhost:8081

```

## pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE project [
<!ENTITY hearts "entity-value">
]>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.nuamx</groupId>
  <artifactId>bus-lib</artifactId>
  <version>1.0.0</version>
  <name>nuamx Bus Lib</name>
  <description>
        Biblioteca conexión con el bus de Nuam Exchange. Completementa a bus-messages.
    </description>
  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <source.message.package>com.nuamx.bus.message</source.message.package>
  </properties>
  <repositories>
    <repository>
      <id>confluent</id>
      <url>https://packages.confluent.io/maven/</url>
    </repository>
  </repositories>
  <distributionManagement>
    <repository>
      <id>central</id>
      <name>artifactory-0-releases</name>
      <url>https://artifactory.nuamexchange.com/artifactory/bin-ti-local</url>
    </repository>
  </distributionManagement>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.7</version>
  </parent>
  <dependencies>

    <!-- Nuam Messages -->
    <dependency>
      <groupId>com.nuamx</groupId>
      <artifactId>bus-messages</artifactId>
      <version>1.0.0</version>
    </dependency>

    <!-- Spring boot -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-autoconfigure</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.kafka</groupId>
      <artifactId>spring-kafka</artifactId>
    </dependency>

    <!-- Protocol Buffers runtime -->
    <dependency>
        <groupId>com.google.protobuf</groupId>
        <artifactId>protobuf-java</artifactId>
        <version>3.25.5</version>
    </dependency>    
    <dependency>
        <groupId>com.google.protobuf</groupId>
        <artifactId>protobuf-java-util</artifactId>
        <version>3.25.5</version>
    </dependency>
    <dependency>
        <groupId>io.confluent</groupId>
        <artifactId>kafka-protobuf-serializer</artifactId>
        <version>7.9.0</version>       
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.19.2</version>
    </dependency>     

    <!-- Misc -->
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.38</version>
      <scope>provided</scope>
    </dependency>


    
    <!-- TESTS -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.12.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.kafka</groupId>
      <artifactId>spring-kafka-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>testcontainers</artifactId>
      <version>1.21.3</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>1.21.3</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>kafka</artifactId>
      <version>1.21.3</version>
      <scope>test</scope>
    </dependency>
  </dependencies>


  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmaven</groupId>
        <artifactId>groovy-maven-plugin</artifactId>
        <version>2.1.1</version>
        <executions>
          <execution>
            <phase>validate</phase>
            <goals>
              <goal>execute</goal>
            </goals>
            <configuration>
              <source>


								log.info("                                                  __                               ");
								log.info("   ____  __  ______ _____ ___     ___  _  _______/ /_  ____ _____  ____ ____       "); 
								log.info("  / __ \\/ / / / __ `/ __ `__ \\   / _ \\| |/_/ ___/ __ \\/ __ `/ __ \\/ __ `/ _ \\"); 
								log.info(" / / / / /_/ / /_/ / / / / / /  /  __/    / /__/ / / / /_/ / / / / /_/ /  __/      "); 
								log.info("/_/ /_/\\__,_/\\__,_/_/ /_/ /_/   \\___/_/|_|\\___/_/ /_/\\__,_/_/ /_/\\__, /\\___/"); 
                log.info("                                                                /____/              ");    								

								log.info("nuam exchange - With &hearts; by Bithaus Software"); 
								log.info(""); 

								log.info("${project.name} - Version ${project.version}");
								log.info("${project.description}");
								log.info(""); 								
								log.info("=====================================================================");
								log.info(" version   : ${project.version}");
								log.info(" finalname : ${build.finalName}.jar");
					
								log.info(" "); 

                            </source>
            </configuration>
          </execution>
        </executions>
      </plugin>
      <!-- display active profile in compile phase -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-help-plugin</artifactId>
        <version>3.5.1</version>
        <executions>
          <execution>
            <id>show-profiles</id>
            <phase>compile</phase>
            <goals>
              <goal>active-profiles</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <!-- Jacoco -->
      <plugin>
        <groupId>org.jacoco</groupId>
        <artifactId>jacoco-maven-plugin</artifactId>
        <version>0.8.13</version>
        <executions>
          <execution>
            <goals>
              <goal>prepare-agent</goal>
            </goals>
          </execution>
          <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
              <goal>report</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
 
    </plugins>
  </build>
</project>

```

## src/main/java/com/nuamx/bus/NuamSampleBusApp.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus;

import java.time.Duration;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Future;
import java.util.concurrent.Semaphore;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerGroupMetadata;
import org.apache.kafka.clients.consumer.ConsumerRebalanceListener;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.common.TopicPartition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.KafkaTemplate;

import com.google.protobuf.Message;
import com.nuamx.bus.message.simple.SimpleStringMessage;
import com.nuamx.bus.utils.NuamMessageUtils;

import jakarta.annotation.PostConstruct;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

/**
 * Aplicación de prueba Hola Mundo
 * 
 * Antes de ejecutar el programa se deben realizar los siguientes pasos:
 * 
 * 1. Tener un cluster de Kafka corriendo. Podría ser local vía docker o en un servidor remoto.
 * 
 * 2. Crear el tópico: 
 *    kafka-topics --create --topic el-topico --bootstrap-server localhost:9092 --partitions 2 --replication-factor 1
 *    
 *    Para borrar: kafka-topics --delete --topic el-topico --bootstrap-server localhost:9092 
 * DISCLAIMER
 * Actualmente la conexión está configurada para auto-registrar los schemas. 
 * Esto puede (queremos) cambiar en el futuro cercano.
 *      
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
// @SpringBootApplication(scanBasePackages = {"com.nuamx.bus.kafka"})
@SpringBootApplication
@Slf4j
public class NuamSampleBusApp {

    static {
        // Configuración de propiedades del sistema
        
        System.setProperty("spring.kafka.nuam.bootstrap-servers", "localhost:9092"); 
        System.setProperty("spring.kafka.nuam.properties.schema.registry.url", "http://localhost:8081"); 
        System.setProperty("spring.kafka.nuam.properties.allow.auto.create.topics", "false"); 
        // Producer
        System.setProperty("spring.kafka.nuam.producer.properties.key.serializer", "org.apache.kafka.common.serialization.StringSerializer"); 
        System.setProperty("spring.kafka.nuam.producer.properties.value.serializer", "io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializer"); 
        System.setProperty("spring.kafka.nuam.producer.properties.interceptor.classes", "com.nuamx.bus.kafka.NuamProducerInterceptor"); 
        System.setProperty("spring.kafka.nuam.producer.properties.value.subject.name.strategy", "io.confluent.kafka.serializers.subject.RecordNameStrategy"); 
        System.setProperty("spring.kafka.nuam.producer.properties.reference.subject.name.strategy", "io.confluent.kafka.serializers.subject.QualifiedReferenceSubjectNameStrategy"); 
        System.setProperty("spring.kafka.nuam.producer.properties.auto.register.schemas", "true"); 
        // Consumer
        System.setProperty("spring.kafka.nuam.consumer.properties.use.latest.version", "true"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.auto.offset.reset", "earliest"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.enable.auto.commit", "false"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.value.deserializer", "io.confluent.kafka.serializers.protobuf.KafkaProtobufDeserializer"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.value.subject.name.strategy", "io.confluent.kafka.serializers.subject.RecordNameStrategy"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.reference.subject.name.strategy", "io.confluent.kafka.serializers.subject.QualifiedReferenceSubjectNameStrategy"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.derive.type", "true"); 
        System.setProperty("spring.kafka.nuam.consumer.properties.interceptor.classes", "com.nuamx.bus.kafka.NuamConsumerInterceptor"); 
    }

    public static void main(String[] args) {
        // para que cada ejecución sea un cliente diferente y no tengamos que esperar rebalanceo
        // Si queremos replicar el funcionamiento normal, quitar el currentTimeMillis.
        // System.setProperty("spring.kafka.nuam.consumer.properties.group.id", "nuam-test" + System.currentTimeMillis()); 
        System.setProperty("spring.kafka.nuam.consumer.properties.group.id", "nuam-test"); 

        SpringApplication.run(NuamSampleBusApp.class, args);        
    }

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

    @Autowired
    private ConsumerFactory<String, Message> consumerFactory;

    @SneakyThrows
    @PostConstruct
    public void init() {

        log.info("Iniciando");

        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            log.info("Apagando la aplicación...");
            kafkaTemplate.destroy();    
        }));
        
        Producer<String, Message> producer = kafkaTemplate.getProducerFactory().createProducer();

        // Uso del mensaje generado. Una vez creado, no se puede modificar. 
        SimpleStringMessage message = com.nuamx.bus.message.simple.SimpleStringMessage.newBuilder()            
            .setData("Hola Mundo")            
            .build();

        // En un caso de negocio real, esto debería ser el timestamp del evento original
        long timestamp = System.currentTimeMillis();
    
        // Usar el utilitario para que se setee la llave y el timestamp a partir de los atributos del mensaje
        ProducerRecord<String, Message> producerRecord = NuamMessageUtils.createProducerRecord("el-topico", "la-llave", timestamp, message);
        Future<RecordMetadata> future = producer.send(producerRecord); 

        // Forzar el commit al broker
        producer.flush();

        RecordMetadata metadata = future.get();

        log.info("Mensaje enviado: topic={} partition={} offset={} timestamp={}", 
            metadata.topic(), metadata.partition(), metadata.offset(), metadata.timestamp());


            
        Consumer<String, Message> consumer = this.consumerFactory.createConsumer(); 
        consumer.subscribe(List.of("el-topico"), new ConsumerRebalanceListener() {
            @Override
            public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
                log.info("Revoked partitions: {}", partitions);
            }

            @Override
            public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
                log.info("Assigned partitions: {}", partitions);
            }
        });

        ConsumerGroupMetadata cgm = consumer.groupMetadata();

        log.info("Consumer group: {}", cgm.groupId());

        ConsumerRecords<String, Message> polledRecords = consumer.poll(Duration.ofSeconds(4));
   
        for(ConsumerRecord<String, Message> record : polledRecords) {
            log.info("Mensaje recibido: topic={} partition={} tipo={} offset={} key={} value={}", 
                record.topic(), record.partition(), record.value().getClass(), record.offset(), record.key(), record.value());
        }

        // controlar el commit al broker es bueno.
        consumer.commitSync();

        log.info("Fin de la aplicación");
    }
}

```

## src/main/java/com/nuamx/bus/kafka/NuamConsumerInterceptor.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.kafka;

import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerInterceptor;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.TopicPartition;

import com.google.protobuf.Message;

import lombok.extern.slf4j.Slf4j;

/**
 * Interceptor en la recepción de mensajes desde el tópico
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
@Slf4j
public class NuamConsumerInterceptor implements ConsumerInterceptor<String, Message> {

  @Override
  public void configure(Map<String, ?> configs) {
    
    log.info("Init OK");
  }

  @Override
  public ConsumerRecords<String, Message> onConsume(ConsumerRecords<String, Message> records) {

    return records;
  }

  @Override
  public void onCommit(Map<TopicPartition, OffsetAndMetadata> offsets) {
    
  }

  @Override
  public void close() {
    
  }

}
```

## src/main/java/com/nuamx/bus/kafka/NuamKafkaConfig.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */

package com.nuamx.bus.kafka;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serializer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;

import com.google.protobuf.Message;

import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufDeserializer;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufDeserializerConfig;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializer;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializerConfig;
import io.confluent.kafka.serializers.subject.QualifiedReferenceSubjectNameStrategy;
import io.confluent.kafka.serializers.subject.RecordNameStrategy;
import jakarta.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * Inicialización de Kafka para nuam en base a las propiedades en {@link NuamKafkaProperties} 
 * las cuales son leídas desde las propiedades con prefijo "spring.kafka.nuam".
 * <br>
 * <br>
 * 
 * <b>Siempre debe utilizarse esta clase para inicializar el entorno Springboot con Kafka.</b>
 * <br>
 * <br>
 * Responsable de:
 * <ul>
 *  <li>Proveer Beans para {@link KafkaTemplate}, {@link KafkaListenerContainerFactory},
 *  {@link ProducerFactory} y {@link ConsumerFactory} para mensajes de nuam.</li>
 *  <li>Configurar los serializadores y deserializadores</li>
 *  <li>Setear las configuracicones base estrictas para productores y consumidores</li>
 * </ul>
 * <br>
 * <br>
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
@Slf4j
@Data
@Configuration
@SuppressWarnings("rawtypes")
public class NuamKafkaConfig {

    @Autowired
    private NuamKafkaProperties kafkaProperties;
    
    /**
     * NOTA DE DESARROLLADOR
     * 
     * Esta clase configura las opciones forzadas de la conexión con el cluster Kafka. 
     * Detalles de seguridad y opciones avanzadas se dejan libres para ser configuradas
     * vía application.properties / application.yml.
     * 
     * Importante destacar que la clase de configuración es personalizada {@link NuamKafkaProperties}
     * para no interferir con las otras configuraciones Kafka que puedan existir en la aplicación.
     * 
     * PREFIJO PROPIEDADES: spring.kafka.nuam
     * 
     * - Mejorar la configuración del container factory
     */




    /**
     * 
     * 
     *                  **********    ATENCION   **********
     * 
     *  Si se hacen modificaciones a este proyecto, también debe modificarse la versión 
     *            Java 8 para que no haya incompatibilidades. 
     * 
     *              https://github.com/nuamx/bin-ti-bus-lib-java8
     * 
     * 
     *      DE VERDAD, NO TE OLVIDES DE MODIFICAR EL OTRO PROYECTO TAMBIÉN!
     * 
     * 
     */







    private Class<? extends Serializer> keySerializer = StringSerializer.class;
    private Class<? extends Serializer> valueSerializer = KafkaProtobufSerializer.class;

    private Class<? extends Deserializer> keyDeserializer = StringDeserializer.class;
    private Class<? extends Deserializer> valueDeserializer = KafkaProtobufDeserializer.class;
 
    @PostConstruct
    public void postConstruct() {

        log.info("Bootstrap servers: {}", kafkaProperties.getBootstrapServers());
        log.info("Schema registry URL: {}", kafkaProperties.getProperties().get("schema.registry.url"));        
    }

    @Bean
    KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, Message>> kafkaListenerContainerFactory(NuamKafkaProperties kafkaProperties) {
        ConcurrentKafkaListenerContainerFactory<String, Message> factory =
                                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory(kafkaProperties));

        // TODO: ver la configuración de concurrency, polltimeout, etc

        return factory;
    }    

    /**
     * Producer factory para mensajes de nuam
     */
    @Lazy
    @Bean
    public ProducerFactory<String, Message> producerFactory(NuamKafkaProperties kafkaProperties) {

        Map<String, Object> config = new HashMap<>(kafkaProperties.buildConsumerProperties(null));
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, this.keySerializer.getName());
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, this.valueSerializer.getName());
        config.put("allow.auto.create.topics", "false");

        /**
         * NOTA DE DESARROLLADOR
         * Abril 2025 - jmakuc
         * En protobuf no se puede solo registrar el schema del mensaje, sino que
         * también los de los objetos que contiene.
         * Así, es complicado hacer al registro en las pruebas y por el momento
         * se decidió dejar que se autoregistre. Contacta a jmakuc@bithaus.cl para más info. 
         * Se podría dejar así en producción (aunque no me gusta) dado que el equipo bus controla
         * el proyecto de mensajes y eso disminuye el riesgo de que se registren
         * schemas no deseados. (Igual podría pasar si alguien llega con el primer
         * mensaje en un tópico y hay colisión de nombres)
         * 
         */

        // config.put("auto.register.schemas", "false");
        config.put("value.subject.name.strategy", RecordNameStrategy.class.getName());
        config.put(KafkaProtobufSerializerConfig.REFERENCE_SUBJECT_NAME_STRATEGY_CONFIG, QualifiedReferenceSubjectNameStrategy.class.getName());
        config.put(ProducerConfig.INTERCEPTOR_CLASSES_CONFIG, NuamProducerInterceptor.class.getName());        

        return new DefaultKafkaProducerFactory<>(config);
    
    }

    @Lazy
    @Bean
    public ConsumerFactory<String, Message> consumerFactory(NuamKafkaProperties kafkaProperties) {

        Map<String, Object> consumerConfig = new HashMap<>(kafkaProperties.buildConsumerProperties(null));
        consumerConfig.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, this.keyDeserializer.getName());
        consumerConfig.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, this.valueDeserializer.getName());
        consumerConfig.put("allow.auto.create.topics", "false");
        consumerConfig.put("auto.register.schemas", "false");
        consumerConfig.put("use.latest.version", "true");
        consumerConfig.put("value.subject.name.strategy", RecordNameStrategy.class.getName());
        consumerConfig.put(KafkaProtobufDeserializerConfig.DERIVE_TYPE_CONFIG, true);
        consumerConfig.put(ConsumerConfig.INTERCEPTOR_CLASSES_CONFIG, NuamConsumerInterceptor.class.getName());

        return new DefaultKafkaConsumerFactory<>(consumerConfig);
    }

    @Lazy
    @Bean
    public KafkaTemplate<String, Message> kafkaTemplate(NuamKafkaProperties kafkaProperties) {
        KafkaTemplate<String, Message> template = new KafkaTemplate<>(producerFactory(kafkaProperties));
        template.setConsumerFactory(consumerFactory(kafkaProperties));            
        return template;
    }

    @Lazy
    @Bean
    public KafkaAdmin kafkaAdmin(NuamKafkaProperties kafkaProperties) {
        Map<String, Object> config = new HashMap<>(kafkaProperties.buildAdminProperties(null));
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, this.keySerializer.getName());
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, this.valueSerializer.getName());
        config.put("allow.auto.create.topics", "false");
        return new KafkaAdmin(config);
    }
 

    @Lazy
    @Bean
    public SchemaRegistryClient schemaRegistryClient() {

        String schemaRegistryUrl = kafkaProperties.getProperties().get("schema.registry.url");

        if (schemaRegistryUrl == null || schemaRegistryUrl.isEmpty()) {
            throw new IllegalArgumentException("Schema registry URL not found in properties");
        }
        
        log.info("Schema registry URL: {}", schemaRegistryUrl);
        return new CachedSchemaRegistryClient(schemaRegistryUrl, 100); 
    }

}

```

## src/main/java/com/nuamx/bus/kafka/NuamKafkaProperties.java

```java
package com.nuamx.bus.kafka;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.kafka.clients.CommonClientConfigs;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Consumer;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Jaas;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Listener;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Producer;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Retry;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Security;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Ssl;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Streams;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Template;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.ssl.SslBundles;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.CollectionUtils;

import lombok.Data;

/**
 * Clase de configuración Kafka para nuam.
 * Obtiene los valores desde las propiedades con prefijo "spring.kafka.nuam" 
 * y funciona igual que {@link org.springframework.boot.autoconfigure.kafka.KafkaProperties}.
 * 
 * <br>
 * <br>
 * Se crea con el objetivo de no mezclar las propiedades de Kafka de nuam con las propiedades
 * de Kafka de otras integraciones. 
 * <br>
 * 
 * @see org.springframework.boot.autoconfigure.kafka.KafkaProperties
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "spring.kafka.nuam")
public class NuamKafkaProperties {

  /**
   * CONTENIDO COPIADO DE org.springframework.boot.autoconfigure.kafka.KafkaProperties
   */




	/**
	 * List of host:port pairs to use for establishing the initial connections to the
	 * Kafka cluster. Applies to all components unless overridden.
	 */
	private List<String> bootstrapServers = new ArrayList<>();

	/**
	 * ID to pass to the server when making requests. Used for server-side logging.
	 */
	private String clientId;

	/**
	 * Additional properties, common to producers and consumers, used to configure the
	 * client.
	 */
	private final Map<String, String> properties = new HashMap<>();

	private final Consumer consumer = new Consumer();

	private final Producer producer = new Producer();

	private final Admin admin = new Admin();

	private final Streams streams = new Streams();

	private final Listener listener = new Listener();

	private final Ssl ssl = new Ssl();

	private final Jaas jaas = new Jaas();

	private final Template template = new Template();

	private final Security security = new Security();

	private final Retry retry = new Retry();  



	private Map<String, Object> buildCommonProperties(SslBundles sslBundles) {
		Map<String, Object> properties = new HashMap<>();
		if (this.bootstrapServers != null) {
			properties.put(CommonClientConfigs.BOOTSTRAP_SERVERS_CONFIG, this.bootstrapServers);
		}
		if (this.clientId != null) {
			properties.put(CommonClientConfigs.CLIENT_ID_CONFIG, this.clientId);
		}
		properties.putAll(this.ssl.buildProperties(sslBundles));
		properties.putAll(this.security.buildProperties());
		if (!CollectionUtils.isEmpty(this.properties)) {
			properties.putAll(this.properties);
		}
		return properties;
	}

	/**
	 * Create an initial map of consumer properties from the state of this instance.
	 * <p>
	 * This allows you to add additional properties, if necessary, and override the
	 * default {@code kafkaConsumerFactory} bean.
	 * @param sslBundles bundles providing SSL trust material
	 * @return the consumer properties initialized with the customizations defined on this
	 * instance
	 */
	public Map<String, Object> buildConsumerProperties(SslBundles sslBundles) {
		Map<String, Object> properties = buildCommonProperties(sslBundles);
		properties.putAll(this.consumer.buildProperties(sslBundles));
		return properties;
	}

	/**
	 * Create an initial map of producer properties from the state of this instance.
	 * <p>
	 * This allows you to add additional properties, if necessary, and override the
	 * default {@code kafkaProducerFactory} bean.
	 * @param sslBundles bundles providing SSL trust material
	 * @return the producer properties initialized with the customizations defined on this
	 * instance
	 */
	public Map<String, Object> buildProducerProperties(SslBundles sslBundles) {
		Map<String, Object> properties = buildCommonProperties(sslBundles);
		properties.putAll(this.producer.buildProperties(sslBundles));
		return properties;
	}

	/**
	 * Create an initial map of admin properties from the state of this instance.
	 * <p>
	 * This allows you to add additional properties, if necessary, and override the
	 * default {@code kafkaAdmin} bean.
	 * @param sslBundles bundles providing SSL trust material
	 * @return the admin properties initialized with the customizations defined on this
	 * instance
	 */
	public Map<String, Object> buildAdminProperties(SslBundles sslBundles) {
		Map<String, Object> properties = buildCommonProperties(sslBundles);
		properties.putAll(this.admin.buildProperties(sslBundles));
		return properties;
	}

	/**
	 * Create an initial map of streams properties from the state of this instance.
	 * <p>
	 * This allows you to add additional properties, if necessary.
	 * @param sslBundles bundles providing SSL trust material
	 * @return the streams properties initialized with the customizations defined on this
	 * instance
	 */
	public Map<String, Object> buildStreamsProperties(SslBundles sslBundles) {
		Map<String, Object> properties = buildCommonProperties(sslBundles);
		properties.putAll(this.streams.buildProperties(sslBundles));
		return properties;
	}  
}

```

## src/main/java/com/nuamx/bus/kafka/NuamProducerInterceptor.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.kafka;

import java.time.Instant;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerInterceptor;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

import com.google.protobuf.Descriptors.FieldDescriptor;
import com.google.protobuf.Descriptors.Descriptor;
import com.google.protobuf.Message;
import com.google.protobuf.Timestamp;
import com.google.protobuf.util.Timestamps;
import com.nuamx.bus.message.NuamMessageInterface;
import com.nuamx.bus.message.common.Metadata;

import lombok.extern.slf4j.Slf4j;

/**
 * Interceptor en la producción de mensajes hacia el tópico
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
@Slf4j
public class NuamProducerInterceptor implements ProducerInterceptor<String, Message> {

  // Constantes para los nombres de campos
  private static final String METADATA_FIELD_NAME = "metadata";
  private static final String BUS_TIME_FIELD_NAME = "busTime";

  @Override
  public void configure(Map<String, ?> configs) {
    log.info("Init OK");     
  }

  /**
   * Actualiza los metadatos del mensaje antes de ser enviado
   */
  @Override
  public ProducerRecord<String, Message> onSend(ProducerRecord<String, Message> record) {
    
    if(record.value() == null)
      return record;
    
    if(!NuamMessageInterface.class.isAssignableFrom(record.value().getClass())) {
      throw new RuntimeException("Mensajes que pasan por el bus DEBEN imeplementar NuamMessageInterface. Revisa tu especificación Protobuf y el generador de código.");
    }
    
    NuamMessageInterface message = (NuamMessageInterface) record.value();

    if(message.getBase() == null)
      throw new RuntimeException("Mensaje no tiene campos base. Todos los producer records deben ser generados usando NuamMessageUtils.");

    Metadata metadata = message.getBase().getMetadata();

    if(metadata == null)
      throw new RuntimeException("Mensaje no tiene metadatos. Todos los producer records deben ser generados usando NuamMessageUtils.");

    if(metadata.getBusTime() == null || metadata.getTopic() == null || metadata.getKey() == null)
      throw new RuntimeException("Mensaje no tiene metadatos completos. Todos los producer records deben ser generados usando NuamMessageUtils.");

    return record;
    
  }

  @Override
  public void onAcknowledgement(RecordMetadata metadata, Exception exception) {
    // Sería interesante hacer algo aquí?
  }

  @Override
  public void close() {
    // Bye bye!
  }

}

```

## src/main/java/com/nuamx/bus/utils/GsonUtils.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.utils;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Utilitario para centralizar la configuración de Gson.
 * Resuelve:
 * - Los problemas de acceso en Java 17 a LocalDate y Instant.
 * 
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
public class GsonUtils {

    private static GsonBuilder GSON_BUILDER = new GsonBuilder()
        .serializeNulls()
        .registerTypeAdapter(LocalDate.class, new Gson_LocalDateTypeAdapter())  
        .registerTypeAdapter(Instant.class, new Gson_InstantTypeAdapter());

    private static Gson GSON = GSON_BUILDER.create();

    private static Gson GSON_PRETTY_PRINT = GSON_BUILDER.setPrettyPrinting().create();


    /**
     * Obtiene la instancia singleton de Gson.
     * @return Gson.
     */
    public static Gson getGson() {
        return GSON;
    }

    /**
     * Obtiene la instancia singleton de Gson con pretty print.
     * @return Gson con pretty print.
     */
    public static Gson getGsonPrettyPrint() {
        return GSON_PRETTY_PRINT;
    }


    /**
     * TypeAdapter que ayuda a Gson a acceder a los campos de Instant.
     */
    public static class Gson_InstantTypeAdapter extends TypeAdapter < Instant >
    {
        @Override
        public void write ( JsonWriter jsonWriter , Instant instant ) throws IOException
        {
            jsonWriter.value( instant.toString() );  // Writes in standard ISO 8601 format.
        }

        @Override
        public Instant read ( JsonReader jsonReader ) throws IOException
        {
            return Instant.parse( jsonReader.nextString() );   // Parses standard ISO 8601 format.
        }
    }    
    

    /**
     * TypeAdapter que ayuda a Gson a acceder a los campos de LocalDate.
     */
    public static class Gson_LocalDateTypeAdapter extends TypeAdapter<LocalDate> {
    @Override
    public void write(JsonWriter jsonWriter, LocalDate localDate) throws IOException {
        jsonWriter.value(localDate.toString());  // Writes in standard ISO 8601 format.
    }

    @Override
    public LocalDate read(JsonReader jsonReader) throws IOException {
        return LocalDate.parse(jsonReader.nextString());  // Parses standard ISO 8601 format.
    }
}    
}

```

## src/main/java/com/nuamx/bus/utils/NuamMessageUtils.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.utils;

import java.time.LocalDate;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.producer.ProducerRecord;

import com.google.protobuf.Descriptors.FieldDescriptor;
import com.google.protobuf.Message;
import com.google.protobuf.util.Timestamps;
import com.nuamx.bus.message.NuamMessage;
import com.nuamx.bus.message.NuamMessageInterface;
import com.nuamx.bus.message.common.Country;
import com.nuamx.bus.message.common.Metadata;
import com.nuamx.bus.message.common.SourceSystem;

import lombok.extern.slf4j.Slf4j;

/**
 * Utilitarios para el manejo de mensajes
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
@Slf4j
public class NuamMessageUtils {

    /**
     * Crea un objeto Metadata a partir de un ConsumerRecord
     * 
     * @param record
     * @return
     */
    public static com.nuamx.bus.message.common.Metadata enhanceMetadataWith(ConsumerRecord<?, Message> record) {

        if (record == null || record.value() == null) {
            return null;
        }

        if(!record.value().getClass().isAssignableFrom(NuamMessageInterface.class)) {
            log.warn("Recibido mensaje que no implementa NuamMessageInterface, descartando: " + record.value().getClass());
            return null;
        }

        NuamMessageInterface message = (NuamMessageInterface) record.value();

        com.nuamx.bus.message.common.Metadata metadata = message.getBase().getMetadata();

        return com.nuamx.bus.message.common.Metadata.newBuilder(metadata)
                .setPartition(record.partition())
                .setOffset(record.offset())
                .build();
        
    }

    /**
     * Crea un ProducerRecord a partir de un mensaje NuamMessageInterface.
     * @param topic Tópico en el bus
     * @param key Llave de particionamiento
     * @param timestampMillis Timestamp en milisegundos a setear en el tópico
     * @param message Mensaje a enviar al bus
     * @return ProducerRecord con el mensaje y metadatos
     */
    public static ProducerRecord<String, Message> createProducerRecord(String topic, String key, Long timestampMillis, NuamMessageInterface message) {

        if(topic == null || topic.isEmpty()) {
            throw new RuntimeException("Tópico de salida es requerido"); 
        }

        if(timestampMillis == null) {
            timestampMillis = System.currentTimeMillis();
        }

        // tendremos particionado propio? Por ahora nop. 
        Integer partition = null;

        if(!NuamMessageInterface.class.isAssignableFrom(message.getClass())) {
            throw new RuntimeException("Solo se pueden enviar mensajes que implementen NuamMessageInterface. Revisa tu especificación Protobuf y el generador de código.");            
        }

        FieldDescriptor baseField = message.getDescriptorForType().findFieldByName("base");
        Message baseMessage = (Message) message.getField(baseField);

        Message updatedBase = baseMessage.toBuilder()
            .setField(baseMessage.getDescriptorForType().findFieldByName("metadata"),
            com.nuamx.bus.message.common.Metadata.newBuilder()
                .setTopic(topic)
                .setKey(key)
                .setTimestamp(timestampMillis)
                .setBusTime(Timestamps.fromMillis(timestampMillis))
                .build())
            .build();

        Message enriched = message.toBuilder().setField(baseField, updatedBase).build();


        return new ProducerRecord<>(topic, partition, timestampMillis, key, enriched);

    }


    public static ProducerRecord<String, Message> createProducerRecord(String topic, NuamMessageInterface message) {

        if(message.getBase() != null && message.getBase().getMetadata() != null) {

            if(topic == null || topic.isEmpty()) {

                if(message.getBase().getMetadata().getTopic() == null || message.getBase().getMetadata().getTopic().isEmpty()) {
                    throw new RuntimeException("Tópico de salida es requerido"); 
                } else {
                    topic = message.getBase().getMetadata().getTopic();
                }                
            }

            if(message.getBase().getMetadata().getKey() == null || message.getBase().getMetadata().getKey().isEmpty()) {
                throw new RuntimeException("Llave de particionamiento es requerida");        
            }

            if(!message.getBase().getMetadata().hasTimestamp()) {
                throw new RuntimeException("Timestamp es requerido");
            }
    
        }

        Long timestamp = message.getBase().getMetadata().getTimestamp();
        String key = message.getBase().getMetadata().getKey();

        // tendremos particionado propio? Por ahora nop. 
        Integer partition = null;

        if(!NuamMessageInterface.class.isAssignableFrom(message.getClass())) {
            throw new RuntimeException("Solo se pueden enviar mensajes que implementen NuamMessageInterface. Revisa tu especificación Protobuf y el generador de código.");            
        }

        FieldDescriptor baseField = message.getDescriptorForType().findFieldByName("base");
        NuamMessage baseMessage = (NuamMessage) message.getField(baseField);

        Metadata metadata = baseMessage.getMetadata().toBuilder()
            .setTopic(topic)
            .setBusTime(Timestamps.fromMillis(timestamp))
            .build();

        baseMessage.toBuilder().setMetadata(metadata);

        Message enriched = message.toBuilder().setField(baseField, baseMessage).build();


        return new ProducerRecord<>(topic, partition, timestamp, key, enriched);

    }


    public static String generateUniqueTradeId(Country country, SourceSystem sourceSystem, LocalDate date, String tradeId) {
        return country + "-" + sourceSystem + "-" + date + "-" + tradeId;
    }    

    /**
     * Crea un ProducerRecord a partir de un mensaje NuamMessageInterface cuyos metadatos 
     * han sido setados previamente. Si no hay topico, llave o timestamp; se lanzará una
     * RuntimeException.
     * @param message Mensaje a enviar al bus
     * @return ProducerRecord con el mensaje y metadatos
     * @throws RuntimeException si el mensaje no tiene metadatos o si no se han seteado
     */
    // public static ProducerRecord<String, Message> createProducerRecord(NuamMessageInterface message) {

    //     if(message.getBase() == null)
    //         throw new RuntimeException("Mensaje no tiene campos base. Todos los producer records deben ser generados usando NuamMessageUtils.");

    //     if(message.getBase().getMetadata() == null)
    //         throw new RuntimeException("Mensaje no tiene metadatos. Todos los producer records deben ser generados usando NuamMessageUtils.");

    //     com.nuamx.bus.message.common.Metadata metadata = message.getBase().getMetadata();

    //     if(metadata.getTopic() == null)
    //         throw new RuntimeException("Tópico de salida es requerido"); 

    //     if(metadata.getKey() == null)
    //         throw new RuntimeException("Llave de particionamiento es requerida");        

    //     return createProducerRecord(message.getBase().getMetadata().getTopic(), message.getBase().getMetadata().getKey(), message.getBase().getMetadata().getTimestamp(), message);
    // }
}

```

## src/main/java/com/nuamx/bus/utils/NuamTranslationUtils.java

```java
package com.nuamx.bus.utils;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import com.google.protobuf.Timestamp;
import com.nuamx.bus.message.common.Currency;
import com.nuamx.bus.message.common.Decimal;
import com.nuamx.bus.message.common.ExecInst;
import com.nuamx.bus.message.common.ExecType;
import com.nuamx.bus.message.common.MarketEventType;
import com.nuamx.bus.message.common.OrderSide;
import com.nuamx.bus.message.common.OrderStatus;
import com.nuamx.bus.message.common.SettlementType;
import com.nuamx.bus.message.common.TimeInForce;

public class NuamTranslationUtils {

  public static com.nuamx.bus.message.common.Date toDate(LocalDate dateToConvert) {
    if (dateToConvert == null) {
      return null;
    }
    return com.nuamx.bus.message.common.Date.newBuilder()
        .setYear(dateToConvert.getYear())
        .setMonth(dateToConvert.getMonthValue())
        .setDay(dateToConvert.getDayOfMonth())
        .build();
  }

  public static com.nuamx.bus.message.common.Date toDate(Date dateToConvert) {
    if (dateToConvert == null) {
      return null;
    }

    LocalDate localDate = dateToConvert.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    return com.nuamx.bus.message.common.Date.newBuilder()
        .setYear(localDate.getYear())
        .setMonth(localDate.getMonthValue())
        .setDay(localDate.getDayOfMonth())
        .build();
  }

  public static com.nuamx.bus.message.common.Date toDate(LocalDateTime dateToConvert) {
    if (dateToConvert == null) {
      return null;
    }
    return com.nuamx.bus.message.common.Date.newBuilder()
        .setYear(dateToConvert.getYear())
        .setMonth(dateToConvert.getMonthValue())
        .setDay(dateToConvert.getDayOfMonth())
        .build();
  }

  public static Timestamp toTimestamp(LocalDateTime dateToConvert) {
    if (dateToConvert == null) {
      return null;
    }
    return Timestamp.newBuilder()
        .setSeconds(dateToConvert.atZone(ZoneId.systemDefault()).toInstant().getEpochSecond())
        .setNanos(dateToConvert.getNano())
        .build();
  }

  public static Instant toInstant(Timestamp timestamp) {
    if (timestamp == null) {
      return null;
    }
    return Instant.ofEpochSecond(timestamp.getSeconds(), timestamp.getNanos());
  }

  public static LocalDateTime toLocalDateTime(Timestamp timestamp) {
    if (timestamp == null) {
      return null;
    }
    return LocalDateTime.ofInstant(
        Instant.ofEpochSecond(timestamp.getSeconds(), timestamp.getNanos()), ZoneId.systemDefault());
  }

  public static Timestamp toTimestamp(Instant instant) {
    if (instant == null) {
      return null;
    }
    return Timestamp.newBuilder()
        .setSeconds(instant.getEpochSecond())
        .setNanos(instant.getNano())
        .build();
  }

  public static Currency toCurrency(String currency) {
    if (currency == null) {
      return null;
    }
    switch (currency) {

      case "CLP":
        return Currency.CURRENCY_CLP;
      case "COP":
        return Currency.CURRENCY_COP;
      case "PEN":
        return Currency.CURRENCY_PEN;
      case "DOP":
        return Currency.CURRENCY_DOP;
      case "CRC":
        return Currency.CURRENCY_CRC;
      case "USD":
        return Currency.CURRENCY_USD;
      case "EUR":
        return Currency.CURRENCY_EUR;
    }

    return Currency.CURRENCY_UNSPECIFIED;
  }

  public static Decimal toDecimal(BigDecimal value) {
    if (value == null) {
      return null;
    }
    return Decimal.newBuilder()
        .setValue(value.toString())
        .build();
  }

  public static LocalDate toLocalDate(com.nuamx.bus.message.common.Date date) {
    if (date == null) {
      return null;
    }
    return LocalDate.of(date.getYear(), date.getMonth(), date.getDay());
  }

  public static MarketEventType marketEventTypeFromFixValue(String fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case "1":
        return MarketEventType.MARKET_EVENT_TYPE_MARKET_EVENT;
      case "2":
        return MarketEventType.MARKET_EVENT_TYPE_SYMBOL_NEWS;
      case "3":
        return MarketEventType.MARKET_EVENT_TYPE_SYMBOL_SUSPENSION;
      case "4":
        return MarketEventType.MARKET_EVENT_TYPE_ALARM;
      case "5":
        return MarketEventType.MARKET_EVENT_TYPE_CROSS_ORDER;
      case "6":
        return MarketEventType.MARKET_EVENT_TYPE_SYMBOL_RESUME;
      case "7":
        return MarketEventType.MARKET_EVENT_TYPE_LOCAL_NEWS;
      case "8":
        return MarketEventType.MARKET_EVENT_TYPE_MARKET_NEWS;
      case "9999":
        return MarketEventType.MARKET_EVENT_TYPE_OTHER;
      default:
        return null;
    }
  }  

  public static SettlementType settlementTypeFromFixValue(String fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case "0":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_0;
      case "1":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_1;
      case "2":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_2;
      case "3":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_3;
      case "4":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_4;
      case "5":
        return SettlementType.SETTLEMENT_TYPE_T_PLUS_5;
      default:
        return SettlementType.SETTLEMENT_TYPE_UNSPECIFIED;
      }
  }

  public static ExecType execTypeFromFixValue(String fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case "0":
        return ExecType.EXEC_TYPE_NEW;
      case "3":
        return ExecType.EXEC_TYPE_DONE_FOR_DAY;
      case "4":
        return ExecType.EXEC_TYPE_CANCELED;
      case "5":
        return ExecType.EXEC_TYPE_REPLACED;
      case "6":
        return ExecType.EXEC_TYPE_PENDING_CANCEL;
      case "7":
        return ExecType.EXEC_TYPE_STOPPED;
      case "8":
        return ExecType.EXEC_TYPE_REJECTED;
      case "9":
        return ExecType.EXEC_TYPE_SUSPENDED;
      case "A":
        return ExecType.EXEC_TYPE_PENDING_NEW;
      case "B":
        return ExecType.EXEC_TYPE_CALCULATED;
      case "C":
        return ExecType.EXEC_TYPE_EXPIRED;
      case "D":
        return ExecType.EXEC_TYPE_RESTATED;
      case "E":
        return ExecType.EXEC_TYPE_PENDING_REPLACE;
      case "F":
        return ExecType.EXEC_TYPE_TRADE_ADD;
      case "G":
        return ExecType.EXEC_TYPE_TRADE_CORRECT;
      case "H":
        return ExecType.EXEC_TYPE_TRADE_CANCEL;
      case "I":
        return ExecType.EXEC_TYPE_ORDER_STATUS;        
    }
    return ExecType.EXEC_TYPE_UNSPECIFIED;
  }

  public static OrderStatus orderStatusFromFixValue(Character fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case '0':
        return OrderStatus.ORDER_STATUS_NEW;
      case '1':
        return OrderStatus.ORDER_STATUS_PARTIALLY_FILLED;
      case '2':
        return OrderStatus.ORDER_STATUS_FILLED;
      case '3':
        return OrderStatus.ORDER_STATUS_DONE_FOR_DAY;
      case '4':
        return OrderStatus.ORDER_STATUS_CANCELLED;
      case '5':
        return OrderStatus.ORDER_STATUS_REPLACED;
      case '6':
        return OrderStatus.ORDER_STATUS_PENDING_CANCEL;
      case '7':
        return OrderStatus.ORDER_STATUS_STOPPED;
      case '8':
        return OrderStatus.ORDER_STATUS_REJECTED;
      case '9':
        return OrderStatus.ORDER_STATUS_SUSPENDED;
      case 'A':
        return OrderStatus.ORDER_STATUS_PENDING_NEW;
      case 'B':
        return OrderStatus.ORDER_STATUS_CALCULATED;
      case 'C':
        return OrderStatus.ORDER_STATUS_EXPIRED;
      case 'D':
        return OrderStatus.ORDER_STATUS_ACCEPTED_FOR_BIDDING;
      case 'E':
        return OrderStatus.ORDER_STATUS_PENDING_REPLACE;        
    }
    return OrderStatus.ORDER_STATUS_UNSPECIFIED;
  }


  public static OrderSide orderSideFromFixValue(Character fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case '1':
        return OrderSide.ORDER_SIDE_BUY;
      case '2':
        return OrderSide.ORDER_SIDE_SELL;
      case '3':
        return OrderSide.ORDER_SIDE_BUY_MINUS;
      case '4':
        return OrderSide.ORDER_SIDE_SELL_PLUS;
      case '5':
        return OrderSide.ORDER_SIDE_SELL_SHORT;
      case '6':
        return OrderSide.ORDER_SIDE_SELL_SHORT_EXEMPT;
    }
    return OrderSide.ORDER_SIDE_UNSPECIFIED;
  }

  public static TimeInForce timeInForceFromFixValue(Character fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case '0':
        return TimeInForce.TIME_IN_FORCE_DAY;
      case '1':
        return TimeInForce.TIME_IN_FORCE_GOOD_TILL_CANCEL;
      case '2':
        return TimeInForce.TIME_IN_FORCE_AT_THE_OPENING;
      case '3':
        return TimeInForce.TIME_IN_FORCE_IMMEDIATE_OR_CANCEL;
      case '4':
        return TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
      case '5':
        return TimeInForce.TIME_IN_FORCE_GOOD_TILL_CROSSING;
      case '6':
        return TimeInForce.TIME_IN_FORCE_GOOD_TILL_DATE;
    }
    return TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
  }

  public static ExecInst execInstFromFixValue(Character fixValue) {
    if (fixValue == null) {
      return null;
    }
    
    switch (fixValue) {
      case '0':
        return ExecInst.EXEC_INST_STAY_ON_OFFER_SIDE;
      case '1':
        return ExecInst.EXEC_INST_NOT_HELD;
      case '2':
        return ExecInst.EXEC_INST_WORK;
      case '3':
        return ExecInst.EXEC_INST_GO_ALONG;
      case '4':
        return ExecInst.EXEC_INST_OVER_THE_DAY;
      case '5':
        return ExecInst.EXEC_INST_HELD;
      case '6':
        return ExecInst.EXEC_INST_PARTICIPATE_DONT_INITIATE;
      case '7':
        return ExecInst.EXEC_INST_STRICT_SCALE;
      case '8':
        return ExecInst.EXEC_INST_TRY_TO_SCALE;
      case '9':
        return ExecInst.EXEC_INST_STAY_ON_BID_SIDE;
      case 'A':
        return ExecInst.EXEC_INST_NO_CROSS;
      case 'B':
        return ExecInst.EXEC_INST_OK_TO_CROSS;
      case 'C':
        return ExecInst.EXEC_INST_CALL_FIRST;
      case 'D':
        return ExecInst.EXEC_INST_PERCENT_OF_VOLUME;
      case 'E':
        return ExecInst.EXEC_INST_DO_NOT_INCREASE;
      case 'F':
        return ExecInst.EXEC_INST_DO_NOT_REDUCE;
      case 'G':
        return ExecInst.EXEC_INST_ALL_OR_NONE;
      case 'H':
        return ExecInst.EXEC_INST_REINSTATE_ON_SYSTEM_FAILURE;
      case 'I':
        return ExecInst.EXEC_INST_INSTITUTIONS_ONLY;
      case 'J':
        return ExecInst.EXEC_INST_REINSTATE_ON_TRADING_HALT;
      case 'K':
        return ExecInst.EXEC_INST_CANCEL_ON_TRADING_HALT;
      case 'L':
        return ExecInst.EXEC_INST_LAST_PEG;
      case 'M':
        return ExecInst.EXEC_INST_MID_PRICE_PEG;
      case 'N':
        return ExecInst.EXEC_INST_NON_NEGOTIABLE;
      case 'O':
        return ExecInst.EXEC_INST_OPENING_PEG;
      case 'P':
        return ExecInst.EXEC_INST_MARKET_PEG;
      case 'Q':
        return ExecInst.EXEC_INST_CANCEL_ON_SYSTEM_FAILURE;        
    }
    return
        ExecInst.EXEC_INST_UNSPECIFIED;
  }

}

```

## src/main/java/com/nuamx/bus/utils/config/ApplicationContextProvider.java

```java
package com.nuamx.bus.utils.config;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class ApplicationContextProvider implements ApplicationContextAware {

    private static GenericApplicationContext context;

    @SneakyThrows
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {

        if(applicationContext == null)
            throw new RuntimeException("ApplicationContextProvider.setApplicationContext: ApplicationContext is null");

        if(context != null) {
            
            log.warn("ApplicationContextProvider.setApplicationContext: ApplicationContextProvider already set, ignoring new context");
            return;
        }
            

        if(applicationContext instanceof GenericApplicationContext)
            context = (GenericApplicationContext) applicationContext;
        else 
            context = new GenericApplicationContext(applicationContext);
    }

    public static GenericApplicationContext getGenericApplicationContext() {
        return context;
    }

    public static void setGenericApplicationContext(ApplicationContext applicationContext) {
        log.info("ApplicationContextProvider.setGenericApplicationContext: Setting ApplicationContextProvider context: " + applicationContext);

        if(applicationContext instanceof GenericApplicationContext)
            context = (GenericApplicationContext) applicationContext;
        else 
            context = new GenericApplicationContext(applicationContext);
    }

    public static ConfigurableEnvironment getEnvironment() {
        return (ConfigurableEnvironment) context.getEnvironment();
    }    
}
```

## src/main/java/com/nuamx/bus/utils/config/ConfigurationInterface.java

```java
package com.nuamx.bus.utils.config;

/**
 * Interfaz que permite identificar las clases que son configuraciones 
 * aun cuando no tengan @Configuration anotado.
 * Utilizado para la carga de configuraciones dinamicas.
 */
public interface ConfigurationInterface {

}

```

## src/main/java/com/nuamx/bus/utils/config/ConfigurationUtils.java

```java
package com.nuamx.bus.utils.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.BeanDefinitionBuilder;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.PropertiesPropertySource;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ConfigurationUtils {

    @SuppressWarnings("unchecked")
    public static <T extends ConfigurationInterface> T createConfigurationBeanFromProperties(String configuracionClassname, String propertiesFilename) 
        throws ClassNotFoundException, FileNotFoundException, IOException {

        Class<T> configClass = (Class<T>) Class.forName(configuracionClassname); 

        return createConfigurationBeanFromProperties(configClass, propertiesFilename);

    }

    public static <T extends ConfigurationInterface> T createConfigurationBeanFromProperties(Class<T> configClass, String propertiesFilename) 
        throws ClassNotFoundException, FileNotFoundException, IOException {
        

        GenericApplicationContext applicationContext = ApplicationContextProvider.getGenericApplicationContext();
        ConfigurableEnvironment configurableEnvironment = ApplicationContextProvider.getEnvironment();

        File propertiesFile = new File(propertiesFilename);

        if(!propertiesFile.exists()){
            throw new FileNotFoundException("Properties file not found: " + propertiesFilename);
        }

        Properties properties = new Properties();
        properties.load(new FileInputStream(propertiesFile));

        String propertySourceName = "tmp-" + System.currentTimeMillis();

        // Add properties to the environment
        PropertiesPropertySource propertySource = new PropertiesPropertySource(propertySourceName, properties);
        configurableEnvironment.getPropertySources().addFirst(propertySource);            

        // Config class registration
        DefaultListableBeanFactory beanFactory = (DefaultListableBeanFactory) applicationContext.getAutowireCapableBeanFactory();
        BeanDefinition beanDefinition = BeanDefinitionBuilder.genericBeanDefinition(configClass).getBeanDefinition();
        beanFactory.registerBeanDefinition(configClass.getName(), beanDefinition);

        // New Instance with properties loaded into
        T config = applicationContext.getBean(configClass);    

        configurableEnvironment.getPropertySources().remove(propertySourceName);
        beanFactory.removeBeanDefinition(configClass.getName());

        return config;

    }

    
}

```

## src/main/java/com/nuamx/bus/utils/testing/TestKafkaConfig.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.utils.testing;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serializer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.google.protobuf.Message;
import com.nuamx.bus.kafka.NuamConsumerInterceptor;
import com.nuamx.bus.kafka.NuamProducerInterceptor;
import com.nuamx.bus.utils.testing.TestKafkaProtobufSerdes.TestKafkaProtobufDeserializer;
import com.nuamx.bus.utils.testing.TestKafkaProtobufSerdes.TestKafkaProtobufSerializer;

import io.confluent.kafka.serializers.AbstractKafkaSchemaSerDeConfig;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufDeserializerConfig;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializerConfig;
import io.confluent.kafka.serializers.subject.QualifiedReferenceSubjectNameStrategy;
import io.confluent.kafka.serializers.subject.RecordNameStrategy;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * Clase de configuración de Kafka para pruebas
 * Modo de uso: agregar las siguientes anotaciones a la clase de prueba unitaria donde
 * se quiere utilizar el cluster Kafka y el schema registry de pruebas. 
 * 
 * <pre>
 * @SpringBootTest(
 *     webEnvironment = SpringBootTest.WebEnvironment.NONE,
 *     classes = { TestKafkaConfig.class },
 *     properties = {
 *         "spring.kafka.schema.registry.url=mock://local",
 *         "logging.level.org.apache.kafka.common.metrics=WARN",
 *         "logging.level.org.apache.kafka.clients.consumer.internals.Fetcher=WARN",
 *         "logging.level.kafka.server=WARN",
 *         "logging.level.org.apache.kafka.image=WARN",
 *         "logging.level.org.apache.kafka.controller=WARN",
 *         "logging.level.state.change.logger=WARN",
 *     }
 * )
 * @EmbeddedKafka(
 *     topics = "test-topic", kraft = true
 * )
 * </pre>
 * 
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
@Lazy
@Data
@Slf4j
@SuppressWarnings("rawtypes")
public class TestKafkaConfig {


    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;
    private String schemaRegistryUrl = "mock://local";
    
    private Class<? extends Serializer> keySerializer = StringSerializer.class;   
    private Class<? extends Serializer> valueSerializer = TestKafkaProtobufSerializer.class;


    private Class<? extends Deserializer> keyDeserializer = StringDeserializer.class;
    private Class<? extends Deserializer> valueDeserializer = TestKafkaProtobufDeserializer.class;
 

    @Bean
    public Map<String, Object> producerConfigs() {

        if(bootstrapServers == null)
            throw new IllegalArgumentException("bootstrapServers is required");

        if(schemaRegistryUrl == null)
            throw new IllegalArgumentException("schemaRegistryUrl is required");

        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, this.bootstrapServers);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, this.keySerializer.getName());
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, this.valueSerializer.getName());
        configProps.put("schema.registry.url", this.schemaRegistryUrl);

        // NOTA DE DESARROLLADOR
        // En fase de pruebas si registramos los schemas automaticamente,
        // de lo contrario habría que replicar el registro recursivo que realiza serializer
        // En AVRO se puede solo registrar el json pero en protobuf cada tipo de mensaje/objeto
        // se registra como un schema distinto.

        configProps.put("auto.register.schemas", "true");
        configProps.put("value.subject.name.strategy", RecordNameStrategy.class.getName());
        configProps.put(KafkaProtobufSerializerConfig.REFERENCE_SUBJECT_NAME_STRATEGY_CONFIG, QualifiedReferenceSubjectNameStrategy.class.getName());
        configProps.put(ProducerConfig.INTERCEPTOR_CLASSES_CONFIG, NuamProducerInterceptor.class.getName());        

        return configProps;
    }        

    @Bean
    public Map<String, Object> consumerConfigs() {

        if(bootstrapServers == null)
            throw new IllegalArgumentException("bootstrapServers is required");

        if(schemaRegistryUrl == null)
            throw new IllegalArgumentException("schemaRegistryUrl is required");

        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, this.bootstrapServers);
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, this.keyDeserializer.getName());
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, this.valueDeserializer.getName());
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, "test-group");
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        configProps.put("schema.registry.url", this.schemaRegistryUrl);
        configProps.put("auto.register.schemas", "true");
        configProps.put("use.latest.version", "true");
        configProps.put("value.subject.name.strategy", RecordNameStrategy.class.getName());
        configProps.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "false");
        configProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 1);
        configProps.put(KafkaProtobufDeserializerConfig.DERIVE_TYPE_CONFIG, true);
        configProps.put(ConsumerConfig.INTERCEPTOR_CLASSES_CONFIG, NuamConsumerInterceptor.class.getName());
        
        return configProps;
    }       
 
    @Bean
    public KafkaTemplate<String, Message> kafkaTemplate() {
        KafkaTemplate<String,Message> template = new KafkaTemplate<String, Message>(producerFactory());
        template.setConsumerFactory(consumerFactory());
        template.setKafkaAdmin(kafkaAdmin());
        return template;
    }

    @Bean
    public KafkaAdmin kafkaAdmin() {

        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, this.bootstrapServers);
        return new KafkaAdmin(configs);
    }

    @Bean
    public ProducerFactory<String, Message> producerFactory() {
        return new DefaultKafkaProducerFactory<>(this.producerConfigs());
    }        

    @Bean
    public ConsumerFactory<String, Message> consumerFactory() {
        return new DefaultKafkaConsumerFactory<>(this.consumerConfigs());
    }    

 

}

```

## src/main/java/com/nuamx/bus/utils/testing/TestKafkaProtobufSerdes.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */
package com.nuamx.bus.utils.testing;

import java.util.ArrayList;
import java.util.List;

import com.google.protobuf.Message;

import io.confluent.kafka.schemaregistry.SchemaProvider;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.schemaregistry.testutil.MockSchemaRegistry;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufDeserializer;
import io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializer;

/**
 * Clase de utilidades para pruebas de Kafka con Avro. 
 * Encapsula los tradicionales {@link KafkaAvroSerializer} y {@link KafkaAvroDeserializer}
 * colocando un {@link MockSchemaRegistry} en reemplazo de uno real. 
 * Works like a charm!
 * 
 * @author Jonathan Makuc - jmakuc@bithaus.cl - Dic 2024
 */
public class TestKafkaProtobufSerdes   {

    private static List<SchemaProvider> schemaProviders = 
            new ArrayList<SchemaProvider>() {{
                add(new io.confluent.kafka.schemaregistry.protobuf.ProtobufSchemaProvider());
            }};
    
    private static final SchemaRegistryClient REGISTRY = MockSchemaRegistry.getClientForScope("PROTOBUF", schemaProviders);
    

    public static SchemaRegistryClient getRegistry() {
        return REGISTRY;
    }

    public static class TestKafkaProtobufSerializer<T extends Message> extends KafkaProtobufSerializer<T> {
        public TestKafkaProtobufSerializer() {
            super(REGISTRY);
        }
    }
 

    public static class TestKafkaProtobufDeserializer<T extends Message> extends KafkaProtobufDeserializer<T> {
        public TestKafkaProtobufDeserializer() {
            super(REGISTRY);
        }
    }    
}

```

## src/main/java/com/nuamx/bus/utils/time/TradingTime.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */


package com.nuamx.bus.utils.time;

import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.concurrent.TimeUnit;

import lombok.extern.slf4j.Slf4j;

/**
 * Clase Utilitaria de hora.
 * Permite la centralizacion de la hora en nanosegundos para simulacion de
 * cambios
 * horarios en pruebas de sistema.
 * Al setearse un nuevo "tiempo actual", el objeto guarda el nanotime del
 * seteo y lo utiliza para calcular el delta que ha ocurrido desde el seteo y
 * una consulta, entregando el tiempo simulado.
 * Si no se setea tiempo forzado, obtiene la hora del sistema operativo.
 *
 * @version 1.0
 * @since 1.0
 * @author jmakuc
 * @author Javier Sepúlveda
 */

@Slf4j
public class TradingTime {

  // Atributos //

  // Tiempo forzado.
  private static long startTime = 0;
  // Nanosegundos de cuando fue seteado el tiempo forzado.
  private static long startTimeSetTime = 0;
  // Ultimo timestamp en nanosegundos entregado
  private static long lastNanoTime = 0;
  // Update lock para evitar problemas de concurrencia.
  private static final Object updateLock = new Object();
  // Hashset de callbacks para ser llamados en cada actualizacion de tiempo.
  private static HashSet<Runnable> onTimeUpdateCallbacks = new HashSet<Runnable>();

  // Getter & Setter Custom //

  /**
   * Setea el tiempo actual en nanosegundos
   *
   * @param newTime  tiempo actual
   * @param timeUnit unidad de tiempo de la nueva hora del sistema
   * @return tiempo actual en nanosegundos
   */
  public static synchronized long setTime(long newTime, TimeUnit timeUnit) {

    synchronized (updateLock) {

      startTime = TimeUnit.NANOSECONDS.convert(newTime, timeUnit);

      startTimeSetTime = System.nanoTime();

      lastNanoTime = 0;

      Iterator<Runnable> callbacks = onTimeUpdateCallbacks.iterator();

      while (callbacks.hasNext())
        callbacks.next().run();

      log.info("Trading Time updated: " + getDate());

      return startTime;
    }
  }

  /**
   * Obtiene el tiempo actual en nanosegundos. Si no se ha seteado tiempo
   * forzado, obtiene el tiempo del sistema operativo.
   *
   * @return tiempo actual en nanosegundos
   */
  public static long getTimeNanos() {

    if (startTime == 0) {

      startTime = System.currentTimeMillis() * 1000000l;
      startTimeSetTime = System.nanoTime();
    }

    long delta = System.nanoTime() - startTimeSetTime;

    long returnValue = startTime + delta;

    synchronized (updateLock) {

      if (returnValue <= lastNanoTime) {

        returnValue = lastNanoTime + 1;
      }

      lastNanoTime = returnValue;
    }

    return returnValue;
  }

  /**
   * Obtiene el tiempo actual en milisegundos. Si no se ha seteado tiempo
   * forzado, obtiene el tiempo del sistema opertivo.
   *
   * @return tiempo actual en milisegundos
   */
  public static long getTimeMilis() {

    return getTimeNanos() / 1000000l;
  }

  /**
   * Obtiene el tiempo actual en milisegundos. Si no se ha seteado tiempo
   * forzado, obtiene el tiempo del sistema opertivo.
   *
   * @return tiempo actual en milisegundos
   */
  public static Date getDate() {

    return new Date(getTimeMilis());
  }

  /**
   * Retorna un objeto Date a partir de un timestamp en nanosegundos
   *
   * @param nanoTime timestamp en nanosegundos
   * @return Nuevo objeto Date
   */
  public static Date getDate(long nanoTime) {

    return new Date(TimeUnit.NANOSECONDS.toMillis(nanoTime));
  }

  /**
   * Obtiene el tiempo actual en nanosegundos considerando un delta de tiempo.
   * Si no se ha seteado tiempo
   * forzado, obtiene el tiempo del sistema operativo.
   *
   * @param delta         delta de tiempo
   * @param deltaTimeUnit unidad de tiempo del delta
   * @return timestamp en nano segundos de ahora + delta.
   */
  public static long getTimeNano(long delta, TimeUnit deltaTimeUnit) {

    long deltaNanos = deltaTimeUnit.toNanos(delta);
    return TradingTime.getTimeNanos() + deltaNanos;
  }

  // Métodos //

  /**
   * Agrega un objeto 'callback' que es invocado cuando se actualiza la hora
   * forzadamente
   *
   * @param runnable
   */
  public static void addOnTimeUpdateCallback(Runnable runnable) {

    onTimeUpdateCallbacks.add(runnable);
  }

}

```

## src/main/java/com/nuamx/bus/utils/time/TradingTimer.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */

 package com.nuamx.bus.utils.time;

import java.util.HashMap;
import java.util.TreeSet;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.Semaphore;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

/**
 *
 *
 * /**
 * Calendarizador de tareas cuyo tiempo de referencia es entregado por
 * {@link TradingTime}.
 * Implementa correctamente el gatillamiento de eventos por modificaciones
 * a la hora en TradingTime.
 *
 * @version 1.0
 * @since 1.0
 * @author jmakuc
 * @author Javier Sepúlveda
 * @see TradingTime
 * @see TradingTimerEntry
 */

@Slf4j
@Getter
@Setter
@ToString
public class TradingTimer extends Thread {

  // Atributos //

  // N° De Hilos para la ejecución de tareas
  public static int DEFAULT_WORKING_THREADS = 4;
  // Cola de tareas
  private TreeSet<TradingTimerEntry> queue = new TreeSet<TradingTimerEntry>();
  // Mapa de tareas
  private HashMap<Runnable, TradingTimerEntry> taskEntryMap = new HashMap<Runnable, TradingTimerEntry>();
  // Contador de instancias
  private static AtomicInteger instanceCount = new AtomicInteger(0);
  // Acepta nuevas tareas
  private boolean acceptNewTasks = true;
  // Lock de la cola
  private Semaphore queueLock = new Semaphore(1);
  // Lock de la cola vacía
  private Semaphore emptyLock = new Semaphore(0);
  // Pool de hilos
  private ThreadPoolExecutor threadPool = null;
  // Serializador de hilos
  private static final AtomicLong threadPoolSerializer = new AtomicLong(0);

  // Constructores Custom //

  /**
   * Constructor sin argumentos.
   */
  public TradingTimer() {

    this(DEFAULT_WORKING_THREADS);
  }

  /**
   * Constructor con las hebras internas
   *
   * @param workingThreads cantidad de hebras internas ejecutoras de tareas
   */
  public TradingTimer(int workingThreads) {

    this("TradingTimer" + instanceCount.incrementAndGet(), false, workingThreads);
  }

  /**
   * Constructor con el nombre y las hebras
   *
   * @param name           nombre del timer
   * @param workingThreads cantidad de hebras ejecutoras de tareas
   */
  public TradingTimer(String name, int workingThreads) {

    this(name, false, workingThreads);

  }

  /**
   * Constructor
   *
   * @param isDaemon       convierte a la hebra principal del timer en daemon
   * @param workingThreads cantidad de hebras ejecutoras de tareas
   */
  public TradingTimer(boolean isDaemon, int workingThreads) {

    this("TradingTimer" + instanceCount.incrementAndGet(), false, workingThreads);
  }

  /**
   * Constructor
   *
   * @param name           nombre del timer
   * @param isDaemon       convierte a la hebra principal del timer en daemon
   * @param workingThreads cantidad de hebras ejecutoras de tareas
   * @param autoStart      iniciar el timer al instanciar
   */
  public TradingTimer(String name, boolean isDaemon, int workingThreads, boolean autoStart) {

    this.setName(name);
    this.setDaemon(isDaemon);

    this.threadPool = new ScheduledThreadPoolExecutor(workingThreads, new TradingTimeRejectedExecutionHandler());

    log.info(String.format("Initialized with %s worker threads", workingThreads));

    if (autoStart) {
      this.start();
    }

    // enganche para despertar al timer en caso que se fuerza un cambio de hora

    TradingTime.addOnTimeUpdateCallback(new Runnable() {

      public void run() {
        emptyLock.release();
      }
    });

  }

  /**
   * Constructor
   *
   * @param name           nombre del timer
   * @param isDaemon       convierte a la hebra principal del timer en daemon
   * @param workingThreads cantidad de hebras ejecutoras de tareas
   */
  public TradingTimer(String name, boolean isDaemon, int workingThreads) {

    this(name, isDaemon, workingThreads, true);
  }

  // Getter & Setters Customs //

  /**
   * Entradas calendarizadas en este timer
   */
  public TradingTimerEntry[] getScheduledEntries() {

    return queue.toArray(new TradingTimerEntry[0]);
  }

  // Métodos //

  /**
   * Inicia el timer
   */
  @Override
  public void start() {
    // Logger
    log.info("Timer starting...");
    super.start();
  }

  /**
   * Calendariza o recalendariza la ejecución de la una tarea en un tiempo
   * determinado en el futuro (timestamp real).
   *
   * @param task         tarea a ejecutar
   * @param scheduleTime timestamp en el futuro.
   * @param timeUnit     unidad de tiempo utilizada
   */
  public void scheduleOnTime(Runnable task, long scheduleTime, TimeUnit timeUnit) {

    scheduleOnTimePeriod(task, scheduleTime, 0, timeUnit);
  }

  /**
   * Calendariza o recalendariza la ejecución de la una tarea en un tiempo
   * determinado en el futuro (timestamp real), ejecutandola periodicamente
   * luego de la primera llamada.
   *
   * @param task         tarea a ejecutar
   * @param scheduleTime timestamp en el futuro.
   * @param period       periodo de ejecucion luego de la primera llamada
   * @param timeUnit     unidad de tiempo utilizada
   */
  public void scheduleOnTimePeriod(Runnable task, long scheduleTime, long period, TimeUnit timeUnit) {

    long scheduleTimeNano = TimeUnit.NANOSECONDS.convert(scheduleTime, timeUnit);
    long periodNano = TimeUnit.NANOSECONDS.convert(period, timeUnit);

    schedule(task, scheduleTimeNano, periodNano);
  }

  /**
   * Calendariza o recalendariza la ejecución de la una tarea en delay
   * nanosegundos en el futuro
   *
   * @param task     tarea a ejecutar
   * @param delay    tiempo a esperar para la primera llamada
   * @param timeUnit unidad de tiempo utilizada
   */
  public void scheduleDelayed(Runnable task, long delay, TimeUnit timeUnit) {

    scheduleDelayedPeriod(task, delay, 0, timeUnit);
  }

  /**
   * Calendariza o recalendariza la ejecución de la una tarea en delay
   * nanosegundos en el futuro, ejecutandola periódicamente luego de la
   * primera llamada
   *
   * @param task     tarea a ejecutar
   * @param delay    tiempo a esperar para la primera llamada
   * @param period   periodo de ejecucion luego de la primera llamada
   * @param timeUnit unidad de tiempo utilizada
   */
  public void scheduleDelayedPeriod(final Runnable task, long delay, long period, TimeUnit timeUnit) {

    // especial que pasa directo al thread pool:
    if (delay == 0 && period == 0) {

      // threadPool.execute(new TaskRunner(task));
      // return;
    }

    long delayNano = TimeUnit.NANOSECONDS.convert(delay, timeUnit);
    long periodNano = TimeUnit.NANOSECONDS.convert(period, timeUnit);

    schedule(task, TradingTime.getTimeNanos() + delayNano, periodNano);
  }

  /**
   * Cancela la ejecución de una tarea
   *
   * @param task tarea a cancelar
   * @return True si la tarea se encontró en la cola de tareas calendarizadas
   *         y fue removida.
   */
  public boolean cancel(Runnable task) {

    queueLock.acquireUninterruptibly();

    TradingTimerEntry entry = taskEntryMap.get(task);

    if (entry == null) {

      queueLock.release();
      return false;
    }

    boolean result = queue.remove(entry);
    entry.setState(TradingTimerEntry.CANCELLED);

    queueLock.release();

    // Logger

    if (result)
      log.info("Task Cancelled: " + task.getClass().getSimpleName());
    else
      log.debug(String.format("Task %s not found in queue...", task.getClass().getSimpleName()));

    return result;
  }

  /**
   * Cierra el servicio descartando todas las tareas a realizar.<br>
   * No interfiere con las tareas que pudieran encontrarse en ejecución.
   */
  public void shutdown() {

    acceptNewTasks = false;
    log.info(this.getName() + " shutdown");
  }

  /**
   * Elimina todas las tareas por ejecutar de la cola.
   */
  public void clear() {

    queueLock.acquireUninterruptibly();

    queue.clear();

    queueLock.release();

    log.info(this.getName() + " cleared");
  }

  /**
   * Calendarización de una tarea
   *
   * @param task             tarea a calendarizar
   * @param scheduleNanoTime tiempo de gatillamiento inicial
   * @param period           periodo de gatillamiento
   */
  private void schedule(Runnable task, long scheduleNanoTime, long period) {

    if (task == null)
      throw new RuntimeException("Task cannot be null");

    if (scheduleNanoTime <= 0)
      throw new IllegalArgumentException("Scheduletime must be positive");

    if (period < 0)
      throw new IllegalArgumentException("Period must be zero or positive");

    TradingTimerEntry entry = new TradingTimerEntry(task);
    entry.setNextExecutionTime(scheduleNanoTime);
    entry.setPeriod(period);

    queueLock.acquireUninterruptibly();

    if (entry.getState() != TradingTimerEntry.VIRGIN &&
        entry.getState() != TradingTimerEntry.SCHEDULED)
      throw new IllegalArgumentException("Task has already been completed");

    TradingTimerEntry oldEntry = taskEntryMap.get(task);

    if (oldEntry != null)
      queue.remove(oldEntry);

    taskEntryMap.put(task, entry);

    queue.add(entry);
    entry.updateState(scheduleNanoTime, period, TradingTimerEntry.SCHEDULED);

    // Cambio de debug to info
    if (log.isDebugEnabled() && period < 1) {
      log.info(
          String.format("Task [%s] scheduled to be trigger @ %s", entry.serial, TradingTime.getDate(scheduleNanoTime)));
    }

    else {
      log.info(String.format("Task [%s] scheduled to be trigger @ %s, period: %s milis", entry.serial,
          TradingTime.getDate(scheduleNanoTime), TimeUnit.MILLISECONDS.convert(period, TimeUnit.NANOSECONDS)));

    }

    queueLock.release();

    emptyLock.release();

  }

  /**
   * Ciclo de búsqueda de tareas vencidas a ejecutar
   */

  @Override
  public void run() {

    long delta = 0;

    while (acceptNewTasks) {

      queueLock.acquireUninterruptibly();

      if (queue.isEmpty()) {

        queueLock.release();
        emptyLock.acquireUninterruptibly();
      } else {

        TradingTimerEntry[] tasks = queue.headSet(new DummyNowTask(), true).toArray(new TradingTimerEntry[] {});

        int triggeredTasks = 0;

        for (TradingTimerEntry current : tasks) {

          if (!queue.remove(current))
            log.error("Could not remove element from task queue: " + current);

          if (current.getPeriod() > 0) {
            current.updateState(TradingTime.getTimeNanos() + current.getPeriod(), current.getPeriod(),
                TradingTimerEntry.SCHEDULED);
            queue.add(current);
            continue;
          } else {
            current.setState(TradingTimerEntry.EXECUTED);
            threadPool.execute(new TaskRunner(current));
          }

          triggeredTasks++;

        }

        if (log.isDebugEnabled())
          log.debug(String.format("%s triggered tasks", triggeredTasks));

        if (!queue.isEmpty()) {

          delta = queue.first().getNextExecutionTime() - TradingTime.getTimeNanos();

          delta = (long) delta;
        } else {

          delta = Long.MAX_VALUE;
        }

        queueLock.release();

        if (delta < 0)
          continue;

        try {

          if (log.isDebugEnabled())
            log.debug(String.format("Nothing to do. Sleeping %s milis",
                TimeUnit.MILLISECONDS.convert(delta, TimeUnit.NANOSECONDS)));

          emptyLock.tryAcquire(delta, TimeUnit.NANOSECONDS);
        } catch (Exception e) {

          // espera interrumpida sin significado.
          // si se ha llamado a shutdown, entonces el ciclo se
          // rompera en el while general
        }

      }

    }
  }
  // Clases internas //

  /**
   * Utilizada para obtener la rama del árbol que es menor
   * para determinar que tareas deben ser ejecutadas.
   *
   * @version 1.0
   * @since 1.0
   * @see TradingTimerEntry
   * @see Runnable
   * @see TaskRunner
   */

  private class DummyNowTask extends TradingTimerEntry {

    /**
     * Constructor de la clase.
     *
     * @see TradingTimerEntry#TradingTimerEntry(Runnable)
     * @see TradingTime#getTimeNanos()
     */

    public DummyNowTask() {

      super(new Runnable() {

        public void run() {

        }
      }, TradingTime.getTimeNanos());
    }
  }

  /**
   * Clase interna para ejecutar las tareas.
   *
   * @version 1.0
   * @since 1.0
   * @see Runnable
   * @see TaskRunner
   *
   *
   */

  private class TaskRunner implements Runnable {

    // Atributos //
    private Runnable task;

    // Constructor //

    /**
     * Constructor de la clase.
     *
     * @param task Tarea a ejecutar.
     * @see Runnable
     *
     */

    public TaskRunner(Runnable task) {
      this.task = task;
    }

    // Métodos //

    /**
     * Método que ejecuta la tarea.
     *
     * @see Runnable#run()
     *
     */

    public void run() {
      try {
        log.info("Task Triggered: " + task);
        task.run();
      } catch (Exception e2) {
        log.error("Task did not catch exception " + e2, e2);
      }
    }

  }

  /**
   * clase Factory que nombra del pool de hebras de acuerdo al nombre del time,
   * serializador de hilos.
   *
   * @version 1.0
   * @since 1.0
   * @see ThreadFactory
   * @see TradingTimer
   *
   */

  class TradingTimerThreadFactory implements ThreadFactory {

    /**
     * Método que crea un nuevo hilo.
     *
     * @param r Tarea a ejecutar.
     * @return Hilo creado.
     * @see ThreadFactory#newThread(Runnable)
     * @see TaskRunner
     *
     */

    public Thread newThread(Runnable r) {

      Thread t = new Thread(r);
      t.setName(getName() + "-ThreadPool-" +
          threadPoolSerializer.incrementAndGet());

      if (log.isDebugEnabled())
        log.debug("Thread created: " + t.getName());

      return t;
    }
  }

  /**
   * Clase interna para manejar las tareas rechazadas.
   *
   * @version 1.0
   * @since 1.0
   * @see RejectedExecutionHandler
   * @see ThreadPoolExecutor
   * @see TaskRunner
   *
   */

  class TradingTimeRejectedExecutionHandler implements RejectedExecutionHandler {

    /**
     * Método que se ejecuta cuando una tarea es rechazada por el pool de hilos.
     *
     * @param r        Tarea rechazada.
     * @param executor Pool de hilos.
     * @see RejectedExecutionHandler#rejectedExecution(Runnable, ThreadPoolExecutor)
     * @see TaskRunner
     *
     */

    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {

      if (r instanceof TaskRunner) {

        TaskRunner runner = (TaskRunner) r;

        log.warn(String.format("%s task execution rejected by timer's thread pool", runner.task));

      }
    }

  }
}

```

## src/main/java/com/nuamx/bus/utils/time/TradingTimerEntry.java

```java
/*
 * Copyright (c) NUAM EXCHANGE. All rights reserved.
 *
 * All  rights to this product are owned  by NUAM EXCHANGE  and  may  only  be
 * used under the terms of its associated license document. You may NOT  copy,
 * modify,  sublicense,  or  distribute  this  source  file or portions of  it
 * unless previously authorized in  writing by  NUAM EXCHANGE. In  any  event,
 * this notice and the above copyright must always be included verbatim   with
 * this file.
 */

package com.nuamx.bus.utils.time;

import java.util.concurrent.atomic.AtomicLong;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Tarea Programada utilizada por {@link TradingTimer}.
 *
 * @version 1.0
 * @since 1.0
 * @see TradingTimer
 * @author jmakuc
 * @author Javier Sepúlveda
 */

@Data
@NoArgsConstructor
public class TradingTimerEntry implements Runnable, Comparable<TradingTimerEntry> {

  // Atributos //

  // Serializador de tareas.
  private static final AtomicLong serializer = new AtomicLong(0);
  // Serial de la tarea.
  public final long serial = serializer.incrementAndGet();

  // Estados de la tarea.

  // Tarea sin ejecutar.
  public static final int VIRGIN = 0;
  // Tarea programada.
  public static final int SCHEDULED = 1;
  // Tarea ejecutada.
  public static final int EXECUTED = 2;
  // Tarea cancelada.
  public static final int CANCELLED = 3;

  // Estado de la tarea.
  private int state = VIRGIN;
  // Tiempo de ejecución de la tarea.
  private long nextExecutionTime = 0;
  // Tiempo de ejecución de la tarea.
  private long lastExecutionTime = 0;
  // Periodo de ejecución de la tarea.
  private long period = 0;
  // Tarea a ejecutar.
  private Runnable task = null;

  // Constructores Custom //

  /**
   * Constructor de la tarea programada.
   *
   * @param task              Tarea a ejecutar.
   * @param nextExecutionTime Tiempo de ejecución de la siguiente tarea.
   */

  public TradingTimerEntry(Runnable task, long nextExecutionTime) {
    this.task = task;
    this.nextExecutionTime = nextExecutionTime;
  }

  /**
   * Constructor solo con tarea a ejecutar.
   *
   * @param task tarea a ejecutar
   */
  public TradingTimerEntry(Runnable task) {

    this.task = task;
  }

  // Getter & Setters Customs //

  /**
   * Retorna el estado de la tarea como string.
   *
   * @return estado de la tarea como string.
   */
  public String getStateString() {

    switch (state) {

      case CANCELLED:
        return "CANCELLED";
      case EXECUTED:
        return "EXECUTED";
      case SCHEDULED:
        return "SCHEDULED";
      case VIRGIN:
        return "VIRGIN";
    }

    return "UNKONWN";
  }

  /**
   * Actualiza el estado de la tarea
   *
   * @param newScheduleTime nuevo timestamp de gatillamiento
   * @param newPeriod       nuevo periodo de gatillamiento
   * @param newState        nuevo estado de la tarea
   */
  synchronized void updateState(long newScheduleTime, long newPeriod, int newState) {

    this.nextExecutionTime = newScheduleTime;
    this.period = newPeriod;
    this.state = newState;
  }

  // Métodos //

  /**
   * Ejecuta la tarea programada.
   *
   */

  public void run() {

    // Ejecuta la tarea.
    task.run();
  }

  /**
   * Cancela la ejecución de la tarea. No la remueve de la cola de espera,
   * solo la marca como cancelada. Cuando el TradingTimer decida que es
   * tiempo de ejecutarla la omitirá al estar cancelada.
   *
   * @return TRUE si el estado al cancel era SCHEDULED.
   *
   */

  public synchronized boolean cancel() {

    // Manejo de excepciones
    boolean result = (state == SCHEDULED);
    state = CANCELLED;
    return result;
  }

  /**
   * Comparacion para ordenamiento en base al tiempo de gatillamiento.
   *
   * @param other tarea a comparar
   * @return -1 si el tiempo de ejecucion de esta tarea es mas cercano que
   *         la otra.
   */
  public int compareTo(TradingTimerEntry other) {

    if (this.getNextExecutionTime() > other.getNextExecutionTime())
      return 1;
    else if (this.getNextExecutionTime() < other.getNextExecutionTime())
      return -1;

    if (this.serial < other.serial)
      return -1;
    else if (this.serial > other.serial)
      return 1;

    return 0;
  }

}

```
