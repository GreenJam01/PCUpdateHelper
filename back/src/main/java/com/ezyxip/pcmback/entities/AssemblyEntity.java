package com.ezyxip.pcmback.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ASSEMBLIES")
public class AssemblyEntity {

    @Id
    private Long id;
    private String CPU;
    private String GPU;
    private String OP;
    private String motherboard;
    private String HDD;

    public AssemblyEntity() {
    }

    public AssemblyEntity(Long id, String CPU, String GPU, String OP, String motherboard, String HDD) {
        this.id = id;
        this.CPU = CPU;
        this.GPU = GPU;
        this.OP = OP;
        this.motherboard = motherboard;
        this.HDD = HDD;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCPU() {
        return CPU;
    }

    public void setCPU(String CPU) {
        this.CPU = CPU;
    }

    public String getGPU() {
        return GPU;
    }

    public void setGPU(String GPU) {
        this.GPU = GPU;
    }

    public String getOP() {
        return OP;
    }

    public void setOP(String OP) {
        this.OP = OP;
    }

    public String getMotherboard() {
        return motherboard;
    }

    public void setMotherboard(String motherboard) {
        this.motherboard = motherboard;
    }

    public String getHDD() {
        return HDD;
    }

    public void setHDD(String HDD) {
        this.HDD = HDD;
    }

    @Override
    public String toString() {
        return "AssemblyEntity{" +
                "id=" + id +
                ", CPU='" + CPU + '\'' +
                ", GPU='" + GPU + '\'' +
                ", OP='" + OP + '\'' +
                ", motherboard='" + motherboard + '\'' +
                ", HDD='" + HDD + '\'' +
                '}';
    }
}
